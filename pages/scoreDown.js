import ScoreDown from "@/components/ScoreDown"
import Link from "next/link"
export default function scoreUp() {
    return (
        <>
            <ScoreDown></ScoreDown>
            <Link href="/">
                <p>Home</p>
            </Link>
        </>
    )
}