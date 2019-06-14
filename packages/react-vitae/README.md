# React vitae
![npm](https://img.shields.io/npm/v/react-vitae.svg) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-vitae.svg)

`react-vitae` is a set of strongly typed and battle tested React components and hooks that enable you to connect a [json-resume](https://github.com/jsonresume/resume-schema) schema to your components and build great looking resumes from a standardized schema. 

## Installation

You can install `react-vitae` with NPM or Yarn.

`npm install --save react-vitae` or `yarn add react-vitae`

## Usage

`react-vitae` includes the [TypeScript types](/packages/react-vitae/src/types.ts) for the standard JSON resume schema and a set of components.

## Peer dependencies

`react-vitae` requires an installation of `react` version 16 or up.

### Writing the resume file

The JSON resume repo provides all the tools to create and validate your resume file.

If using TypeScript, you can use the type suggestion and auto-completion feature of your IDE to create the schema using the provided types.

```typescript
import { Resume } from 'react-vitae';

const resume: Resume = {};
```

### The resume provider

The components need the resume file to be provided at the root of your application, if you have used `redux` or `react-router` before, this pattern should be familiar.

```jsx
import { ResumeProvider } from 'react-vitae';

const resume = {};

export const App => (
    <ResumeProvider resume={resume}>
        {/* Your application goes here */}
    </ResumeProvider>
);
```

### Using hooks

The package exports a set of custom hooks to retrieve the resume or part of it.

- `useResume` retrieves the main [resume](/packages/react-vitae/src/types.ts#L232).
- `useBasic` retrieves the [basic resume information](/packages/react-vitae/src/types.ts#L29).
- `useWork` retrieves the [work experiences](/packages/react-vitae/src/types.ts#L58).
- `useVolunteer` retrieves the [volunteer experiences](/packages/react-vitae/src/types.ts#L87).
- `useEducation` retrieves the [education information](/packages/react-vitae/src/types.ts#L110).
- `useAwards` retrieves the [list of awards](/packages/react-vitae/src/types.ts#L133).
- `usePublications` retrieves the [list of publications](/packages/react-vitae/src/types.ts#L147).
- `useSkills` retrieves the [list of skills](/packages/react-vitae/src/types.ts#L164).
- `useLanguages` retrieves the [list of languages](/packages/react-vitae/src/types.ts#L175).
- `useInterests` retrieves the [list of interests](/packages/react-vitae/src/types.ts#L183).
- `useReferences` retrieves the [list of professional references](/packages/react-vitae/src/types.ts#L191).
- `useProjects` retrieves the [list of projects](/packages/react-vitae/src/types.ts#L200).

All have the same signature: `useElement(): type` and return type specific type they represent.

### Using Higher-Order components

The package exports a set of hocs to retrieve the resume or part of it and inject them in an augmented component.

- `withResume` retrieves the main [resume](/packages/react-vitae/src/types.ts#L232).
- `withBasic` retrieves the [basic resume information](/packages/react-vitae/src/types.ts#L29).
- `withWork` retrieves the [work experiences](/packages/react-vitae/src/types.ts#L58).
- `withVolunteer` retrieves the [volunteer experiences](/packages/react-vitae/src/types.ts#L87).
- `withEducation` retrieves the [education information](/packages/react-vitae/src/types.ts#L110).
- `withAwards` retrieves the [list of awards](/packages/react-vitae/src/types.ts#L133).
- `withPublications` retrieves the [list of publications](/packages/react-vitae/src/types.ts#L147).
- `withSkills` retrieves the [list of skills](/packages/react-vitae/src/types.ts#L164).
- `withLanguages` retrieves the [list of languages](/packages/react-vitae/src/types.ts#L175).
- `withInterests` retrieves the [list of interests](/packages/react-vitae/src/types.ts#L183).
- `withReferences` retrieves the [list of professional references](/packages/react-vitae/src/types.ts#L191).
- `withProjects` retrieves the [list of projects](/packages/react-vitae/src/types.ts#L200).

All hocs will add a new prop to the augmented component named after the type in lowercase, for example.

```jsx harmony
import { withResume } from 'react-vitae';

const Component = ({ resume }) => { 
    // ...
};

export default withResume(Component);
```

### Using render props

The package exports a set of components to retrieve the resume or part of it and use them with the render prop pattern.

- `WithResume` retrieves the main [resume](/packages/react-vitae/src/types.ts#L232).
- `WithBasic` retrieves the [basic resume information](/packages/react-vitae/src/types.ts#L29).
- `WithWork` retrieves the [work experiences](/packages/react-vitae/src/types.ts#L58).
- `WithVolunteer` retrieves the [volunteer experiences](/packages/react-vitae/src/types.ts#L87).
- `WithEducation` retrieves the [education information](/packages/react-vitae/src/types.ts#L110).
- `WithAwards` retrieves the [list of awards](/packages/react-vitae/src/types.ts#L133).
- `WithPublications` retrieves the [list of publications](/packages/react-vitae/src/types.ts#L147).
- `WithSkills` retrieves the [list of skills](/packages/react-vitae/src/types.ts#L164).
- `WithLanguages` retrieves the [list of languages](/packages/react-vitae/src/types.ts#L175).
- `WithInterests` retrieves the [list of interests](/packages/react-vitae/src/types.ts#L183).
- `WithReferences` retrieves the [list of professional references](/packages/react-vitae/src/types.ts#L191).
- `WithProjects` retrieves the [list of projects](/packages/react-vitae/src/types.ts#L200).

They will all execute the render prop function with an object containing the resume element named after the retreived type in lowercase, for example.

```jsx harmony
import { WithResume } from 'react-vitae';

export const Component = () => (
    <WithResume>
        {({ resume }) => {
            // ...
        }}
    </WithResume>
);
```

## Development

### Installation

The installation of dependencies is made from the monorepo's root using lerna, see the commands there for more information on dependencies.

### Running Lint

`npm lint` will run eslint in this package.

### Running Tests

`npm test` will run the tests in this packages.

### Building

`npm run build` will build the package and create the built files in the `dist` folder.

`npm run clean` will clean the package, removing the cache, `node_modules` and built resources.

### Publishing

Publishing is done automatically through travis.
