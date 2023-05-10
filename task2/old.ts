/**
 * Refactoring on the data level
 */

enum TransportType {
  eCar,
  ePlane,
  eSubmarine,
}

class Transport {
  private m_takeOffTime: number;
  private m_landingTime: number;
  private m_diveTime: number;
  private m_ascentTime: number;
  private m_type: TransportType;

  constructor(type: TransportType) {
    this.m_type = type;
  }

  public getSpeed(distance: number, time: number): number {
    if (time !== 0) {
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
