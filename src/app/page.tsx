import { Overview } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense>
        <Overview />
      </Suspense>
    </div>
  );
}
