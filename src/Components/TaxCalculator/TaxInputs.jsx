const TaxInputs = () => {

    return (
        <>
            <div className="w-full flex gap-[90px] mt-6 ">
                <div className="flex flex-col gap-2 w-[40%]">
                    <p className="text-sm">Enter purchase price of Crypto</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none "></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[40%]">
                    <p className="text-sm">Enter sale price of Crypto</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none "></input>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-[90px] mt-6 ">
                <div className="flex flex-col gap-2 w-[40%]">
                    <p className="text-sm">Enter your Expenses</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none "></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[40%]">
                    <p className="text-sm">Investment Type</p>
                    <div className="w-full flex gap-2 ">
                        <div className="w-[50%] flex flex-col gap-2">
                            <button className="p-3  text-sm flex items-center gap-2 w-full rounded-lg  border border-solid border-black ">
                                Short Term
                            </button>
                            <p className="text-xs font-semibold">&lt; 12 months</p>
                        </div>
                        <div className="w-[50%] flex flex-col gap-2">
                            <button className="p-3  text-sm flex items-center  w-full gap-2 rounded-lg  border border-solid border-black ">
                                Long Term
                            </button>
                            <p className="text-xs font-semibold">&gt; 12 months</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-[90px] mt-6 ">
                <div className="flex flex-col gap-2 w-full">
                    <p className="text-sm">Select Your Annual Income</p>
                   <div className="w-full flex items-center gap-[90px]">
                   <div className="w-[40%] p-2 bg-BaseGray text-lg flex items-center rounded-lg ">
                        <p>$</p>
                        <select className="w-full bg-BaseGray focus:outline-none">
                            <option className="bg-white">0 - $45,000</option>
                            <option className="bg-white">45,001 - $55,000</option>
                            <option className="bg-white">55,001 - $65,000</option>
                            <option className="bg-white">65,001 - $75,000</option>
                            <option className="bg-white">75,001 - $85,000</option>
                            <option className="bg-white">85,001 - $95,000</option>
                            <option className="bg-white">95,001 - $105,000</option>
                            <option className="bg-white">105,001 - $120,000</option>
                            <option className="bg-white">120,001+</option>
                        </select>
                    </div>
                    <div className="flex flex-col text-xs gap-1">
                        <p>Tax Rate</p>
                        <p>$ 5,902 + 32.5% of excess over $45,001 </p>
                    </div>
                   </div>
                </div>
            </div>
            <div className="w-full flex gap-[90px] mt-6 ">
                <div className="flex flex-col gap-2 w-[40%]">
                    <p className="text-sm">Capital gains Amount</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none "></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[40%]">
                    <p className="text-sm">Discount for long term gains</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none "></input>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-[90px] mt-6 ">
                <div className="flex flex-col gap-2 w-[40%] p-2 bg-BaseGreen bg-opacity-20 rounded-lg items-center justify-center">
                    <p className="text-sm font-semibold">
                        Net Capital gains tax amount
                    </p>
                    <p className="text-BaseGreen text-lg font-semibold">
                        $ 2,500
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-[40%] p-2 bg-BaseBlue bg-opacity-20 rounded-lg items-center justify-center">
                    <p className="text-sm font-semibold">
                        The tax you need to pay*
                    </p>
                    <p className="text-BaseBlue text-lg font-semibold">
                        $ 812.5
                    </p>
                </div>
            </div>
        </>
    )
}
export default TaxInputs;