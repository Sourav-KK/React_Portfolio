export interface formDataI {
  first_name: string;
  last_name: string;
  phone_no: string;
  email: string;
  subject: string;
  message: string;
}

export interface testimonialsI {
  img: string;
  quote: string;
  author: string;
  postion: string;
}

export interface ProjectArrI {
  title: string;
  link: string;
  Description: string;
  techs: string[];
}

export interface ProjectDetailsI {
  title: string;
  link: string;
  techs: string[];
}

export interface Nav_tagsI {
  title: string;
  id: string;
}
