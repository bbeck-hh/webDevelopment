import { introduction } from "@/lib/data";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <div>
        <p>{introduction}</p>
        <Link href="/volumes">
          View volumes</Link>
      </div>
    </>
  )
};

export default HomePage;