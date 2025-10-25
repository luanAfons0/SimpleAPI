import { IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @Length(3, 50, {
    message: 'The name length must be between 3 and 50 characters',
  })
  public readonly name: string;

  @IsString()
  @Length(2, 10, {
    message: 'Client type length must be between 2 and 10 characters',
  })
  public readonly clientType: string;

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
}
