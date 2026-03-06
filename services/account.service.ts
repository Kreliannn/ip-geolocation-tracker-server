import AccountModel from "../model/account.model"
import { accountInterface, accountInterfaceInput } from "../types/accounts.type";


export class AccountService {

  static async create(data : accountInterfaceInput) {
    await AccountModel.create(data)
  }

  static async get(id : string) {
    return AccountModel.findById(id);
  }

  static async findByEmail(email : string) {
    const account = AccountModel.findOne({ email });
    return account
  }

}