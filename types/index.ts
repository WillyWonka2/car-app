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
    manufacture: string
    setManufacture: Dispatch<SetStateAction<string>>
}