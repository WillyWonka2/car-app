"use client";
import { CustomFilter, SearchBar, CarCard, Hero, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2024,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {error ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Error</h2>
          </div>
        ) : !loading ? (
          <section>
            {allCars.length === 0 ? (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Ooops... No result!
                </h2>
              </div>
            ) : (
              <>
                <div className="home__cars-wrapper">
                  {allCars?.map((car, i) => (
                    <CarCard car={car} key={i} />
                  ))}
                </div>
                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
                />
              </>
            )}
          </section>
        ) : (
          <div className="mt-16 w-full flex-center">
            <Image
              src="/loader.svg"
              alt="loader"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </main>
  );
}
