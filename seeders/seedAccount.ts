// seeders/seedUsers.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { AccountService } from '../services/account.service';
import axios from 'axios';

dotenv.config();

export const seedUser = async () => {
  try {

    const fetchUser = await axios.get("https://randomuser.me/api/?nat=us,gb,ca,au")

    const user = fetchUser.data

    const first = user.results[0].name.first;
    const last = user.results[0].name.last;

    const existing = await AccountService.findByEmail(`${first}@gmail.com`);

    if (existing) {
      return existing
    }

    const hashedPassword = await bcrypt.hash('12345', 10);

    const userCreated = await AccountService.create({
      name: `${first} ${last}`,
      email: `${first}@gmail.com`,
      password: hashedPassword,
    })

    return userCreated 

  } catch (err) {
    console.error('❌ Error seeding user:', err);
    process.exit(1);
  }
};


export const getAllUser = async () => {
  try {

    return await AccountService.getAll()

  } catch (err) {
    console.error('❌ Error seeding user:', err);
    process.exit(1);
  }
};


