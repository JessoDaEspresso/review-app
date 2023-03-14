import { useAtom } from "jotai";
import { powerLevelAtom } from "@/powerLevel";
import LevelUp from "@/components/levelUp";
import Link from "next/link";
export default function levelup() {
    const [powerLevel] = useAtom(powerLevelAtom);
    return (
        <>
            <h1>Power Level: {powerLevel}</h1>
            <LevelUp />
            <Link href="/">
                <p>Home</p>
            </Link>
        </>
    );

}