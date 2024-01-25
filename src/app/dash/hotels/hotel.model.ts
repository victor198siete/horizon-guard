export class Hotel{
  public name: string;
  public suplierAgency: string;
  public isActive: boolean;
  public description: string;
  public imagePath: string;
  public rating: string;
  public amenities: string[];
  public destiny: string;
  public country: string;
  public currency: string;
  public roomList: string[];

  constructor(name: string, suplierAgency: string, isActive: boolean, desc: string, image: string, rating: string, amenities: string[], destiny: string, country: string, currency: string, roomList: string[]) {
    this.name = name;
    this.suplierAgency = suplierAgency;
    this.isActive = isActive;
    this.description = desc;
    this.imagePath = image;
    this.rating = rating;
    this.amenities = amenities;
    this.destiny = destiny;
    this.country = country;
    this.currency = currency;
    this.roomList = roomList
  }
}
