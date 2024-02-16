export class Flight{
  public isActive: boolean;
  public airline: string;
  public airlineImage: string;
  public suplierAgency: string;
  public flightNumber: string;
  public duration: number;
  public shedule: Date;
  public startLocation: string;
  public endLocation: string;

  constructor(
    isActive: boolean,
    airline: string,
    airlineImage: string,
    suplierAgency: string,
    flightNumber: string,
    duration: number,
    shedule: Date,
    startLocation: string,
    endLocation: string) {
    this.isActive = isActive;
    this.airline = airline;
    this.airlineImage = airlineImage;
    this.suplierAgency = suplierAgency;
    this.flightNumber = flightNumber;
    this.duration = duration;
    this.shedule = shedule;
    this.startLocation = startLocation;
    this.endLocation = endLocation;
  }
}
