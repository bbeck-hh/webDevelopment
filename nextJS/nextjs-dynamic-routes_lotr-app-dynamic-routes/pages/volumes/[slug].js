import { volumes } from "@/lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function LorPage() {
    const router = useRouter();
    const { slug } = router.query;

    // Finde das aktuelle Volume basierend auf dem Slug
    const currentVolume = volumes.find((volume) => volume.slug === slug);

    //console.log(`router hat : ${JSON.stringify(router)}`);

    // Ladezustand oder Fehlerbehandlung -> Warten, bis Query bereit ist
    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    if (!currentVolume) {
        return (
            <div>
                <Head>
                    <title>Volume nicht gefunden</title>
                </Head>
                <p>Kein Volume mit dem Slug "{slug}" gefunden.</p>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>{currentVolume.title}</title> {/* Benutzerfreundlicher Titel */}
                <meta name="description" content={currentVolume.description} />
            </Head>
            <h1>{currentVolume.title}</h1>
            <p>Slug: {slug}</p>
            <p>{currentVolume.description}</p>
        </div>
    );
}