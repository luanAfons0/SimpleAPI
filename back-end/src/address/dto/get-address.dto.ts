import { Address } from '../../entities/address.entity';

export class GetAddressDto {
  public readonly clientId: number;
  public readonly street: string;
  public readonly number: string;
  public readonly complement?: string;
  public readonly neighborhood: string;
  public readonly city: string;
  public readonly state: string;
  public readonly zipCode: string;

  constructor({
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
    client
  }: Pick<Address, 'street' | 'number' | 'complement' | 'neighborhood' | 'city' | 'state' | 'zipCode' | 'client'>) {
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.clientId = client.id;
  }
}