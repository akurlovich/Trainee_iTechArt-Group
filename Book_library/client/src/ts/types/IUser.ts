export interface IUser {
  email: string;
  id: string;
  profileImage: string;
  role: string[];
};

export interface IUserUpdateProfileImage {
  id: string;
  profileImage: string;
};