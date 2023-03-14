import { useContext } from "react"
import { ScoreContext, SetScoreContext } from "../pages/_app"

export default function ScoreDown() {
    const score = useContext(ScoreContext)
    const setScore = useContext(SetScoreContext)
    return (
        <>
            <h1>Score Down</h1>
            <p>Score: {score}</p>
            <button class="btn btn-primary" onClick={() => setScore(score - 1)}>Score Down</button>
        </>
    )
}