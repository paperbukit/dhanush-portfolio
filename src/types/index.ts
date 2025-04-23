export interface Bio {
  name: string;
  education: string;
  college: string;
  graduationYear: number;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
}

export interface Goal {
  description: string;
}