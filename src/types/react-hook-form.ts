export type FormDataType = {
  title: string;
  genre: string;
  author: string;
  publicationDate: string;
  bookImage?: string;
  description?: string;
  createdBy?: string;
};


export type EditBookFormDataType = {
  title?: string;
  genre?: string;
  author?: string;
  publicationDate?: string;
  bookImage?: string;
  description?: string;
  createdBy?: string;
};

export type EditBookDatatype = {
    bookId: string;
    data: EditBookFormDataType;

}
