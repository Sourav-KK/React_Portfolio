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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Is_empty_1 = __importDefault(require("./Is_empty"));
const formValidation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("data:", data);
        let errMessage = [];
        let isEmpty = false;
        let statusCode = 0;
        const validation = yield (0, Is_empty_1.default)(data, isEmpty, errMessage, statusCode);
        if (validation) {
        }
    }
    catch (error) {
        console.error("eror in form validation:", error);
    }
});
exports.default = formValidation;
