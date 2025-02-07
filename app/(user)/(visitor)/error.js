"use client"; // Error boundaries must be Client Components

import Link from "next/link";


export default function Error({ error, reset }) {

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-12">
      <h2 className="w-full  font-poppins text-center text-xl text-red-500  ">Something went wrong!</h2>
      <Link href={"/"} className="w-full   font-poppins text-center ">Go to Homepage</Link>
    </div>
  );
}
