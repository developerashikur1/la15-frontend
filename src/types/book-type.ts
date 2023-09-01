export type IReview = {
  user?: string;
  review?: string;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  createdBy: string;
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
