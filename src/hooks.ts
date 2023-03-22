import { useContext } from 'react';

import { ProviderParams, ResumeContext } from "./provider";
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

export type ResumeElement =
  | Resume
  | Basic
  | Work[]
  | Volunteer[]
  | Education[]
  | Award[]
  | Publication[]
  | Skill[]
  | Interest[]
  | Reference[]
  | Language[]
  | Project[];

const getResumeElement = <T extends ResumeElement>(resumeContext: Partial<ProviderParams>, section: keyof Resume | 'resume'): T => {
  const gotten = resumeContext.resume;
  if (!gotten) {
    throw new Error('A react-vitae hook was called without a provider. Make sure to add the `ResumeProvider` at the root of your app.');
  }

  if (section === "resume") {
    return gotten as T;
  }

  return gotten[section] as T;
};

export const useResume = (): Resume => getResumeElement<Resume>(useContext(ResumeContext), 'resume');
export const useBasic = (): Basic => getResumeElement<Basic>(useContext(ResumeContext), 'basic');
export const useWork = (): Work[] => getResumeElement<Work[]>(useContext(ResumeContext), 'work');
export const useVolunteer = (): Volunteer[] => getResumeElement<Volunteer[]>(useContext(ResumeContext), 'volunteer');
export const useAwards = (): Award[] => getResumeElement<Award[]>(useContext(ResumeContext), 'awards');
export const usePublications = (): Publication[] => getResumeElement<Publication[]>(useContext(ResumeContext), 'publications');
export const useSkills = (): Skill[] => getResumeElement<Skill[]>(useContext(ResumeContext), 'skills');
export const useInterests = (): Interest[] => getResumeElement<Interest[]>(useContext(ResumeContext), 'interests');
export const useReferences = (): Reference[] => getResumeElement<Reference[]>(useContext(ResumeContext), 'references');
export const useLanguages = (): Language[] => getResumeElement<Language[]>(useContext(ResumeContext), 'languages');
export const useProjects = (): Project[] => getResumeElement<Project[]>(useContext(ResumeContext), 'projects');
export const useEducation = (): Education[] => getResumeElement<Education[]>(useContext(ResumeContext), 'education');
