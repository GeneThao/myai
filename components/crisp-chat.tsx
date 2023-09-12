"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("a763ac99-4a21-48b8-be77-673f92ef04ca");
    }, []);

    return null;
}