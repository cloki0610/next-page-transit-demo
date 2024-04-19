"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Potential Solution from https://github.com/vercel/next.js/issues/49279#issuecomment-2041305816
export function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;
    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                {/* <FrozenRouter>{children}</FrozenRouter> */}
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
