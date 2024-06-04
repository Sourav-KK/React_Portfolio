"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helmetSecurity = exports.corsOptins = exports.limiter = void 0;
const express_rate_limit_1 = require("express-rate-limit");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const limiter = (0, express_rate_limit_1.rateLimit)({
    validate: true,
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100,
    standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false,
});
exports.limiter = limiter;
const corsOptins = (0, cors_1.default)({
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
});
exports.corsOptins = corsOptins;
const helmetSecurity = (0, helmet_1.default)({
    hsts: { maxAge: 36000, includeSubDomains: true, preload: true },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "trusted-scripts.com"],
        },
    },
    xXssProtection: false,
    frameguard: { action: "sameorigin" },
    crossOriginResourcePolicy: { policy: "same-origin" },
});
exports.helmetSecurity = helmetSecurity;
