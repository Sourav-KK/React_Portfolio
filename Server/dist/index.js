"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("./Configurations/dotenv");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
// import formidable from "formidable";
const Route_1 = __importDefault(require("./Routes/Route"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use((0, body_parser_1.default)({ extended: true }));
app.use((0, morgan_1.default)("combined"));
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "trusted-scripts.com"],
    },
}), helmet_1.default.hsts({
    maxAge: 36000,
    includeSubDomains: true,
    preload: true,
}), helmet_1.default.xXssProtection(), helmet_1.default.frameguard({ action: "sameorigin" }), helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, compression_1.default)());
// app.use(formidable({}));
app.use("/", Route_1.default);
app.listen(dotenv_1.PORT_NO, () => console.info("Server running on port:", dotenv_1.PORT_NO));
