'use client';

// For Hydration Error
// Explanation at 1:01:00

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";


export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal/>
        </>
    )
}