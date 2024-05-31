import express from "express";
import { PORT_NO } from "./Configurations/dotenv";
import cookie_parser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import Router from "./Routes/Route";
import router_middleware from "./Middleware/router_middleware";
import cors from 'cors'

const app = express();
app.use(cookie_parser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));
app.use(cors())
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

app.use(router_middleware);
app.use("/", Router);

app.listen(PORT_NO, () => console.info("Server running on port:", PORT_NO));
