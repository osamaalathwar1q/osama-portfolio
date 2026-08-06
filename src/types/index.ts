export interface Certificate {
  id: string;
  imageFileName: string;
  publicImagePath: string;
  title: string;
  issuingOrganization: string;
  programOrCourse: string;
  date: string;
  hoursOrGrade?: string;
  skillsLearned: string[];
  description: string;
  category: "Technical" | "Academic" | "Professional" | "Soft Skills";
}

export interface Project {
  id: string;
  imageFileName: string;
  publicImagePath: string;
  name: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  buttonText: string;
  link: string | null;
  isUnderDevelopment?: boolean;
}

export interface ProfileInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  profileImagePath: string;
}
