import { Router } from "express";
import contact_form from "../Controlllers/contact_form";

const router = Router();

router.get("/");
router.route("/contact").post(contact_form);

export default router;
