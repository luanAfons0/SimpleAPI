import { Client } from '../entities/client.entity';

export class GetClientDTO {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly email: string;
  public readonly document: string;
  public readonly phoneNumber: string;

  constructor({
    firstName,
    lastName,
    email,
    document,
    phoneNumber,
  }: Pick<
    Client,
    'firstName' | 'lastName' | 'email' | 'document' | 'phoneNumber'
  >) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.document = document;
    this.phoneNumber = phoneNumber;
  }
}
