export interface IVehicle {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IVehicleData {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

const baseUrl = process.env.BASE_URL;

export class VehicleService {
  public static async getVehiclesTypes() {
    try {
      const res = await fetch(
        `${baseUrl}/GetMakesForVehicleType/car?format=json`,
      );
      const data = await res.json();

      return data.Results;
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }

  public static async getVehiclesData({
    makeId,
    year,
  }: {
    makeId: string;
    year: string;
  }) {
    try {
      const res = await fetch(
        `${baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      );
      const data = await res.json();

      return data.Results;
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }
}
