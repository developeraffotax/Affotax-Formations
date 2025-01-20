import { Select, SelectItem } from "@heroui/react";
import React from "react";
import { Controller } from "react-hook-form";

const SelectCmp = ({control, label, name, errors, array}) => {
  return (
    <div className=" w-full flex flex-row justify-between items-center gap-4 ">
      <label className={`text-base ${errors?.name ? "text-rose-500" : ""}`}>{label} </label>

      <Controller control={control} name={"company_suffix"} render={({ field }) => ( <Select {...field} classNames={{ base: "w-[60%]" }} size="sm" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} > {" "} {array.map((el, index) => ( <SelectItem key={el.itemText} >{el.itemText}</SelectItem> ))}{" "} </Select> )} />
    </div>
  );
};

export default SelectCmp;
