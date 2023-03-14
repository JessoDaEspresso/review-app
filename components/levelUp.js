import { useAtom } from "jotai";
import { powerLevelAtom } from "@/powerLevel";
export default function LevelUp() {
    const [powerLevel, setPowerLevel] = useAtom(powerLevelAtom);
    return (
        <>
            <button class="btn btn-primary" onClick={() => setPowerLevel(powerLevel + 1000)}>Level Up</button>
        </>
    );

}
