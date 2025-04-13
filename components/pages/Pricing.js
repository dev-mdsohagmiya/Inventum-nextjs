"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/journeys-and-fees");
  }, [navigate]);

  return (
    <>
      <p className="pt-32 px-10">redirecting to /journeys-and-fees</p>
      {/*             <div className="py-[100vh] bg-dl">
                <h1 className=" font-bold bg-clip-text text-transparent bg-pg text-center text-5xl">This is a deprecated page, please visit <Link to="/journeys-and-fees">journes and fees instead</Link> </h1>
            </div>
            <TierCustomTabs />
            <Table />
            <PriceCalc /> */}
    </>
  );
}
