/**
 * call this hook anywhere within the web5 context children
 */
"use client";
import Web5Context from "@/context/web5Context";
import { useContext } from "react";

const useWeb5Instance = () => {
  const context = useContext(Web5Context);

  return context;
};

export default useWeb5Instance;
