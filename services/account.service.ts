import AccountModel from "../model/account.model"
import { accountInterface, accountInterfaceInput } from "../types/accounts.type";


export class AccountService {

  static async create(data : accountInterfaceInput) {
    return await AccountModel.create(data)
  }

  static async getAll() {
    return AccountModel.find();
  }

  static async get(id : string) {
    return AccountModel.findById(id);
  }

  static async findByEmail(email : string) {
    const account = AccountModel.findOne({ email });
    return account
  }

}