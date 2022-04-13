import IdentityRouter from "./identity.router";
import PatientRouter from "./patient.router";
import MedicalBillRouter from "./medical-bill.router";
import MedicalBillDetailRouter from "./medical-bill-detail.router";
import { Router } from "express";
import { verifyUserMiddleware } from "../middlewares";

const router = Router();

router.use("/identities", IdentityRouter);
router.use("/patients", verifyUserMiddleware, PatientRouter);
router.use("/medical-bills", verifyUserMiddleware, MedicalBillRouter);
router.use(
  "/medical-bill-detail",
  verifyUserMiddleware,
  MedicalBillDetailRouter
);

export default router;