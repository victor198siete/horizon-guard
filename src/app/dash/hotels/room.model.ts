export class Room {
  public name: string;
  public allowChild: boolean;
  public maxPersons: number;
  public maxChild: number; // Nuevo campo habitaciones de tipo Room[]

  constructor(name: string, allowChild: boolean, maxPersons: number, maxChild: number) {
    this.name = name;
    this.allowChild = allowChild;
    this.maxPersons = maxPersons;
    this.maxChild = maxChild;
  }
}
