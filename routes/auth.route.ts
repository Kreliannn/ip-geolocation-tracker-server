import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { authenticateJWT } from "../middleware/auth";

const route = Router()

route.post("/login", AuthController.login)
route.get("/", authenticateJWT, AuthController.getAccount)

export default route