import { API_KEY } from "@/secure.env";
import { CarProps, FilterProps } from "@/types";
const CARS_URL = 'https://api.api-ninjas.com/v1/cars';

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year, limit, fuel, model} = filters
    const headers = {
        'X-Api-Key': API_KEY
    }
    const response = await fetch (`${CARS_URL}?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {headers:headers})
    
    const result = await response.json();

    return result
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


  export const generateCarImageUrl = (car: CarProps, angle?:string) => {

  }