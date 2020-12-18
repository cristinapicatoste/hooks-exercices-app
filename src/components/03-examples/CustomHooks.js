import React from "react";
import { CounterCustomHook } from "../01-useState/CounterCustomHook";
import { FormCustomHook } from "../02-useEffect/FormCustomHook";
import { MultipleCustomHooks } from "./MultipleCustomHooks";

export const CustomHooks = () => {
  return (
    <>
      <CounterCustomHook />
      <FormCustomHook />
      <MultipleCustomHooks />
    </>
  );
};
