"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PricingPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/journeys-and-fees");
  }, [router]);

  return (
    <>
      <p className="pt-32 px-10">Redirecting to /journeys-and-fees</p>
      {/* 
        <div className="py-[100vh] bg-dl">
          <h1 className="font-bold bg-clip-text text-transparent bg-pg text-center text-5xl">
            This is a deprecated page, please visit 
            <Link href="/journeys-and-fees">journeys and fees instead</Link>
          </h1>
        </div>
        <TierCustomTabs />
        <Table />
        <PriceCalc /> 
      */}
    </>
  );
}
