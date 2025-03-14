import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { createGlobalStyle, css } from "styled-components";
import { volumes } from "../../lib/data";
import ArrowLeft from "../../public/images/arrow-left.svg";
import ArrowRight from "../../public/images/arrow-right.svg";
import ChevronLeft from "../../public/images/chevron-left.svg";

// Ändere die Hintergrundfarbe des body-Tags auf die in der data.js-Datei definierte Farbe volume.color
// Nutze props.$bgColor
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.$bgColor || "white"};
  }
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];


  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <Wrapper>
        {/* Setze props $bgColor={color} und übergebe color(createGlobalStyle)  */}
        <GlobalStyle $bgColor={color} />
        <BackLink href="/volumes">
          <ChevronLeft /> All Volumes
        </BackLink>
        <Title>{title}</Title>
        <Content>{description}</Content>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <SmallHeading>{ordinal}</SmallHeading>
              <BookTitle>{title}</BookTitle>
            </li>
          ))}
        </BookList>
        <Book
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
        <Navigation>
          {previousVolume ? (
            <NavLink href={`/volumes/${previousVolume.slug}`} $position="left">
              <ArrowLeft />
              <div>
                <LinkHeading>Previous Volume</LinkHeading>{" "}
                <LinkTitle>{previousVolume.title}</LinkTitle>
              </div>
            </NavLink>
          ) : null}
          {nextVolume ? (
            <NavLink href={`/volumes/${nextVolume.slug}`} $position="right">
              <div>
                <LinkHeading>Next Volume</LinkHeading>
                <LinkTitle>{nextVolume.title}</LinkTitle>
              </div>
              <ArrowRight />
            </NavLink>
          ) : null}
        </Navigation>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Content = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const LinkedImage = styled(Link)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    &:before {
      content: "Nice";
      border: 1px solid blue;
      background-color: pink;
      position: relative;
      top: -100px;
      margin-right: 10px;    }
  }

  > img {
    border: 12px solid red;
    width: 140px;
  }
`;

const BackLink = styled(Link)`
  color: unset;
  text-decoration: none;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const BookList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;
const Navigation = styled.nav`
  padding-block: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  grid-template-areas: "prev next";
  align-items: start;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $position }) =>
    $position === "left" &&
    css`
      grid-area: prev;
      justify-self: start;
      text-align: start;
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      grid-area: next;
      justify-self: end;
      text-align: end;
    `};
`;

const LinkHeading = styled.h3`
  font: var(--font-caption--italic);
  margin: 0;
`;

const LinkTitle = styled.p`
  font: var(--font-caption);
  font-weight: bold;
  margin: 0;
`;

const SmallHeading = styled.p`
  font: var(--font-caption--italic);
  margin: 0;
  margin-bottom: 8px;
`;

const BookTitle = styled.strong`
  font: var(--font-title);
`;

const Book = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;