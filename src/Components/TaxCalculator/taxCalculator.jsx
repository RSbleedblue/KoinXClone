import aus from '../../assets/aus.png';
import TaxInputs from "./TaxInputs";
import CustomDropDown from "../dropdown/dropdownButton";

const TaxCalculator = () => {
    const optionsFYear = [
        { "opt": "FY 2023-24" }
    ];

    const country = [
        { "opt": "Australia", "img": aus }
    ];

    return (
        <div className="ml-10 p-6 w-[55%] flex flex-col items-center justify-center bg-white rounded-2xl">
            <p className="text-3xl font-semibold text-BaseFont">Free Crypto Tax Calculator Australia</p>
            <div className="w-[90%] flex flex-col p-4 mt-4">
                <div className="w-full flex gap-6">
                    <div className="flex items-center gap-2 w-[50%]">
                        <p className="text-sm">Financial Year</p>
                        <CustomDropDown disable={true} options={optionsFYear} />
                    </div>
                    <div className="flex items-center gap-2 w-[50%]">
                        <p className="text-sm">Country</p>
                        <CustomDropDown disable={true} options={country} />
                    </div>
                </div>
                <hr className="border border-opacity-5 mt-6  border-black border-solid w-[95%]"></hr>
                <TaxInputs/>
                
            </div>
        </div>
    )
}

export default TaxCalculator;
