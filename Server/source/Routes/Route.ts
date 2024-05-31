import { Router } from "express";
import contact_form from "../Controlllers/contact_form";

const router = Router();

router.post("/contact", contact_form);

export default router;
