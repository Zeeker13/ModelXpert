"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadUser } from "@/services/user";
import Predictor from "@/components/Predictor";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const user = loadUser();
    if (!user) {
      // Redirect to login page if the user is not logged in
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <Predictor />
    </div>
  );
};

export default Page;
