import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  public async hashPassword(password: string): Promise<string | undefined> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      if (!hashedPassword) throw new Error('Error during password hash');

      return hashedPassword;
    } catch (error) {
      console.log(error);
    }
  }

  public async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
