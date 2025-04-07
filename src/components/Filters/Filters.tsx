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
   {
      colorName: "black",
      colorCode: "#000000"
   },
   {
      colorName: "red",
      colorCode: "#ff0000"
   },
   {
      colorName: "beige",
      colorCode: "#f5f5dc"
   },
   {
      colorName: "white",
      colorCode: "#fff"
   },
   {
      colorName: "lilac",
      colorCode: "#c8a2c8"
   },
   {
      colorName: "pink",
      colorCode: "#ffc0cb"
   },
   {
      colorName: "blue",
      colorCode: "#0000ff"
   },
   {
      colorName: "light gray",
      colorCode: "#c8c8c8"
   },
   {
      colorName: "dark gray",
      colorCode: "#666666"
   },
   {
      colorName: "green",
      colorCode: "#00ff00"
   }
]

export type TColor = {
   colorName: string,
   colorCode: string
}

const Filters: React.FC = () => {
   const [filters, setFilters] = useState<FiltersState>({
      brand: ['bardot'],
      dressLength: ['high low']
   })
   const [selectedSize, setSelectedSize] = useState<string>("W30")
   const [selectedColor, setSelectedColor] = useState<TColor>(colors[1])
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

   const applyFilters = () => {

   }

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
               <div className='filters__title'>Color</div>
               <div className="filters__colors">
                  {colors.map((color, index) => (
                     <FilterColor key={`${color.colorName}-${index}`} color={color} isSelected={color.colorName === selectedColor.colorName} onClick={() => setSelectedColor(color)} />
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