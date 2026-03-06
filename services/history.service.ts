import HistoryModel from "../model/history.model"
import { historyInterface, historyInterfaceInput } from "../types/history.type";


export class HistoryService {

  static async create(data : historyInterfaceInput) {
    await HistoryModel.create(data)
  }

  static async getAll(user : string) {
    return HistoryModel.find({user}).sort({ _id: -1 });
  }

  static async delete(id : string) {
    return HistoryModel.findByIdAndDelete(id);
  }

}