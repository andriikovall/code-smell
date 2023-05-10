/**
 * Refactoring on the data level
 */

enum TransportType {
  eCar,
  ePlane,
  eSubmarine,
}

class Transport {
  // big class with many responsibilities of being a Car, Plane and Submarine at the same time
  private m_takeOffTime: number;
  private m_landingTime: number;
  private m_diveTime: number;
  private m_ascentTime: number;
  private m_type: TransportType;

  constructor(type: TransportType) {
    this.m_type = type;
  }

  public getSpeed(distance: number, time: number): number {
    // simplify the condition, remove unnecessary nesting
    if (time !== 0) {
      // of course switch here breaks object oriented design, we should use polymorphism
      // (Replace Type Code with Subclasses), (Replace Conditional with Polymorphism) is good as well
      switch (this.m_type) {
        case TransportType.eCar:
          return distance / time;
        case TransportType.ePlane:
          return distance / (time - this.m_takeOffTime - this.m_landingTime);
        case TransportType.eSubmarine:
          return distance / (time - this.m_diveTime - this.m_ascentTime);
      }
    }
    return 0;
  }
}
