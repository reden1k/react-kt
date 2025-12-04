export default function CafeCard({img, name, decs, address, subwayCode, workTime}) {
  return (
    <li className="card">
      <img src={img ?? "https://via.placeholder.com/150"} alt="" />
      <h2>{name}</h2>
      <p>{decs}</p>
      <p>{address}</p>
      <p>Subway: {subwayCode}</p>
      <p>{workTime}</p>
    </li>
  );
}
