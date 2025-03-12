import Main from "@/components/Main/Main";
import { introduction, volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";

export default function Volumes() {
  const router = useRouter();
  //console.log(router);
  const { slug } = router.query;
  //console.log(router.slug);

  function handelRandomBook() {
    let randomBook = Math.floor(Math.random() * volumes.length);
    // Verlinke zum zufälligen Buch. Beachte den Slug von wo er hinterlegt ist.
    router.push(`/volumes/${volumes[randomBook].slug}`);
  }

  return (
    <>
      <Main>
        <h1>The Lord of the Rings</h1>
        <p>{introduction}</p>
        <ul>
          {volumes.map(({ slug, title }) => (
            <li key={uuid()}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handelRandomBook} style={{ marginTop: "1rem" }}>
          Random Book
        </button>
      </Main>
    </>
  );
}
