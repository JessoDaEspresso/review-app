// Prop Drilling Example
export default function Component1({ count, setCount }) {
    return (
        <>
            <h1>Component 1 - Increment</h1>
            <p>Count: {count}</p>
            <button class="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}