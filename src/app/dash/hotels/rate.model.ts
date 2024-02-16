// Rate
export class HotelRate {
  public id: string;
  public seasons: Season[];

  constructor(rateId: string, seasons: Season[]) {
    this.id = rateId;
    this.seasons = seasons;
  }
}

// Season
export class Season{
  public id: string;
  public name: string;
  public startDate: Date;
  public endDate: Date;

  constructor(seasonId: string, name: string, startDate: Date, endDate: Date ) {
    this.id = seasonId;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;

  }
}

// Meal Plan
export class MealPlan{
  public id: string;
  public name: string;
  public description;

  constructor(mealPlanId: string, name: string, description: string){
    this.id = mealPlanId;
    this.name = name;
    this.description = description;
  }
}

// Suplement
export class Suplement{
  public id: string;
  public name: string;
  public description;

  constructor(suplementId: string, name: string, description: string){
    this.id = suplementId;
    this.name = name;
    this.description = description;
  }
}

// Settings
export class Settings{
  public id: string;
  public hotelId?: string;
  public minAgeEstance?: number;
  public minEstance?: number;
  public maxEstance?: number;
  public currency: string;

  constructor(id: string, hotelId: string, minAgeEstance: number, minEstance: number, maxEstance: number, currency: string){
    this.id = id;
    this.hotelId = hotelId;
    this.minAgeEstance = minAgeEstance;
    this.minEstance = minEstance;
    this.maxEstance = maxEstance;
    this.currency = currency;
  }
}

export class ratePerPax{
  public id: string;
  public baseDoble?: number;
  public singleSuplement?: number;
  public thirdAdultPrice?: number;
  public fourthAdultPrice?: number;
  public firstChildPrice?: number;
  public secondChildPrice?: number;

  constructor(id: string, baseDoble: number, suplement: string){
    this.id = id;
  }
}
