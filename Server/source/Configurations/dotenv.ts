import dotenv from "dotenv";
dotenv.config();

const PORT_NO = process.env.PORT_NO;
const SECRET_KEY = process.env.SECRET_KEY;

export { PORT_NO, SECRET_KEY };
