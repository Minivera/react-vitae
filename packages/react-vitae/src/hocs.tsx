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

export interface ResumeProps {
    resume: Resume;
}

export interface BasicProps {
    basic: Basic | undefined;
}

export interface WorkProps {
    work: Work[] | undefined;
}

export interface VolunteerProps {
    volunteer: Volunteer[] | undefined;
}

export interface EducationProps {
    education: Education[] | undefined;
}

export interface AwardsProps {
    awards: Award[] | undefined;
}

export interface PublicationsProps {
    publications: Publication[] | undefined;
}

export interface SkillsProps {
    skills: Skill[] | undefined;
}

export interface InterestsProps {
    interests: Interest[] | undefined;
}

export interface ReferencesProps {
    references: Reference[] | undefined;
}

export interface LanguagesProps {
    languages: Language[] | undefined;
}

export interface ProjectsProps {
    projects: Project[] | undefined;
}

export const withResume = <P extends object>(
    Component: React.ComponentType<P & ResumeProps>
): ((props: P) => React.ReactElement<P & ResumeProps>) => (props: P): React.ReactElement<P & ResumeProps> => (
    <Component {...props as P} resume={useResume()} />
);

export const withBasic = <P extends object>(
    Component: React.ComponentType<P & BasicProps>
): ((props: P) => React.ReactElement<P & BasicProps>) => (props: P): React.ReactElement<P & BasicProps> => (
    <Component {...props as P} basic={useBasic()} />
);

export const withWork = <P extends object>(
    Component: React.ComponentType<P & WorkProps>
): ((props: P) => React.ReactElement<P & WorkProps>) => (props: P): React.ReactElement<P & WorkProps> => (
    <Component {...props as P} work={useWork()} />
);

export const withVolunteer = <P extends object>(
    Component: React.ComponentType<P & VolunteerProps>
): ((props: P) => React.ReactElement<P & VolunteerProps>) => (props: P): React.ReactElement<P & VolunteerProps> => (
    <Component {...props as P} volunteer={useVolunteer()} />
);

export const withEducation = <P extends object>(
    Component: React.ComponentType<P & EducationProps>
): ((props: P) => React.ReactElement<P & EducationProps>) => (props: P): React.ReactElement<P & EducationProps> => (
    <Component {...props as P} education={useEducation()} />
);

export const withAwards = <P extends object>(
    Component: React.ComponentType<P & AwardsProps>
): ((props: P) => React.ReactElement<P & AwardsProps>) => (props: P): React.ReactElement<P & AwardsProps> => (
    <Component {...props as P} awards={useAwards()} />
);

export const withPublications = <P extends object>(
    Component: React.ComponentType<P & PublicationsProps>
): ((props: P) => React.ReactElement<P & PublicationsProps>) => (
    props: P
): React.ReactElement<P & PublicationsProps> => <Component {...props as P} publications={usePublications()} />;

export const withSkills = <P extends object>(
    Component: React.ComponentType<P & SkillsProps>
): ((props: P) => React.ReactElement<P & SkillsProps>) => (props: P): React.ReactElement<P & SkillsProps> => (
    <Component {...props as P} skills={useSkills()} />
);

export const withInterests = <P extends object>(
    Component: React.ComponentType<P & InterestsProps>
): ((props: P) => React.ReactElement<P & InterestsProps>) => (props: P): React.ReactElement<P & InterestsProps> => (
    <Component {...props as P} interests={useInterests()} />
);

export const withReferences = <P extends object>(
    Component: React.ComponentType<P & ReferencesProps>
): ((props: P) => React.ReactElement<P & ReferencesProps>) => (props: P): React.ReactElement<P & ReferencesProps> => (
    <Component {...props as P} references={useReferences()} />
);

export const withLanguages = <P extends object>(
    Component: React.ComponentType<P & LanguagesProps>
): ((props: P) => React.ReactElement<P & LanguagesProps>) => (props: P): React.ReactElement<P & LanguagesProps> => (
    <Component {...props as P} languages={useLanguages()} />
);

export const withProjects = <P extends object>(
    Component: React.ComponentType<P & ProjectsProps>
): ((props: P) => React.ReactElement<P & ProjectsProps>) => (props: P): React.ReactElement<P & ProjectsProps> => (
    <Component {...props as P} projects={useProjects()} />
);
