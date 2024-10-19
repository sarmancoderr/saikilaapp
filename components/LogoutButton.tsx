"use client"

import { signOut } from "next-auth/react";
import Button from "./lib/Button";
import { useRouter } from "next/navigation";

export default function LogoutButton () {
    const router = useRouter()
    return (
        <Button variant="danger" onClick={async () => {
            await signOut({redirect: false})
            router.refresh()
        }}>
            Cerrar sesión
        </Button>
    )
}