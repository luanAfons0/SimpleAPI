import { Client } from '../../entities/client.entity';

export class GetClientDTO {
  public readonly name: string;
  public readonly email: string;
  public readonly clientType: string;
  public readonly document: string;
  public readonly phoneNumber: string;

  constructor({
    name,
    email,
    clientType,
    document,
    phoneNumber,
  }: Pick<
    Client,
    'name' | 'email' | 'clientType' | 'document' | 'phoneNumber'
  >) {
    this.name = name;
    this.clientType = clientType;
    this.email = email;
    this.document = document;
    this.phoneNumber = phoneNumber;
  }
}
