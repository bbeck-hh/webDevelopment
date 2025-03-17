import Lights from "../components/Lights";
import Link from "../components/Link";

export default function Rooms({ onToggleLampe, lampen }) {

  return (
    <>


      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights lampen={lampen} onToggleLampe={onToggleLampe} />
    </>
  );
}
