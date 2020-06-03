import { useContext } from 'react';

import { ResumeContext, ProviderParams } from './provider';
import {
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
  Resume,
} from './types';

enum Sections {
  Basic = 'basic',
  Work = 'work',
  Volunteer = 'volunteer',
  Education = 'education',
  Awards = 'awards',
  Publications = 'publications',
  Skills = 'skills',
  Languages = 'languages',
  Interests = 'interests',
  References = 'references',
  Projects = 'projects',
}

const getResumeElement = <Section>(element: Resume, section: Sections): Section | undefined => {
  if (!element[section]) {
    return undefined;
  }
  const got = element[section] as unknown;
  return got as Section;
};

export const useResume = (): Resume => {
  const context = useContext<Partial<ProviderParams>>(ResumeContext);
  if (!context.resume) {
    throw new Error('<ResumeProvider> missing at the root of the application, cannot use the resume context.');
  }

  return useContext(ResumeContext).resume as Resume;
};

export const useBasic = (): Basic | undefined => {
  return getResumeElement<Basic>(useResume(), Sections.Basic);
};

export const useWork = (): Work[] | undefined => {
  return getResumeElement<Work[]>(useResume(), Sections.Work);
};

export const useVolunteer = (): Volunteer[] | undefined => {
  return getResumeElement<Volunteer[]>(useResume(), Sections.Volunteer);
};

export const useEducation = (): Education[] | undefined => {
  return getResumeElement<Education[]>(useResume(), Sections.Education);
};

export const useAwards = (): Award[] | undefined => {
  return getResumeElement<Award[]>(useResume(), Sections.Awards);
};

export const usePublications = (): Publication[] | undefined => {
  return getResumeElement<Publication[]>(useResume(), Sections.Publications);
};

export const useSkills = (): Skill[] | undefined => {
  return getResumeElement<Skill[]>(useResume(), Sections.Skills);
};

export const useInterests = (): Interest[] | undefined => {
  return getResumeElement<Interest[]>(useResume(), Sections.Interests);
};

export const useReferences = (): Reference[] | undefined => {
  return getResumeElement<Reference[]>(useResume(), Sections.References);
};

export const useLanguages = (): Language[] | undefined => {
  return getResumeElement<Language[]>(useResume(), Sections.Languages);
};

export const useProjects = (): Project[] | undefined => {
  return getResumeElement<Project[]>(useResume(), Sections.Projects);
};
