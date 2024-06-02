import { PORT_NO } from "./Configurations/dotenv";
import express, { Express } from "express";
import cookie_parser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import Router from "./Routes/Route";
import cors from "cors";
import error_middleware from "./Middleware/error_middleware";

const app: Express = express();
app.use(morgan("tiny"));
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(
  cors({ methods: ["POST", "GET"] }),
  cors({ allowedHeaders: "application/x-www-form-urlencoded" })
);
app.use(cookie_parser());
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

app.listen(PORT_NO, () => console.info("Server running on port:", PORT_NO));

app.use(error_middleware);
app.use("/", Router);
