"use client"
import StateProvider from "@/hooks/useDocumentV1"
import CustomerProfile from "./customerProfile";
import { useMemo } from "react";


const ProfileDocument = () => {
    const {
        customer
    } = StateProvider();

    const CustomerProfileProps = useMemo(() => {
        return {
            customer
        };
    },[customer])

    return (
        <CustomerProfile {...CustomerProfileProps} />
    )
};

export default ProfileDocument;
