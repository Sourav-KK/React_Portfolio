interface formDataI {
  first_name: string;
  last_name: string;
  phone_no: string;
  email: string;
  subject: string;
  message: string;
}
interface errMessageI {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}

export { errMessageI, formDataI };
