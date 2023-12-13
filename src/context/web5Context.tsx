/**
 * gives its children access to state and functions for the web5 instance.
 */
"use client";
import { useWeb5Connect } from "@/hooks";
import { ReactNode, createContext } from "react";

export type Web5ContextType = {
  web5: any;
  myDid: any;
};

const Web5Context = createContext<Web5ContextType | null>(null);
export default Web5Context;

interface Web5ContextProviderProps {
  children?: ReactNode;
}

export const Web5Provider = ({ children }: Web5ContextProviderProps) => {
  const { myDid, web5 } = useWeb5Connect();

  return (
    <Web5Context.Provider
      value={{
        web5,
        myDid,
      }}
    >
      {children}
    </Web5Context.Provider>
  );
};
