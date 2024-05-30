"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const isEmpty = (data) => {
    const errMessages = [];
    let isEmpty = false;
    for (const field in data) {
        if (typeof data[field] === "string" && validator_1.default.isEmpty(data[field])) {
            errMessages.push({ field, message: "This field is mandatory" });
            isEmpty = true;
        }
    }
    if (isEmpty) {
        return {
            errMessage: errMessages,
            statusCode: 202,
        };
    }
    else {
        return true;
    }
};
exports.default = isEmpty;
