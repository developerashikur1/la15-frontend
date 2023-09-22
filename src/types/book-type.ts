export type IReview = {
  user?: string;
  review?: string;
};

export type IBook = {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  createdBy?: string;
  ratings?: number | null;
  reviews?: IReview[];
  bookImage?: string;
};

// create book response
export type ResponseData = {
  title?: string;
  author?: string;
  genre?: string;
  publicationDate?: string;
  createdBy?: string;
  _id?: string;
  reviews?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
};

export type CreateBookResponse = {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: ResponseData;
};

export type IResponseUser = {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  profession?: string;
  profileImage?: string;
  whiteList?: string[];
  readingList?: string[];
};

export type ISingleReviews = {
  id?: string;
  review?: string;
  user?: IResponseUser;
};
