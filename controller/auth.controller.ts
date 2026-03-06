import { Response, response } from "express";
import { AuthRequest } from "../types/request.type";
import { AccountService } from "../services/account.service";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export class AuthController {

  static login = async (request : AuthRequest , response : Response) => {
      try {
      const { email, password } = request.body;

      if (!email || !password) {
       response.status(400).json({ message: 'Email and password are required.' });
       return
      }

      const user = await AccountService.findByEmail(email);
      if (!user) {
       response.status(401).json({ message: 'Invalid email or password.' });
       return
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        response.status(401).json({ message: 'Invalid email or password.' });
        return
      }

      const token = jwt.sign(
        { id: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1d' }
      );

      response.status(200).json({
        message: 'Login successful!',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });

    } catch (err) {
      console.error(err);
      response.status(500).json({ message: 'Server error' });
      return
    }
  }



}
