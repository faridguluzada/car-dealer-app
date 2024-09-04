"use client";

import { useQueryString } from "@/hooks/useQueryString";
import { generateYears } from "@/lib/utils";
import { IVehicle } from "@/services/VehicleService";
import Link from "next/link";

export default function Filter({ vehicleTypes }: { vehicleTypes: IVehicle[] }) {
  const { createQueryString, searchParams } = useQueryString();
  const selectedVehicleType = searchParams.get("makeId");
  const selectedYear = searchParams.get("modelYear");

  const years = generateYears();

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-10'>Car Dealer App</h1>

        <div className='mb-6'>
          <label className='block text-lg font-semibold mb-2 text-gray-700'>
            Select Vehicle Type
          </label>
          <select
            className='w-full border border-gray-300 p-3 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500'
            onChange={(e) => createQueryString("makeId", e.target.value)}
          >
            <option value=''>Select Vehicle Type</option>
            {vehicleTypes.map((vehicleType) => (
              <option key={vehicleType.MakeId} value={vehicleType.MakeId}>
                {vehicleType.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-6'>
          <label className='block text-lg font-semibold mb-2 text-gray-700'>
            Select Model Year
          </label>
          <select
            className='w-full border border-gray-300 p-3 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500'
            onChange={(e) => createQueryString("modelYear", e.target.value)}
          >
            <option value=''>Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <Link href={`/results/${selectedVehicleType}/${selectedYear}`} passHref>
          <button
            className={`w-full p-4 text-lg text-white font-bold rounded-lg transition-colors ${
              selectedVehicleType && selectedYear
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedVehicleType || !selectedYear}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
