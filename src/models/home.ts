export type UserProfile = {
  id: string;
  profileId: string;
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
  shortDescription: string;
  fullDescription: string;
  public: boolean;
};

export type UserProject = {
  id: string;
  profileId: string;
  name: string;
  startTime: Date;
  endTime: Date;
  description: string;
};

export type UserWorkspace = {
  id: string;
  profileId: string;
  companyName: string;
  image: string;
  role: string;
  startTime: Date;
  endTime: Date;
  description: string;
};

export type UserLink = {
  id: string;
  profileId: string;
  facebookUrl: string;
  githubUrl: string;
  linkedInUrl: string;
};
