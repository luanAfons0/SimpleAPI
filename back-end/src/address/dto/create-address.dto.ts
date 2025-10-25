import { IsString, Length, IsOptional } from 'class-validator';

export class CreateAddressDto {
  public readonly clientId: number;

  @IsString()
  @Length(1, 60, {
    message: 'Street length must be between 1 and 60 characters',
  })
  public readonly street: string;

  @IsString()
  @Length(1, 45, {
    message: 'Number length must be between 1 and 45 characters',
  })
  public readonly number: string;

  @IsOptional()
  @IsString()
  @Length(1, 20, {
    message: 'Complement length must be between 1 and 20 characters',
  })
  public readonly complement?: string | null;

  @IsString()
  @Length(1, 100, {
    message: 'Neighborhood length must be between 1 and 100 characters',
  })
  public readonly neighborhood: string;

  @IsString()
  @Length(1, 60, {
    message: 'City length must be between 1 and 60 characters',
  })
  public readonly city: string;

  @IsString()
  @Length(1, 50, {
    message: 'State length must be between 1 and 50 characters',
  })
  public readonly state: string;

  @IsString()
  @Length(1, 100, {
    message: 'Zip code length must be between 1 and 100 characters',
  })
  public readonly zipCode: string;
}