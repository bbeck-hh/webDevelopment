import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lampen, lampenOnCount, turnAllLampenOn, turnAllLampenOff, }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lampen={lampen}
        turnAllLampenOff={turnAllLampenOff}
        turnAllLampenOn={turnAllLampenOn}
        lampenOnCount={LampenOnCount}
      />
    </>
  );
}
