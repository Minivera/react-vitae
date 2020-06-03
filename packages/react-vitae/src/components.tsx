import React from 'react';

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

interface ResumeRenderProps {
  children(props: ResumeProps): JSX.Element;
}

export const WithResume = withResume<ResumeRenderProps>(
  ({ children, resume }): React.ReactElement<ResumeProps> => children({ resume })
);

interface BasicRenderProps {
  children(props: BasicProps): JSX.Element;
}

export const WithBasic = withBasic<BasicRenderProps>(
  ({ children, basic }): React.ReactElement<BasicProps> => children({ basic })
);

interface WorkRenderProps {
  children(props: WorkProps): JSX.Element;
}

export const WithWork = withWork<WorkRenderProps>(
  ({ children, work }): React.ReactElement<WorkProps> => children({ work })
);

interface VolunteerRenderProps {
  children(props: VolunteerProps): JSX.Element;
}

export const WithVolunteer = withVolunteer<VolunteerRenderProps>(
  ({ children, volunteer }): React.ReactElement<VolunteerProps> => children({ volunteer })
);

interface EducationRenderProps {
  children(props: EducationProps): JSX.Element;
}

export const WithEducation = withEducation<EducationRenderProps>(
  ({ children, education }): React.ReactElement<EducationProps> => children({ education })
);

interface AwardsRenderProps {
  children(props: AwardsProps): JSX.Element;
}

export const WithAwards = withAwards<AwardsRenderProps>(
  ({ children, awards }): React.ReactElement<AwardsProps> => children({ awards })
);

interface InterestsRenderProps {
  children(props: InterestsProps): JSX.Element;
}

export const WithInterests = withInterests<InterestsRenderProps>(
  ({ children, interests }): React.ReactElement<InterestsProps> => children({ interests })
);

interface LanguagesRenderProps {
  children(props: LanguagesProps): JSX.Element;
}

export const WithLanguages = withLanguages<LanguagesRenderProps>(
  ({ children, languages }): React.ReactElement<LanguagesProps> => children({ languages })
);

interface ProjectsRenderProps {
  children(props: ProjectsProps): JSX.Element;
}

export const WithProjects = withProjects<ProjectsRenderProps>(
  ({ children, projects }): React.ReactElement<ProjectsProps> => children({ projects })
);

interface PublicationsRenderProps {
  children(props: PublicationsProps): JSX.Element;
}

export const WithPublications = withPublications<PublicationsRenderProps>(
  ({ children, publications }): React.ReactElement<PublicationsProps> => children({ publications })
);

interface ReferencesRenderProps {
  children(props: ReferencesProps): JSX.Element;
}

export const WithReferences = withReferences<ReferencesRenderProps>(
  ({ children, references }): React.ReactElement<ReferencesProps> => children({ references })
);

interface SkillsRenderProps {
  children(props: SkillsProps): JSX.Element;
}

export const WithSkills = withSkills<SkillsRenderProps>(
  ({ children, skills }): React.ReactElement<SkillsProps> => children({ skills })
);
