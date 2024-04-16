import { Link } from "next-view-transitions";

export default function Page() {
    return (
        <>
            <h1 className="my-5 text-4xl bold">
                This is the <span className="demo">View Transitions Demo</span>
            </h1>
            <p>OK you just saw the demo.</p>
            <p className="mt-5 hover:underline">
                <Link href="/view-transitions">Open homepage →</Link>
            </p>
        </>
    );
}
