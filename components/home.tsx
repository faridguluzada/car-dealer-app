import { VehicleService } from "@/services/VehicleService";
import Filter from "./filter";

export default async function Home() {
  const vehicleTypes = await VehicleService.getVehiclesTypes();

  return <Filter vehicleTypes={vehicleTypes} />;
}
