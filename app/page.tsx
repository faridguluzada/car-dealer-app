import Home from "@/components/home";
import Spinner from "@/components/spinner";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<Spinner />}>
      <Home />
    </Suspense>
  );
}
