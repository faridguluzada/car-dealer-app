import { IVehicleData, VehicleService } from "@/services/VehicleService";
import Link from "next/link";

export default async function Result({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) {
  const vehicles: IVehicleData[] = await VehicleService.getVehiclesData({
    makeId,
    year,
  });

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
      <div className='flex items-center justify-center mb-8 gap-10'>
        <Link href='/' passHref>
          <button className='px-3 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-200'>
            &larr;
          </button>
        </Link>
        <h1 className='text-4xl font-bold text-center'>
          Available Models for {year}
        </h1>
      </div>

      <ul
        className='w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-auto'
        style={{ maxHeight: "500px" }}
      >
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <li
              key={vehicle.Model_ID}
              className='border-b last:border-b-0 py-2'
            >
              {vehicle.Model_Name}
            </li>
          ))
        ) : (
          <p className='text-gray-600'>
            No models found for the selected vehicle type and year.
          </p>
        )}
      </ul>
    </div>
  );
}
