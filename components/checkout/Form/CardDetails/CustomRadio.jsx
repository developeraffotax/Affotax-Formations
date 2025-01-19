import {Radio, cn} from "@heroui/react";

export const CustomRadio = (props) => {
  const {children, ...otherProps} = props;

  return (
    <Radio
      {...otherProps}
      
      classNames={{
        base: cn(
          "flex m-0 bg-gray-100 items-center justify-center",
          "max-w-[80px] p-1 cursor-pointer rounded-lg gap-2 border-2 border-transparent ",
          "data-[selected=true]:border-cyan-400 data-[selected=true]:bg-cyan-100",
        ),
        wrapper: "hidden",
        labelWrapper: "mr-2"

      }}
    >
      {children}
    </Radio>
  );
};