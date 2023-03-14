import ScoreUp from "@/components/ScoreUp"
import Link from "next/link"
export default function scoreUp() {
    return (
        <>
            <ScoreUp></ScoreUp>
            <Link href="/">
                <p>Home</p>
            </Link>
        </>
    )
}