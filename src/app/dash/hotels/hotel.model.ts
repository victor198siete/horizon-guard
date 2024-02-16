import { HotelRate, Season, MealPlan } from './rate.model';
import { Room } from './room.model';

export class Hotel{
  public isActive: boolean;
  public name: string;
  public suplierAgency: string;
  public hotelChain: string;

  public rating: number;
  public destiny: string;
  public country: string;
  public zip: string;
  public phone: number;
  public email: string;
  public description: string;
  public imagePath: string;
  public amenities?: string[];
  public roomList?: Room[];
  public mealPlan?: MealPlan[];
  public rate?: HotelRate;
  public createdBy?: string;
  public updatedBy?: string;
  public updateDate?: Date;

  constructor( isActive: boolean, name: string, suplierAgency: string, hotelChain: string, rating: number, destiny: string, country: string, zip: string, phone: number,
    email: string, desc: string, image: string,  amenities: string[],  roomList: Room[], mealPlan: MealPlan[], rate: HotelRate, createBy: string, updatedBy: string,
    updateDate: Date) {
      this.isActive = isActive;
      this.name = name;
      this.suplierAgency = suplierAgency;
      this.hotelChain = hotelChain;
      this.rating = rating;
      this.destiny = destiny;
      this.country = country;
      this.zip = zip;
      this.phone = phone;
      this.email = email;
      this.description = desc;
      this.imagePath = image;
      this.amenities = amenities;
      this.roomList = roomList;
      this.mealPlan = mealPlan;
      this.rate = rate;
      this.createdBy = createBy;
      this.updatedBy = updatedBy;
      this.updateDate = updateDate;
  }
}
