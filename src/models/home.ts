export type User = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  avatar?: string;
  email: string;
  country: string;
  city: string;
  address: string;
  role: string;
};

export type Profile = {
  id: string;
  shortDescription: string;
  fullDescription: string;
  public: boolean;
  role: string;
};

export type Project = {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
  description: string;
};

export type Workspace = {
  id: string;
  companyName: string;
  image: string;
  role: string;
  startTime: Date;
  endTime: Date;
  description: string;
};

export type Link = {
  facebookUrl: string;
  githubUrl: string;
  linkedInUrl: string;
};
