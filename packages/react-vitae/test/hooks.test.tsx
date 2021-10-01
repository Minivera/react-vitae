import * as React from 'react';
import { render } from '@testing-library/react';

import {
  ResumeProvider,
  useResume,
  useBasic,
  useWork,
  useVolunteer,
  useEducation,
  useAwards,
  usePublications,
  useSkills,
  useInterests,
  useReferences,
  useLanguages,
  useProjects,
} from '../src';

import { mockResume } from './mocks';

const hooks: { [s: string]: { runner: () => unknown; expect: unknown } } = {
  useResume: {
    runner: useResume,
    expect: mockResume,
  },
  useBasic: {
    runner: useBasic,
    expect: mockResume.basic,
  },
  useWork: {
    runner: useWork,
    expect: mockResume.work,
  },
  useVolunteer: {
    runner: useVolunteer,
    expect: mockResume.volunteer,
  },
  useEducation: {
    runner: useEducation,
    expect: mockResume.education,
  },
  useAwards: {
    runner: useAwards,
    expect: mockResume.awards,
  },
  usePublications: {
    runner: usePublications,
    expect: mockResume.publications,
  },
  useSkills: {
    runner: useSkills,
    expect: mockResume.skills,
  },
  useInterests: {
    runner: useInterests,
    expect: mockResume.interests,
  },
  useReferences: {
    runner: useReferences,
    expect: mockResume.references,
  },
  useLanguages: {
    runner: useLanguages,
    expect: mockResume.languages,
  },
  useProjects: {
    runner: useProjects,
    expect: mockResume.projects,
  },
};

Object.keys(hooks).forEach((hookName: string): void =>
  describe(`The ${hookName} hook`, (): void => {
    const information = hooks[hookName];

    const runContext = (): unknown => {
      let contextValue: unknown = null;

      const Tester = (): null => {
        contextValue = information.runner();

        return null;
      };

      render(
        <ResumeProvider resume={mockResume}>
          <Tester />
        </ResumeProvider>
      );
      return contextValue;
    };

    const runBadContext = (root = false): { contextValue: unknown; error: Error | null } => {
      let contextValue: unknown;
      let error: Error | null = null;

      const Tester = (): null => {
        try {
          contextValue = information.runner();
        } catch (e) {
          error = e as Error;
        }

        return null;
      };

      render(
        <ResumeProvider resume={root ? undefined : { basic: mockResume.basic }}>
          <Tester />
        </ResumeProvider>
      );
      return { contextValue, error };
    };

    it('Return the resume from the given context if it exists', (): void => {
      const resumeValue = runContext();

      expect(resumeValue).toEqual(information.expect);
    });

    it('Throws an error when called with an invalid context', (): void => {
      if (hookName === 'useResume') {
        expect(runBadContext(true).error).toBeDefined();
      } else if (hookName === 'useBasic') {
        expect(runBadContext().contextValue).toEqual(information.expect);
      } else {
        expect(runBadContext().contextValue).toBe(undefined);
      }
    });
  })
);
