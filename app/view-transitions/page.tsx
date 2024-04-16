import { Link } from "next-view-transitions";

export default function Page() {
    return (
        <>
            <h1 className="my-5 text-4xl bold">
                <span className="demo">View Transitions Demo</span>
            </h1>
            <p className="mt-5 hover:underline">
                <Link href="/view-transitions/demo">
                    Back to /view-transitions/demo →
                </Link>
            </p>
        </>
    );
}
