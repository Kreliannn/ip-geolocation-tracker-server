import AccountModel from "../model/history.model"
import { historyInterface, historyInterfaceInput } from "../types/history.type";


export class HistoryService {

  static async create(data : historyInterfaceInput) {
    await AccountModel.create(data)
  }

  static async delete(id : string) {
    return AccountModel.findByIdAndDelete(id);
  }

}