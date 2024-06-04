import { rateLimit } from "express-rate-limit";
import cors from "cors";
import helmet from "helmet";

const limiter = rateLimit({
  validate: true,
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false,
});

const corsOptins = cors({
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  origin: "*",
  credentials: true,
  methods: ["GET", "POST"],
});

const helmetSecurity = helmet({
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

export { limiter, corsOptins, helmetSecurity };
