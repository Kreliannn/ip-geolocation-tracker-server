import { Response, response } from "express";
import { AuthRequest } from "../types/request.type";
import { HistoryService } from "../services/history.service";

export class HistoryController {

    static getHistory = async (request : AuthRequest , response : Response) => {
      try {
        const account = request.account
        const history = await HistoryService.getAll(account?._id!)
        response.send(history)
      } catch (err) {
        console.error(err);
        response.status(500).json({ message: 'Server error' });
        return
      }
    }



    static recordHistory = async (request : AuthRequest , response : Response) => {
        try {
          const { ip } = request.params;
          const account = request.account
  
          if (!ip) {
           response.status(400).json({ message: 'IP required.' });
           return
          }
    
          await HistoryService.create({
            user : account?._id!,
            ip : ip,
            searchedAt : new Date().toLocaleString("en-US", { hour12: true })
          })
  
          response.send("history recorded")
    
        } catch (err) {
          console.error(err);
          response.status(500).json({ message: 'Server error' });
          return
        }
      }


       static deleteHistory = async (request : AuthRequest , response : Response) => {
        try {
          const history : string[]  = request.body.history;
    
          if (history.length == 0) {
           response.status(400).json({ message: 'no slected IP.' });
           return
          }

          for(let id of history){
            await HistoryService.delete(id)
          }

          console.log("history deleted")

          response.send("history deleted")
    
        } catch (err) {
          console.error(err);
          response.status(500).json({ message: 'Server error' });
          return
        }
      }
    

}
