interface SanityClient {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInfo: string;
    email: string;
    role: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _id: number;
    _type: 'skillsInfo',
    image: Image;
    progess: number;
    title: string;
}

export interface ExperienceInfo extends SanityBody {
    _id: number;
    _type: 'experienceInfo';
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    currentlyWorking: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface ProjectInfo extends SanityBody {
    _id: number;
    title: string;
    _type: 'projectInfo';
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface SkillInfo extends SanityBody {
    _id: number;
    _type: 'skillsInfo';
    image: Image;
    progess: number;
    title: string;
}

export interface SocialInfo extends SanityBody {
    _id: number;
    _type: 'socailInfo';
    title: string;
    url: string;
}