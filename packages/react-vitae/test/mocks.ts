import { Resume } from '../src/types';

export const mockResume: Resume = {
    basic: {
        name: 'John Doe',
        label: 'Normal person',
        image: '',
        email: 'john@doe.me',
        phone: '111 111-1111',
        summary: 'A great, but normal, person',
        url: 'john.me',
        location: {
            address: '1 normal road',
            city: 'Normalville',
            countryCode: 'NO',
            postalCode: 'H0H0H0',
            region: 'Normal',
        },
        profiles: [
            {
                network: 'facebook',
                url: 'facebook.com/johndoe',
                username: 'johndoe',
            },
        ],
    },
    work: [
        {
            name: 'Normal company',
            location: 'Normalville, Normal, NO',
            description: 'A very normal company',
            position: 'A very normal employee',
            url: 'normal.com',
            summary: 'Very normal work',
            startDate: '1980-06-01',
            endDate: '2019-06-01',
            highlights: ['Did some very normal things', 'Lef a very normal team'],
        },
    ],
    volunteer: [
        {
            organization: 'Local park',
            position: 'Park manager',
            summary: 'Managed the park',
            startDate: '2018-04-01',
            endDate: '2018-04-02',
            highlights: ['Stopped birds from breaking stuff', 'Looked at the pretty scenery'],
            url: 'park@normal.com',
        },
        {
            organization: 'Local park',
            position: 'Statue',
            summary: 'Managed the park',
            startDate: '2018-04-02',
            highlights: ['Became a statue'],
            url: 'park@normal.com',
        },
    ],
    education: [
        {
            institution: 'NormalU',
            area: 'Normal studies',
            studyType: 'Certificate',
            startDate: '1979-01-01',
            endDate: '1980-06-01',
            courses: ['NORM1001', 'NORM2001'],
            gpa: '4.0/4.0',
        },
    ],
    awards: [
        {
            title: 'Most normal person',
            awarder: 'Normal Company',
            date: '19801-06-01',
            summary: 'Was the most normal person around',
        },
    ],
    publications: [
        {
            name: 'A tales of normality',
            publisher: 'Normal Editions',
            summary: 'The tales of a normal person, fifth edition',
            releaseDate: '2000-01-01',
            url: 'normal.book',
        }
    ],
    projects: [
        {
            name: 'Make the work more normal',
            description: 'Studies into making the world more normal',
            highlights: ['Looked at a lot of people', 'Turns out normality is the norm'],
            entity: 'Normal Company',
            type: 'study',
            roles: ['Scientist', 'Data expert'],
            url: 'normal.studies',
            keywords: ['Normality', 'Obvious'],
            startDate: '2001-01-01',
            endDate: '2001-01-02',
        },
    ],
    skills: [
        {
            name: 'Normality',
            level: 'Over 9000',
            keywords: ['Normal', 'Bland'],
        },
        {
            name: 'Superpowers',
            level: 'Normal',
            keywords: ['Super breath', 'Super walk'],
        }
    ],
    languages: [
        {
            language: 'English',
            fluency: 'Normal',
        },
        {
            language: 'Japanese',
            fluency: 'Anime',
        }
    ],
    interests: [
        {
            name: 'Tv',
            keywords: ['watching', 'listening'],
        },
    ],
    references: [
        {
            name: 'Normal CEO',
            reference: 'CEO of Normal Company',
        },
        {
            name: 'Bird person',
            reference: 'Bird person who liked me as a statue in the local park',
        },
    ],
};
