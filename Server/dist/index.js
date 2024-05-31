"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("./Configurations/dotenv");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// import helmet from "helmet";
const Route_1 = __importDefault(require("./Routes/Route"));
// import router_middleware from "./Middleware/router_middleware";
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("tiny"));
app.use((0, cookie_parser_1.default)());
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "trusted-scripts.com"],
//     },
//   }),
//   helmet.hsts({
//     maxAge: 36000,
//     includeSubDomains: true,
//     preload: true,
//   }),
//   helmet.xXssProtection(),
//   helmet.frameguard({ action: "sameorigin" }),
//   helmet.crossOriginResourcePolicy({ policy: "cross-origin" })
// );
// app.use(router_middleware);
app.use("/", Route_1.default);
app.listen(dotenv_1.PORT_NO, () => console.info("Server running on port:", dotenv_1.PORT_NO));
