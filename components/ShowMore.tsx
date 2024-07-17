"use client"

import { ShowMoreProps } from "@/types";
import {useRouter} from "next/navigation"
import { CustomButton } from "./index";

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()

    const handleNavigation = ()=> {

    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton title="Show More" btnType="button" containerStyles="bg-primary-blue"/>
            )}
        </div>
    );
};

export default ShowMore;
