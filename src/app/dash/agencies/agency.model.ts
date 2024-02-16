export class Agency{
  public name: string;
  public invoiceName: string;
  public rfc: string;
  public isActive: boolean;
  public description: string;
  public imagePath:string;
  public destiny: string;
  public country: string;
  public contactName: string;
  public contactEmail: string;
  public contactPhoneNumber: string;

  constructor(
    name: string,
    isActive: boolean,
    invoiceName: string,
    rfc: string,
    desc: string,
    image: string,
    destiny: string,
    country: string,
    contactName: string,
    contactEmail: string,
    contactPhoneNumber: string
    ) {
    this.name = name;
    this.isActive = isActive;
    this.invoiceName = invoiceName;
    this.rfc = rfc
    this.description = desc;
    this.imagePath = image;
    this.destiny = destiny;
    this.country = country;
    this.contactName = contactName;
    this.contactEmail = contactEmail;
    this.contactPhoneNumber = contactPhoneNumber;
  }
}
