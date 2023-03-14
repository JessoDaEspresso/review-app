import Link from "next/link";
import Component2 from "@/components/Component2"

export default function Decrement({ count, setCount }) {
    return (
        <>
            <Component2 count={count} setCount={setCount}></Component2>
            <Link href="/">
                <p>Home</p>
            </Link>
        </>
    );
}