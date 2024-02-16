export class Ticket{
  public isActive: boolean;
  public name: string;
  public description: string;
  public agencyImage: string;
  public suplierAgency: string;
  public duration: number;
  public shedule: Date;
  public destiny: string;
  public country: string;

  constructor(
    isActive: boolean,
    agencyImage: string,
    name: string,
    description: string,
    suplierAgency: string,
    duration: number,
    shedule: Date,
    destiny: string,
    country: string) {
    this.isActive = isActive;
    this.agencyImage = agencyImage;
    this.name = name;
    this.description = description;
    this.suplierAgency = suplierAgency;
    this.duration = duration;
    this.shedule = shedule;
    this.destiny = destiny;
    this.country = country;
  }

}
