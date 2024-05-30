import express, { Request, Response } from "express";
import { PORT_NO } from "./Configurations/dotenv";
import cookie_parser from "cookie-parser";
import body_parser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
// import formidable from "formidable";
import Router from "./Routes/Route";

const app = express();
app.use(cookie_parser());
app.use(body_parser({ extended: true }));
app.use(morgan("combined"));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-scripts.com"],
    },
  }),
  helmet.hsts({
    maxAge: 36000,
    includeSubDomains: true,
    preload: true,
  }),
  helmet.xXssProtection(),
  helmet.frameguard({ action: "sameorigin" }),
  helmet.crossOriginResourcePolicy({ policy: "cross-origin" })
);
app.use(compression());
// app.use(formidable({}));

app.use("/", Router);

app.listen(PORT_NO, () => console.info("Server running on port:", PORT_NO));
