import Button from "./Button";
import "./Card.css";
import Tag from "./Tag";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role, index) => {
          // Hier wird das Tag-Element gerendert und tag={role} als prop übergeben, welche wir in der Tag.jsx dann nutzen!
          return <Tag tag={role} key={index} />;
        }
        )}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
