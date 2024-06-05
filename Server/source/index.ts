import { PORT_NO } from "./Configurations/dotenv";
import express, { Express, json, urlencoded } from "express";
import cookie_parser from "cookie-parser";
import morgan from "morgan";
import Router from "./Routes/Route";
import error_middleware from "./Middleware/error_middleware";
import Port_Error from "./Middleware/Port_error";
import { corsOptins, helmetSecurity, limiter } from "./Configurations/server";

const app: Express = express();

app.use(morgan("tiny"));
app.use(json(), urlencoded({ extended: true }));
app.use(limiter);
app.use(cookie_parser());
app.use(corsOptins);
app.use(helmetSecurity);

// app.use(error_middleware);

app.listen(PORT_NO, () => {
  try {
    console.info("Server running on port:", PORT_NO);
  } catch (error) {
    console.error("Error in starting the port", error);
    app.use(Port_Error);
  }
});

app.use(error_middleware);

app.use("/", Router);
