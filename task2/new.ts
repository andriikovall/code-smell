interface TransportNew {
  getSpeed(distance: number, time: number): number;
}

class Car implements TransportNew {
  public getSpeed(distance: number, time: number): number {
    if (time === 0) {
      return 0;
    }
    return distance / time;
  }
}

class Plane implements TransportNew {
  constructor(private takeOffTime: number, private landingTime: number) {}

  public getSpeed(distance: number, time: number): number {
    if (time === 0) {
      return 0;
    }
    return distance / (time - this.takeOffTime - this.landingTime);
  }
}

class Submarine implements TransportNew {
  constructor(private diveTime: number, private ascentTime: number) {}

  public getSpeed(distance: number, time: number): number {
    if (time === 0) {
      return 0;
    }
    return distance / (time - this.diveTime - this.ascentTime);
  }
}
