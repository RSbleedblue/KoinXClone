import TaxCalculator from "../../Components/TaxCalculator/taxCalculator";
import Navbar from "../../Components/navbar/navbar";

const HomeLanding = () => {
    return(
        <>
            <div className="flex flex-col gap-6 w-full justify-center items-center ">
              <Navbar/>
              <TaxCalculator/>
            </div>        
        </>
    )
}
export default HomeLanding; 