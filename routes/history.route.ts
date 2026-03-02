import { Router } from "express";
import { HistoryController } from "../controller/history.controller";

const route = Router()

route.post("/history", HistoryController.recordHistory)

export default route