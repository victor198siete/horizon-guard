export class Reservation{
  public number: string;
  public reference: string;
  public status: boolean;
  public creationDate: Date;
  public user: string;
  public product: string;
  public price: number;
  public cost: number;
  public passengers: string[];
  public contactEmail: string;

  constructor(
    number: string,
    reference: string,
    status: boolean,
    creationDate: Date,
    user: string,
    product: string,
    price: number,
    cost: number,
    passengers: string[],
    contactEmail: string
    ) {
      this.number = number;
      this.reference = reference;
      this.status = status;
      this.creationDate = creationDate;
      this.user = user;
      this.product = product;
      this.price = price;
      this.cost = cost;
      this.passengers = passengers;
      this.contactEmail = contactEmail;
  }
}
