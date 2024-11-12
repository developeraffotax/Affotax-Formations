import React from "react";



const LIST = [
    {name: 'WISE', info: 'Open a Wise Ac online in 5 minutes'},
    {name: 'REVOLUT', info: 'Open a Revolut Ac online in 10 minutes'},
    {name: 'TIDE', info: 'Open a Tide Ac online in 10 minutes'},
]












const BankOption = () => {





  return (
    <section className="w-full bg-slate-400 py-16 mesh font-Inter relative">

       

        <div className="w-full mx-auto container">


            <h2 className="w-full text-center text-4xl font-semibold mb-8 text-white">Open a business bank account Online with one of our Partners</h2>
            <div className="w-full flex justify-center ">
            <p className="w-full text-center  mb-16 max-w-2xl text-white">Benefit from a free business bank account when you use our services. There are great options to choose from and you’ll also get your application fast-tracked. No more long wait times for appointments so you can get  back to the important stuff - running your new business.</p>
            </div>


            <ul className="w-full p-8 flex flex-row justify-end items-center gap-8 ">
                {
                    LIST.map((el) => {
                        return (
                            <li key={el.name} className="p-8 w-full flex flex-col justify-center items-center gap-4 bg-white/40  rounded-2xl backdrop-blur-md">
                                    <h3 className="text-xl font-semibold  ">{el.name}</h3>
                                    <p className="text-lg text-gray-700  ">{el.info}</p>
                            </li>
                        )
                    })
                }
            </ul>


        </div>
    </section>
  )
};

export default BankOption;
