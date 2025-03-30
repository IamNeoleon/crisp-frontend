import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import FilterSizes from '../FilterSize/FilterSize';
import FilterColor from '../FilterColor/FilterColor';
import FilterPrice from '../FilterPrice/FilterPrice';
import "./filter.scss";

type FiltersState = {
   brand: string[];
   dressLength: string[];
};

const brands = ["STATE", "COOPER", "BARDOT", "ALFANI", "CECE", "DONNA RICCO"];
const sizes = ["W30", "W31", "W32", "W33", "W34", "W35"];
const dressLengths = ["SHORT", "KNEE LENGTH", "HIGH LOW"];
const colors = [
   "#292A2D", "#FF5733", "#33FF57", "#3357FF", "#FF33A1",
   "#FFD700", "#8A2BE2", "#00CED1", "#DC143C", "#20B2AA",
   "#FF4500", "#556B2F", "#708090", "#9932CC"
];


const Filters: React.FC = () => {
   const [filters, setFilters] = useState<FiltersState>({
      brand: ['bardot'],
      dressLength: ['high low']
   })
   const [isChecked, setIsChecked] = useState(false);
   const [selectedSize, setSelectedSize] = useState<string>("W30")
   const [selectedColor, setSelectedColor] = useState<string>(colors[1])
   const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);

   const handleCheckboxChange = (category: keyof typeof filters, value: string) => {
      setFilters((prev) => {
         const updated = prev[category].includes(value)
            ? prev[category].filter((item) => item !== value)
            : [...prev[category], value];

         return { ...prev, [category]: updated };
      });
   };

   const handleSliderChange = (value: number | number[]) => {
      if (Array.isArray(value)) {
         setPriceRange([value[0], value[1]]);
      }
   };

   return (
      <>
         <div className="filters">
            <div className='filters__filter'>
               <div className='filters__title'>Brand</div>
               <div className="filters__checkboxes">
                  {brands.map((brand) => (
                     <Checkbox
                        key={brand}
                        label={brand}
                        checked={filters.brand.includes(brand.toLowerCase())}
                        onChange={() => handleCheckboxChange("brand", brand.toLowerCase())}
                     />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Size (Inches)</div>
               <div className="filters__sizes">
                  {sizes.map(size => (
                     <FilterSizes key={size} size={size} isSelected={size === selectedSize} onClick={() => setSelectedSize(size)} />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Color</div>
               <div className="filters__colors">
                  {colors.map((color, index) => (
                     <FilterColor key={`${color}-${index}`} color={color} isSelected={color === selectedColor} onClick={() => setSelectedColor(color)} />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Dress Length</div>
               <div className="filters__checkboxes">
                  {dressLengths.map((length) => (
                     <Checkbox
                        key={length}
                        label={length}
                        checked={filters.dressLength.includes(length.toLowerCase())}
                        onChange={() => handleCheckboxChange("dressLength", length.toLowerCase())}
                     />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Price Range</div>
               <FilterPrice priceRange={priceRange} onChangePrice={handleSliderChange} />
            </div>
            <button className="filters__btn">Apply</button>
         </div>
      </>
   );
};

export default Filters;