import { ViewTransitions } from "next-view-transitions";

export default function ViewTransitionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <main className="h-screen w-full flex justify-center items-center flex-col">
                {children}
            </main>
        </ViewTransitions>
    );
}
