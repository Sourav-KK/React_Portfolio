"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const Is_empty = (data, isEmpty, errMessage, statusCode) => {
    const required_feilds = [
        "email",
        "firt_name",
        "last_name",
        "subject",
        "message",
    ];
    for (const field in data) {
        if (typeof data[field] === "string" && validator_1.default.isEmpty(data[field])) {
            errMessage.push({ field, errMessage: "This field is Mandatory" });
            isEmpty = true;
        }
    }
    if (isEmpty) {
        return {
            errMessage,
            statusCode,
        };
    }
    else {
        return false;
    }
};
exports.default = Is_empty;
