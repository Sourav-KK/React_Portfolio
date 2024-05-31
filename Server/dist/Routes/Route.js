"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_form_1 = __importDefault(require("../Controlllers/contact_form"));
const router = (0, express_1.Router)();
router.post("/contact", contact_form_1.default);
exports.default = router;
