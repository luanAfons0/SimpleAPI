import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @Length(3, 50, {
    message: 'The first name length must be between 3 and 50 characters',
  })
  @Transform(({ value }) => value.trim())
  public readonly firstName: string;

  @IsString()
  @Length(3, 50, {
    message: 'The last name length must be between 3 and 50 characters',
  })
  public readonly lastName: string;

  @IsString()
  @Length(14, 14, { message: 'Document length must be equals to 14' })
  public readonly document: string;

  @IsString()
  @Length(7, 100, {
    message: 'Email length must be between 7 and 100 characters',
  })
  public readonly email: string;

  @IsString()
  @Length(15, 15, { message: 'Phone number length must be 15 characters' })
  public readonly phoneNumber: string;

  @IsString()
  @Length(8, 20, { message: 'Password length must be between 8 and 20 cha' })
  public readonly password?: string;
}
