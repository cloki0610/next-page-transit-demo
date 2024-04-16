import Link from "next/link";

export default function Page() {
    return (
        <main className="h-screen w-full flex justify-center items-center flex-col">
            <h1 className="my-5 text-4xl bold">This is the Demo</h1>
            <p>OK you just saw the demo.</p>
            <p>
                <Link href="/framer-motion" className="mt-5 hover:underline">
                    Open homepage →
                </Link>
            </p>
        </main>
    );
}
