import path from 'path';
import esbuild, { BuildOptions, BuildResult } from 'esbuild';
import yargs from 'yargs/yargs';

const buildConfigs: Partial<BuildOptions>[] = [
    {
        absWorkingDir: path.join(__dirname, '/..'),
        bundle: true,
        entryPoints: ['src/index.ts'],
        format: 'cjs',
        minify: true,
        outfile: 'dist/index.cs.js',
        platform: 'node',
    },
    {
        absWorkingDir: path.join(__dirname, '/..'),
        bundle: true,
        entryPoints: ['src/index.ts'],
        format: 'esm',
        minify: true,
        outfile: 'dist/index.esm.mjs',
        platform: 'node',
    },
];

class Builder {
    config: {
        minify: boolean;
        production: boolean;
        verbose: boolean;
        packagePath: string;
    } = {
        minify: false,
        production: false,
        verbose: false,
        packagePath: '',
    };

    write(msg: string) {
        process.stdout.write(`${msg}`.toString());
    }

    writeln(msg: string) {
        process.stdout.write(`${msg}\n`.toString());
    }

    async compile() {
        const results: (BuildResult & { meta?: string })[] = [];

        for (const buildConfig of buildConfigs) {
            const packageJSON = await import(
                path.join(
                    __dirname,
                    '../',
                    this.config.packagePath,
                    'package.json'
                )
            );

            const dependencies = Object.keys({
                ...packageJSON.devDependencies,
                ...packageJSON.dependencies,
            });
            const result = esbuild.buildSync({
                ...buildConfig,
                allowOverwrite: true,
                define: {
                    __APP_VERSION__: `'${packageJSON.version}'`,
                    __COMPILED_AT__: `'${new Date().toUTCString()}'`,
                },
                entryPoints:
                    (buildConfig.entryPoints as string[]).map((entry: string) =>
                        path.join(this.config.packagePath, entry)
                    ) || undefined,
                external: dependencies,
                logLevel: 'silent',
                metafile: true,
                minify: buildConfig.minify || this.config.minify,
                outfile: path.join(
                    this.config.packagePath,
                    buildConfig.outfile || ''
                ),
                target: `esnext`,
            });

            let meta;
            if (result.metafile) {
                meta = esbuild.analyzeMetafileSync(result.metafile, {
                    color: true,
                });
            }

            results.push(Object.assign({}, result, { meta }));
        }

        return results;
    }

    sizeForDisplay(bytes: number) {
        let size = `${bytes / 1024}`.slice(0, 4);
        if (size.endsWith('.')) {
            size += '0';
        }
        return `${size} kb`;
    }

    reportCompileResults(results: BuildResult & { meta?: string }) {
        results.errors.forEach(errorMsg =>
            this.writeln(`* Error: ${errorMsg}`)
        );
        results.warnings.forEach(msg => this.writeln(`* Warning: ${msg}`));

        if (results.metafile) {
            Object.keys(results.metafile.outputs).forEach(fn => {
                this.writeln(
                    `*   » created '${fn}' (${this.sizeForDisplay(
                        results.metafile?.outputs[fn]?.bytes || 0
                    )})`
                );
            });
        }
    }

    processArgv() {
        this.config.packagePath = process.argv[2];
        const options = yargs(process.argv.slice(3)).options({
            verbose: { type: 'boolean', default: false },
            v: { type: 'boolean', default: false },
            prod: { type: 'boolean', default: false },
            production: { type: 'boolean', default: false },
            p: { type: 'boolean', default: false },
            minify: { type: 'boolean', default: false },
        }).argv as {
            verbose: boolean;
            v: boolean;
            prod: boolean;
            production: boolean;
            p: boolean;
            minify: boolean;
        };

        this.config.minify = options.minify;
        this.config.production =
            options.production || options.prod || options.p;
        this.config.verbose = options.verbose || options.v;
    }

    async run() {
        this.processArgv();

        if (this.config.verbose) {
            this.writeln(`* Using esbuild v${esbuild.version}.`);
        }

        this.write(`* Compiling library...${this.config.verbose ? '\n' : ''}`);

        const startedTs = new Date().getTime();
        const results = await this.compile();
        const finishedTs = new Date().getTime();

        if (this.config.verbose) {
            results.forEach(result => this.reportCompileResults(result));
        }

        this.writeln(
            (this.config.verbose ? `* D` : `d`) +
                `one. (${finishedTs - startedTs} ms)`
        );

        if (this.config.verbose) {
            results.forEach(result => {
                const lines = result.meta?.split('\n') || [];

                this.writeln(lines.join('\n'));
            });
        }
    }
}

new Builder()
    .run()
    .then(() => {
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
