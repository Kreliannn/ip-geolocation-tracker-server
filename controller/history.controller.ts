import { Response, response } from "express";
import { AuthRequest } from "../types/request.type";
import { accountInterface, accountInterfaceInput } from "../types/accounts.type";
import { AccountService } from "../services/account.service";

export class HistoryController {

    static recordHistory = async (request : AuthRequest , response : Response) => {
        try {
          const { ip } = request.body;
          const account = request.account
    
          if (!ip) {
           response.status(400).json({ message: 'IP required.' });
           return
          }
          console.log(account)
          //await AccountService.pushToHistory(account?._id!, ip)

          response.send("history recorded")
    
        } catch (err) {
          console.error(err);
          response.status(500).json({ message: 'Server error' });
          return
        }
      }
    

}
