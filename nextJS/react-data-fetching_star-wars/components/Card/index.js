import { DescriptionList, StyledCard } from "./Card.styled";

export default function Card({ id, name, height, eyeColor, birthYear, films }) {
  return (
    <StyledCard>
      <h1>Name: {name}</h1>
      <DescriptionList>
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Height:</dt>
        <dd>{height}</dd>
        <dt>Eye Color:</dt>
        <dd>{eyeColor}</dd>
        <dt>Birth Year:</dt>
        <dd>{birthYear}</dd>
        <dt>Films:</dt>
        <dd>{films}</dd>
      </DescriptionList>
    </StyledCard>
  );
}
