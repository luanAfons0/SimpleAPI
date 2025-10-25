import { IsString, Length } from 'class-validator';

export class CreateAddressDto {
    public readonly clientId: number; 

    @IsString()
    public readonly street: string;

    @IsString()
    public readonly number: string;

    @IsString()
    public readonly complement: string;

    @IsString()
    public readonly neighborhood: string;

    @IsString()
    public readonly city: string;

    @IsString()
    public readonly state: string;

    @IsString()
    public readonly zipCode: string;
}