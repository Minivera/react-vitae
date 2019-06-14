import * as React from 'react';
import { render } from '@testing-library/react';

import {
    ResumeProvider,
    withResume,
    withBasic,
    withWork,
    withVolunteer,
    withEducation,
    withAwards,
    withPublications,
    withSkills,
    withInterests,
    withReferences,
    withLanguages,
    withProjects,
} from '../src';

import { mockResume } from './mocks';

const hocs: {
    [s: string]: {
        hoc: (Component: React.ComponentType<any>) => (props: unknown) => React.ReactElement<unknown>;
        expect: unknown;
    };
} = {
    withResume: {
        hoc: withResume,
        expect: mockResume,
    },
    withBasic: {
        hoc: withBasic,
        expect: mockResume.basic,
    },
    withWork: {
        hoc: withWork,
        expect: mockResume.work,
    },
    withVolunteer: {
        hoc: withVolunteer,
        expect: mockResume.volunteer,
    },
    withEducation: {
        hoc: withEducation,
        expect: mockResume.education,
    },
    withAwards: {
        hoc: withAwards,
        expect: mockResume.awards,
    },
    withPublications: {
        hoc: withPublications,
        expect: mockResume.publications,
    },
    withSkills: {
        hoc: withSkills,
        expect: mockResume.skills,
    },
    withInterests: {
        hoc: withInterests,
        expect: mockResume.interests,
    },
    withReferences: {
        hoc: withReferences,
        expect: mockResume.references,
    },
    withLanguages: {
        hoc: withLanguages,
        expect: mockResume.languages,
    },
    withProjects: {
        hoc: withProjects,
        expect: mockResume.projects,
    },
};

Object.keys(hocs).forEach(
    (hocName: string): void =>
        describe(`The ${hocName} hoc`, (): void => {
            const information = hocs[hocName];

            const runContext = (): {[s: string]: unknown} | null => {
                let contextValue: {[s: string]: unknown} | null = null;

                const Tester = information.hoc(
                    (props: {[s: string]: unknown}): null => {
                        contextValue = props;
                        return null;
                    }
                );

                render(
                    <ResumeProvider resume={mockResume}>
                        <Tester />
                    </ResumeProvider>
                );
                return contextValue;
            };

            it('Return the resume from the given context if it exists', (): void => {
                const resumeValue = runContext();

                expect(resumeValue).not.toBeNull();
                if (resumeValue) {
                    expect(resumeValue[Object.keys(resumeValue)[0]]).toEqual(information.expect);
                }
            });
        })
);
