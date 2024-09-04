import Result from "@/components/result";
import Spinner from "@/components/spinner";
import { generateYears } from "@/lib/utils";
import { IVehicle, VehicleService } from "@/services/VehicleService";
import { Suspense } from "react";

export async function generateStaticParams() {
  const vehicles = await VehicleService.getVehiclesTypes();

  const years = generateYears();
  const paths: any = [];

  vehicles.forEach((vehicle: IVehicle) => {
    years.forEach((year) => {
      paths.push({
        makeId: vehicle.MakeId.toString(),
        year: year.toString(),
      });
    });
  });

  return paths;
}

export default async function ResultPage({
  params: { makeId, year },
}: {
  params: { makeId: string; year: string };
}) {
  return (
    <Suspense fallback={<Spinner />}>
      <Result makeId={makeId} year={year} />
    </Suspense>
  );
}
