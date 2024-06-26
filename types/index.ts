import { MouseEventHandler } from "react";
import { SetStateAction, Dispatch } from "react";
export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
}

export interface CustomFilterProps {
    title: string
}

export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacture: string) => void
}

export interface CarProps {
    "city_mpg": number,
    "class": string,
    "combination_mpg": number,
    "cylinders": number,
    "displacement": number,
    "drive": string,
    "fuel_type": string,
    "highway_mpg": number,
    "make": string,
    "model": string,
    "transmission": string,
    "year": number
}
