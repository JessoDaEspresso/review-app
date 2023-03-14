import Link from "next/link";
import { useContext } from "react"
import { ScoreContext, SetScoreContext } from "../pages/_app"
import { useAtom } from "jotai";
import { powerLevelAtom } from "@/powerLevel";

export default function Home({ count, setCount }) {
  const score = useContext(ScoreContext)
  const setScore = useContext(SetScoreContext)
  const [powerLevel, setPowerLevel] = useAtom(powerLevelAtom);
  return (
    <>
      <hr />
      <h1>Prop Drilling with Count Shared State</h1>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>Count: {count}</p>

      <Link href="/increment">
        <p>Increment</p>
      </Link>

      <Link href="/decrement">
        <p>Decrement</p>
      </Link>


      <hr />
      <h1>Context Example with Score Shared State</h1>

      <button onClick={() => setScore(0)}>Reset</button>
      <p>Score: {score}</p>

      <Link href="/scoreUp">
        <p>Score Up</p>
      </Link>
      <Link href="/scoreDown">
        <p>Score Down</p>
      </Link>
      <hr />
      <h1>JOTAAAAAAAAAAAAIIIIIIIIIIIIII</h1>
      <button onClick={() => setPowerLevel(0)}>Reset</button>
      <p>Power Level: {powerLevel}</p>
      <Link href="/levelup">
        <p>Level Up</p>
      </Link>
      <Link href="/leveldown">
        <p>Level Down</p>
      </Link>
      <hr />
    </>
  )
}
