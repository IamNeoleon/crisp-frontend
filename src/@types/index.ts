import { TColor } from "../components/Filters/Filters";
import { TPriceRange } from "../store/slices/filtersSlice";

type DressSize = {
    size: string;
};

type DressImage = {
    url: string;
    isMain: boolean;
};

type DressVariant = {
    id: number;
    colorName: string;
    colorCode: string;
    sizes: string[];
    price: number;
    images: DressImage[];
};

export type IProduct = {
    id: number;
    basePrice: number
    name: string;
    description: string;
    brand: string;
    dressLength: string;
    available_sizes: DressSize[];
    variants: DressVariant[];
};

export interface TFilters {
    brands: string[];
    dressLengths: string[];
    size: string;
    color: TColor;
    price: TPriceRange;
    sort: string;
}
