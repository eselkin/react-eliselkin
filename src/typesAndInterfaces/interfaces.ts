interface CommentObject {
  info?: Array<string>;
  proficiencies?: Array<string>;
  accomplishments?: Array<string>;
  focus?: Array<string>;
  experience?: Array<string>;
  extracurricular?: Array<string>;
  thesis?: Array<string>;
  courses?: Array<string>;
  mission?: Array<string>;
}

export interface DataObject {
  title: string;
  subtitle?: string;
  comments?: CommentObject;
  tags?: Array<string>;
  // eslint-disable-next-line
  image?: any;
  from?: Date;
  to?: Date | null;
  link?: string;
  type?: string;
}
