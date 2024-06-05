"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("./Configurations/dotenv");
const express_1 = __importStar(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const Route_1 = __importDefault(require("./Routes/Route"));
const error_middleware_1 = __importDefault(require("./Middleware/error_middleware"));
const Port_error_1 = __importDefault(require("./Middleware/Port_error"));
const server_1 = require("./Configurations/server");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.use((0, express_1.json)(), (0, express_1.urlencoded)({ extended: true }));
app.use(server_1.limiter);
app.use((0, cookie_parser_1.default)());
app.use(server_1.corsOptins);
app.use(server_1.helmetSecurity);
// app.use(error_middleware);
app.listen(dotenv_1.PORT_NO, () => {
    try {
        console.info("Server running on port:", dotenv_1.PORT_NO);
    }
    catch (error) {
        console.error("Error in starting the port", error);
        app.use(Port_error_1.default);
    }
});
app.use(error_middleware_1.default);
app.use("/", Route_1.default);
