import { Router } from "express";
import { HistoryController } from "../controller/history.controller";
import { authenticateJWT } from "../middleware/auth";

const route = Router()

route.post("/history/:ip", authenticateJWT,  HistoryController.recordHistory)
route.delete("/history", authenticateJWT,  HistoryController.deleteHistory)

export default route