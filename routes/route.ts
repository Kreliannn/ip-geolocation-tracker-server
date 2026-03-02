import { Router } from "express";
import authRoute from "./auth.route"
import historyRoute from "./history.route"

const routes = Router()

routes.use(authRoute)
routes.use(historyRoute)


export default routes