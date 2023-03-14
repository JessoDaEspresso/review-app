import Link from "next/link";
import Component1 from "@/components/Component1"

export default function Increment({ count, setCount }) {
    return (
        <>
            <Component1 count={count} setCount={setCount}></Component1>
            <Link href="/">
                <p>Home</p>
            </Link>
        </>
    );
}