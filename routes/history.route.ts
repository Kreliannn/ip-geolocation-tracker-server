import { Router } from "express";
import { HistoryController } from "../controller/history.controller";
import { authenticateJWT } from "../middleware/auth";

const route = Router()

route.get("/history", authenticateJWT,  HistoryController.getHistory)
route.post("/history/delete", authenticateJWT,  HistoryController.deleteHistory)
route.post("/history/:ip", authenticateJWT,  HistoryController.recordHistory)

export default route