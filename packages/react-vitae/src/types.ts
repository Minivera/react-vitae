export interface Location {
    // To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.
    address: string;

    // Current address' postal code, format accoridng to your country
    postalCode: string;

    // The address' city
    city: string;

    // code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
    countryCode: string;

    // The general region where you live. Can be a US state, or a province, for instance.
    region: string;
}

export interface Profile {
    // e.g. Facebook or Twitter
    network: string;

    // e.g. neutralthoughts
    username: string;

    // e.g. http://twitter.example.com/neutralthoughts
    url: string;
}

export interface Basic {
    // Your name
    name: string;

    // Current description, e.g. Web Developer
    label?: string;

    // URL (as per RFC 3986) to a image in JPEG or PNG format
    image?: string;

    // e.g. thomas@gmail.com
    email?: string;

    // Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
    phone?: string;

    // URL (as per RFC 3986) to your website, e.g. personal homepage
    url?: string;

    // Write a short 2-3 sentence biography about yourself
    summary?: string;

    // Your current location information, sensitive
    location?: Location;

    // Specify any number of social networks that you participate in
    profiles?: Profile[];
}

export interface Work {
    // e.g. Facebook
    name: string;

    // e.g. Menlo Park, CA
    location?: string;

    // e.g. Social Media Company
    description?: string;

    // e.g. Software Engineer
    position?: string;

    // e.g. http://facebook.example.com
    url?: string;

    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    startDate?: string;

    // e.g. 2012-06-29
    endDate?: string;

    // Give an overview of your responsibilities at the company
    summary?: string;

    // Specify multiple accomplishments, e.g. Increased profits by 20% from 2011-2012 through viral advertising
    highlights?: string[];
}

export interface Volunteer {
    // e.g. Facebook
    organization: string;

    // e.g. Software Engineer
    position?: string;

    // e.g. http://facebook.example.com
    url?: string;

    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    startDate?: string;

    // e.g. 2012-06-29
    endDate?: string;

    // Give an overview of your responsibilities at the company
    summary?: string;

    // Specify multiple accomplishments, e.g. Increased profits by 20% from 2011-2012 through viral advertising
    highlights?: string[];
}

export interface Education {
    // e.g. Massachusetts Institute of Technology
    institution: string;

    // e.g. Arts
    area?: string;

    // e.g. Bachelor
    studyType?: string;

    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    startDate?: string;

    // e.g. 2012-06-29
    endDate?: string;

    // grade point average, e.g. 3.67/4.0
    gpa?: string;

    // List notable courses/subjects, e.g. H1302 - Introduction to American history
    courses?: string[];
}

export interface Award {
    // e.g. One of the 100 greatest minds of the century
    title: string;

    // e.g. 1989-06-12
    date?: string;

    // e.g. Time Magazine
    awarder?: string;

    // e.g. Received for my work with Quantum Physics
    summary?: string;
}

export interface Publication {
    // e.g. The World Wide Web
    name: string;

    // e.g. IEEE, Computer Magazine
    publisher?: string;

    // e.g. 1990-08-01
    releaseDate?: string;

    // e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html
    url?: string;

    // Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
    summary?: string;
}

export interface Skill {
    // e.g. Web Development
    name: string;

    // "e.g. Master
    level?: string;

    // List some keywords pertaining to this skill, e.g. HTML
    keywords?: string[];
}

export interface Language {
    // e.g. English, Spanish
    language: string;

    // e.g. Fluent, Beginner
    fluency?: string;
}

export interface Interest {
    // e.g. Philosophy
    name: string;

    // List some keywords pertaining to this interest, e.g. Friedrich Nietzsche
    keywords?: string[];
}

export interface Reference {
    // e.g. Timothy Cook
    name: string;

    // e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations
    // when it came to doing nothing.
    reference?: string;
}

export interface Project {
    // e.g. The World Wide Web
    name: string;

    // Short summary of project. e.g. Collated works of 2017.
    description?: string;

    // Specify multiple features, e.g. Directs you close but not quite there
    highlights?: string[];

    // Specify special elements involved, e.g. AngularJS
    keywords?: string[];

    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29
    startDate?: string;

    // e.g. 2012-06-29
    endDate?: string;

    // e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
    url?: string;

    // Specify your role on this project or in company, e.g. Team Lead, Speaker, Writer
    roles?: string[];

    // Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'
    entity?: string;

    // e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'
    type?: string;
}

export interface Resume {
    // List your basic profile information so employers can reach you.
    basic: Basic;

    // List your relevant work experiences.
    work?: Work[];

    // List your relevant Volunteer experiences.
    volunteer?: Volunteer[];

    // List your completed or in-progress education
    education?: Education[];

    // Specify any awards you have received throughout your professional career
    awards?: Award[];

    // Specify your publications through your career
    publications?: Publication[];

    // List out your professional skill-set
    skills?: Skill[];

    // List any other languages you speak
    languages?: Language[];

    // List any interest and hobbies
    interests?: Interest[];

    // List references you have received
    references?: Reference[];

    // Specify career projects
    projects?: Project[];
}
