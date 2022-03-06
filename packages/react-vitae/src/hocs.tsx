import React from 'react';

import {
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
} from './hooks';
import {
  Resume,
  Basic,
  Work,
  Volunteer,
  Education,
  Award,
  Publication,
  Skill,
  Interest,
  Reference,
  Language,
  Project,
} from './types';

const renderHOC =
  <K extends keyof Resume | 'resume', T extends {}>(key: K, resumeInjection: () => T) =>
  <P extends React.PropsWithChildren<{}>>(
    Component: React.ComponentType<P & Record<K, T>>
  ): ((props: P) => React.ReactElement<P & Record<K, T>>) =>
  (props: P): React.ReactElement<P & Record<K, T>> =>
    <Component {...(props as P)} {...({ [key]: resumeInjection() } as Record<K, T>)} />;

export const withResume = renderHOC<'resume', Resume>('resume', useResume);
export const withBasic = renderHOC<'basic', Basic>('basic', useBasic);
export const withWork = renderHOC<'work', Work[]>('work', useWork);
export const withVolunteer = renderHOC<'volunteer', Volunteer[]>('volunteer', useVolunteer);
export const withEducation = renderHOC<'education', Education[]>('education', useEducation);
export const withAwards = renderHOC<'awards', Award[]>('awards', useAwards);
export const withPublications = renderHOC<'publications', Publication[]>('publications', usePublications);
export const withSkills = renderHOC<'skills', Skill[]>('skills', useSkills);
export const withInterests = renderHOC<'interests', Interest[]>('interests', useInterests);
export const withReferences = renderHOC<'references', Reference[]>('references', useReferences);
export const withLanguages = renderHOC<'languages', Language[]>('languages', useLanguages);
export const withProjects = renderHOC<'projects', Project[]>('projects', useProjects);
