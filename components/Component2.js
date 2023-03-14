// Prop Drilling Example
export default function Component2({ count, setCount }) {
    return (
        <>
            <h1>Component 2 - Decrement</h1>
            <p>Count: {count}</p>
            <button class="btn btn-primary" onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}