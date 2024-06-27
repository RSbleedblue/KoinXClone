import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const CustomDropDown = ({ options, disable }) => {
    const [selected, setSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownClick = () => {
        if (!disable) {
            setIsOpen(!isOpen);
        }
    };

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full md:w-[60%]">
            <div
                className={`bg-BaseSelection p-2 rounded-lg text-sm font-semibold ${disable ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-between`}
                onClick={handleDropdownClick}
            >
                <div className="flex items-center">
                    {selected.img && <img src={selected.img} alt={selected.opt} className="inline-block mr-2 w-4 h-4" />}
                    {selected.opt}
                </div>
                <FaAngleDown />
            </div>
            {!disable && isOpen && (
                <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 z-10 flex flex-col md:flex-row">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            className="p-2 hover:bg-gray-200 cursor-pointer md:w-auto"
                            onClick={() => handleOptionClick(option)}
                        >
                            <div className="flex items-center">
                                {option.img && <img src={option.img} alt={option.opt} className="inline-block mr-2 w-4 h-4" />}
                                {option.opt}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropDown;
