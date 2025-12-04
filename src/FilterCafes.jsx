const options = [
  {
    name: "Все",
    code: "All",
  },
  {
    name: "Арбатская",
    code: "Arbat",
  },
  {
    name: "Александровский сад",
    code: "Alexanders Garden",
  },
  {
    name: "Московская",
    code: "Moscow",
  },
  {
    name: "Парк Культуры",
    code: "Culture",
  },
  {
    name: "Театральная",
    code: "Theater",
  },
];

export default function FilterCafes({ station, setStation }) {
  const handleChange = (e) => {
    setStation(e.target.value);
  };

  return (
    <div className="controls">
      <select name="subway" id="subway" value={station} onChange={handleChange}>
        {options.map((o) => (
          <option key={o.code} value={o.code}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
