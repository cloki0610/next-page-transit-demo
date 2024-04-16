import Link from "next/link";

export default function Page() {
    return (
        <main className="h-screen w-full flex justify-center items-center flex-col">
            <h1 className="my-5 text-4xl bold">Framer Motion Demo</h1>
            <p>
                <Link
                    href="/framer-motion/demo"
                    className="mt-5 hover:underline"
                >
                    Go to /demo →
                </Link>
            </p>
        </main>
    );
}
