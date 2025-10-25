import { IsString, IsEnum, Length } from 'class-validator';
import { ClientType } from 'src/enums/client-type.enum';

export class CreateClientDto {
  @IsString()
  @Length(3, 50, {
    message: 'The name length must be between 3 and 50 characters',
  })
  public readonly name: string;

  @IsEnum(ClientType, {
    message: `Client type must be one of: ${Object.values(ClientType).join(', ')}`,
  })
  public readonly clientType: ClientType;

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