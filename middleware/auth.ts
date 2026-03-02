import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../types/request.type";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { AccountService } from "../services/account.service";
import { accountInterface } from "../types/accounts.type";

dotenv.config();

const secret = process.env.JWT_SECRET || "defaultsecret";

export const authenticateJWT = async (request: AuthRequest, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("No token provided");
     response.status(401).json({ message: "No token provided" });
     return
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret);
    const { id } = decoded as { id: string };
    const account = await AccountService.get(id);
    if(account){
        const accData : accountInterface = {
            _id : account._id.toString(),
            email : account.email,
            name : account.name,
            password : account.password,
            history : account.history
        }
        request.account = accData
    }
    
    next();
  } catch (err) {
    console.log(err)
     response.status(401).json({ message: "Invalid token" });
  }
};