import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setType } from "../../Redux/Slices/InvestmentTypeSlice";
import { TiTick } from "react-icons/ti";

const TaxInputs = () => {
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [salesPrice, setSalesPrice] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [capitalGains, setCapitalGains] = useState(0);
    const [discountGains, setDiscountGains] = useState(0);
    const [netCapital, setNetCapital] = useState(0);
    const [taxToPay, setTaxToPay] = useState(0);
    const [annualIncome, setAnnualIncome] = useState('45,001 - $120,000');

    const investmentType = useSelector((state) => state.investment.type);
    const dispatch = useDispatch();

    const incomeBrackets = [
        { label: '0 - $18,200', rate: 0, base: 0 },
        { label: '18,201 - $45,000', rate: 19, base: 18200 },
        { label: '45,001 - $120,000', rate: 32.5, base: 5092 },
        { label: '120,001 - $180,000', rate: 37, base: 29467 },
        { label: '180,001', rate: 45, base: 51667 }
    ];

    const getTaxRate = () => {
        const bracket = incomeBrackets.find(bracket => bracket.label === annualIncome);
        return bracket ? bracket : incomeBrackets[2];
    };

    useEffect(() => {
        const valueOfCapitalGains = salesPrice - purchasePrice - expenses;
        setCapitalGains(valueOfCapitalGains);
    }, [purchasePrice, salesPrice, expenses]);

    useEffect(() => {
        if (investmentType === 'Long Term' && capitalGains > 0) {
            const valueOfDiscountGains = 0.5 * capitalGains;
            setDiscountGains(valueOfDiscountGains);
        } else {
            setDiscountGains(0);
        }
    }, [capitalGains, investmentType]);

    useEffect(() => {
        setNetCapital(capitalGains - discountGains);
    }, [capitalGains, discountGains]);

    useEffect(() => {
        const { rate, base } = getTaxRate();
        const valueTaxToPay = base + ((rate / 100) * (netCapital > 0 ? netCapital : 0));
        setTaxToPay(valueTaxToPay);
    }, [netCapital, annualIncome]);

    return (
        <>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[90px] mt-6 transition-all">
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                    <p className="text-sm">Enter purchase price of Crypto</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))}></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                    <p className="text-sm">Enter sale price of Crypto</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none" type="number" value={salesPrice} onChange={(e) => setSalesPrice(Number(e.target.value))}></input>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[90px] mt-6">
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                    <p className="text-sm">Enter your Expenses</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <input className="w-full bg-BaseGray focus:outline-none" type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))}></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                    <p className="text-sm">Investment Type</p>
                    <div className="w-full flex gap-2">
                        <button className={`investment-btn p-3 text-sm flex items-center gap-2 w-full rounded-lg border border-solid ${investmentType === 'Short Term' ? 'border-KoinXBlue text-KoinXBlue active' : 'border-gray-300'}`} onClick={() => dispatch(setType('Short Term'))}>
                            Short Term
                            {
                                investmentType === 'Short Term' ? <span className="text-2xl"><TiTick /></span> : ("")
                            }
                        </button>
                        <button className={`investment-btn p-3 text-sm flex items-center w-full gap-2 rounded-lg border border-solid ${investmentType === 'Long Term' ? 'border-KoinXBlue text-KoinXBlue active' : 'border-gray-300'}`} onClick={() => dispatch(setType('Long Term'))}>
                            Long Term
                            {
                                investmentType === 'Long Term' ? <span className="text-2xl"><TiTick /></span> : ("")
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[90px] mt-6">
                <div className="flex flex-col gap-2 w-full">
                    <p className="text-sm">Select Your Annual Income</p>
                    <div className="w-full flex flex-col md:flex-row md:gap-[90px]">
                        <div className="w-full md:w-[40%] p-2 bg-BaseGray text-lg flex items-center rounded-lg">
                            <p>$</p>
                            <select className="w-full bg-BaseGray focus:outline-none" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)}>
                                {incomeBrackets.map(bracket => (
                                    <option key={bracket.label} className="bg-white">{bracket.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col text-xs gap-1">
                            <p>Tax Rate</p>
                            <p>{`$ ${getTaxRate().base} + ${getTaxRate().rate}% of excess over $${getTaxRate().base}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`transition-all ${investmentType === 'Long Term' ? 'show' : 'hide'} w-full flex flex-col md:flex-row gap-6 md:gap-[90px] mt-6`}>
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                    <p className="text-sm">Capital gains Amount</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <p className="w-full bg-BaseGray focus:outline-none">{capitalGains}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-[40%]">
                    <p className="text-sm">Discount for long term gains</p>
                    <div className="w-full p-2 bg-BaseGray text-lg flex items-center gap-2 rounded-lg">
                        <p>$</p>
                        <p className="w-full bg-BaseGray focus:outline-none">{discountGains}</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[90px] mt-6">
                <div className="flex flex-col gap-2 w-full md:w-[40%] p-2 bg-BaseGreen bg-opacity-20 rounded-lg items-center justify-center">
                    <p className="text-sm font-semibold">
                        Net Capital gains tax amount
                    </p>
                    <p className="text-BaseGreen text-lg font-semibold">
                        $ {netCapital}
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-[40%] p-2 bg-BaseBlue bg-opacity-20 rounded-lg items-center justify-center">
                    <p className="text-sm font-semibold">
                        The tax you need to pay*
                    </p>
                    <p className="text-BaseBlue text-lg font-semibold">
                        $ {taxToPay}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TaxInputs;
