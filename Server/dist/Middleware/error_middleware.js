"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_middleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("request in middleware:", req.headers["content-type"]);
        if (req.headers["content-type"] !== "application/json") {
            console.error("header is deifferent");
            return res.status(400).json({ errMessage: "Bad request" });
        }
        console.log("error middleware passed");
        next();
    }
    catch (error) {
        console.error("error in middleware:", error);
        return res.status(400).json({ errMessage: "Bad request" });
    }
});
exports.default = error_middleware;
