import "./Card.css";

export default function Card({ id, name, color }) {

  return (
    <p key={id} className="card" style={{ backgroundColor: color }}>{name}{color}</p>
  )
}
