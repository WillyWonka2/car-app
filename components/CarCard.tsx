'use client'
import { CarProps } from "@/types";
import { useState } from "react";

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car}: CarCardProps) => {
    return (
        <div>
            Car
        </div>
    );
};

export default CarCard;