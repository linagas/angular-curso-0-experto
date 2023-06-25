const skills: string[] = ['Javascript', 'Typescript', 'Angular', 'React'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    jobTitle?: string;
}

const candidate: Character = {
    name: 'John',
    hp: 100,
    skills
}
candidate.jobTitle = 'Frontend Developer';

console.log({candidate, skills});

export {};