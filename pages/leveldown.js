import { useAtom } from "jotai";
import { powerLevelAtom } from "@/powerLevel";
import LevelDown from "@/components/levelDown";
import Link from "next/link";
export default function leveldown() {
    const [powerLevel] = useAtom(powerLevelAtom);
    return (
        <>
            <h1>Power Level: {powerLevel}</h1>
            <LevelDown />
            <Link href="/">
                <p>Home</p>
            </Link>
        </>
    );

}