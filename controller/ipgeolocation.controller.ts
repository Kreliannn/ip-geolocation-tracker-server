import { Response, response } from "express";
import { AuthRequest } from "../types/request.type";
import axios from "axios";

export class HistoryController {

    static getMyIpGeolocation = async (request : AuthRequest , response : Response) => {
        try {     
          const res = await axios.get("https://ipinfo.io//geo")
          response.send(res.data)
          response.send("history recorded")
    
        } catch (err) {
          console.error(err);
          response.status(500).json({ message: 'Server error' });
          return
        }
    }

     static searchIpGeolocation = async (request : AuthRequest , response : Response) => {
        try {
          const { ip } = request.params;       
          const res = await axios.get(`https://ipinfo.io/${ip}/json`)
          response.send(res.data)
        } catch (err) {
          console.error(err);
          response.status(500).json({ message: 'Server error' });
          return
        }
    }
    

}
