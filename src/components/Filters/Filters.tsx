import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import FilterSizes from '../FilterSize/FilterSize';
import FilterColor from '../FilterColor/FilterColor';
import FilterPrice from '../FilterPrice/FilterPrice';
import "./filter.scss";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { applyFilters, selectDraftFilters, setDraftBrands, setDraftColor, setDraftDressLengths, setDraftPrice, setDraftSize } from '../../store/slices/filtersSlice';

const dataBrands = ["STATE", "COOPER", "BARDOT", "ALFANI", "CECE", "DONNA RICCO"];
const dataSizes = ["W30", "W31", "W32", "W33", "W34", "W35"];
const dataDressLengths = ["short", "knee", "high low"];
const dataColors = [
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
   const dispatch = useAppDispatch();
   const { brands, dressLengths, size, color, price } = useAppSelector(selectDraftFilters)


   const handleSliderChange = (value: number | number[]) => {
      if (Array.isArray(value)) {
         dispatch(setDraftPrice({ from: value[0], to: value[1] }));
      }
   }

   const handleApply = () => {
      dispatch(applyFilters());
   }

   return (
      <>
         <div className="filters">
            <div className='filters__filter'>
               <div className='filters__title'>Brand</div>
               <div className="filters__checkboxes">
                  {dataBrands.map((brand) => (
                     <Checkbox
                        key={brand}
                        label={brand}
                        checked={brands.includes(brand.toLowerCase())}
                        onChange={() => dispatch(setDraftBrands(brand.toLowerCase()))}
                     />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Size (Inches)</div>
               <div className="filters__sizes">
                  {dataSizes.map(dataSize => (
                     <FilterSizes key={dataSize} size={dataSize} isSelected={dataSize === size} onClick={() => dispatch(setDraftSize(dataSize))} />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Dress Length</div>
               <div className="filters__checkboxes">
                  {dataDressLengths.map((length) => (
                     <Checkbox
                        key={length}
                        label={length}
                        checked={dressLengths.includes(length.toLowerCase())}
                        onChange={() => dispatch(setDraftDressLengths(length.toLowerCase()))}
                     />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Color</div>
               <div className="filters__colors">
                  {dataColors.map((dataColor, index) => (
                     <FilterColor
                        key={`${dataColor.colorName}-${index}`}
                        color={dataColor}
                        isSelected={dataColor.colorName === color.colorName}
                        onClick={() => dispatch(setDraftColor(dataColor))}
                     />
                  ))}
               </div>
            </div>
            <div className='filters__filter'>
               <div className='filters__title'>Price Range</div>
               <FilterPrice priceRange={[price.from, price.to]} onChangePrice={handleSliderChange} />
            </div>
            <button onClick={handleApply} className="filters__btn">Apply</button>
         </div>
      </>
   );
};

export default Filters;