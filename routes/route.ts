import { Router } from "express";
import authRoute from "./auth.route"
import historyRoute from "./history.route"

const routes = Router()

routes.use("/auth", authRoute)
routes.use("/history", historyRoute)


export default routes