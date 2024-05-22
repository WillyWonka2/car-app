import { API_KEY } from "@/secure.env";
const CARS_URL = 'https://api.api-ninjas.com/v1/cars';

export async function fetchCars(limit=50, fuel_type='gas') {
    const headers = {
        'X-Api-Key': API_KEY
    }
    const response = await fetch (`${CARS_URL}?limit=${limit}&fuel_type=${fuel_type}`, {headers:headers})
    
    const result = await response.json();

    return result
}