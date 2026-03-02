// seeders/seedUsers.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { AccountService } from '../services/account.service';

dotenv.config();

export const seedUser = async () => {
  try {
    const existing = await AccountService.findByEmail('krel@gmail.com');
    if (existing) {
      console.log('User already exists. Seeder skipped.');
      process.exit();
    }

    const hashedPassword = await bcrypt.hash('123456789', 10);

    await AccountService.create({
      name: 'krelian',
      email: 'krelian@gmail.com',
      password: hashedPassword,
      history : []
    })

    console.log('✅ User seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding user:', err);
    process.exit(1);
  }
};



seedUser()
