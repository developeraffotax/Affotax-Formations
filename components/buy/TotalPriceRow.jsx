import React from "react";


//net price is string
const TotalPriceRow = ({netPrice}) => {
  return  <td className="py-2 text-end font-semibold  text-xl text-orange-500 ">£{(+netPrice).toFixed(2).toString() }</td>
//   return  <td className="py-2 text-end font-semibold  text-xl text-orange-500 ">£{(((20/100) * +netPrice) + +netPrice).toFixed(2).toString() }</td>

};

export default TotalPriceRow;
