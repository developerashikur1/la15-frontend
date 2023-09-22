export interface IUserResponseInfo {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profession: string;
  profileImage: string;
  whiteList: string[];
  readingList: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ILoginUserApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    userInfo: IUserResponseInfo;
  };
}

export interface ILoginApiResponse {
  data: ILoginApiResponse;
}
