import React from 'react';

import {
  withAwards,
  withBasic,
  withEducation,
  withInterests,
  withLanguages,
  withProjects,
  withPublications,
  withReferences,
  withResume,
  withSkills,
  withVolunteer,
  withWork,
} from './hocs';
import {
  ResumeProps,
  BasicProps,
  WorkProps,
  VolunteerProps,
  EducationProps,
  AwardsProps,
  InterestsProps,
  LanguagesProps,
  ProjectsProps,
  PublicationsProps,
  ReferencesProps,
  SkillsProps,
} from './types';

type RenderProps<T extends {}> = {
  children(props: Omit<RenderProps<T>, 'children'>): JSX.Element;
} & T;

const RenderComponent = <T extends {}>({ children, ...rest }: RenderProps<T>): React.ReactElement<T> => children(rest);

export const WithResume = withResume<RenderProps<ResumeProps>>(RenderComponent);
export const WithBasic = withBasic<RenderProps<BasicProps>>(RenderComponent);
export const WithWork = withWork<RenderProps<WorkProps>>(RenderComponent);
export const WithVolunteer = withVolunteer<RenderProps<VolunteerProps>>(RenderComponent);
export const WithEducation = withEducation<RenderProps<EducationProps>>(RenderComponent);
export const WithAwards = withAwards<RenderProps<AwardsProps>>(RenderComponent);
export const WithInterests = withInterests<RenderProps<InterestsProps>>(RenderComponent);
export const WithLanguages = withLanguages<RenderProps<LanguagesProps>>(RenderComponent);
export const WithProjects = withProjects<RenderProps<ProjectsProps>>(RenderComponent);
export const WithPublications = withPublications<RenderProps<PublicationsProps>>(RenderComponent);
export const WithReferences = withReferences<RenderProps<ReferencesProps>>(RenderComponent);
export const WithSkills = withSkills<RenderProps<SkillsProps>>(RenderComponent);
