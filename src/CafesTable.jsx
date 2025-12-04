import { useEffect, useState } from "react";
import axios from "axios";
import FilterCafes from "./FilterCafes";
import CafeCard from "./CafeCard";

export default function CafesTable() {
  const [cafes, setCafes] = useState(null);
  const [station, setStation] = useState("All");

  useEffect(() => {
    const fetchCafe = async () => {
      try {
        const { data } = await axios.get("/cafes");
        console.log(data);
        setCafes(data.cafes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCafe();
  }, []);

  const filteredCafes = cafes
    ? station === "All"
      ? cafes
      : cafes.filter((cafe) => cafe.subwayCode === station)
    : [];

  if (!cafes) return;
  return (
    <div className="cafesTable">
      <FilterCafes station={station} setStation={setStation} />
      <ul className="cardsList">
        {filteredCafes.map((c) => (
          <CafeCard
            key={c.id}
            img={c.img}
            name={c.name}
            decs={c.decs}
            address={c.address}
            subwayCode={c.subwayCode}
            workTime={c.workTime}
          />
        ))}
      </ul>
    </div>
  );
}
