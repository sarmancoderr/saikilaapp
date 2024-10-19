"use client"

import Alert from "@/components/lib/Alert";
import Button from "@/components/lib/Button";
import FlexStack from "@/components/lib/FlexStack";
import Input from "@/components/lib/forms/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter()
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
        <div>
            <h2>Inicio de sesión</h2>
            <form method="post" onSubmit={async (e) => {
                e.preventDefault()
                setMessage('')
                setDisabled(true)
                console.log(e.target)
                const fd = new FormData(e.target as HTMLFormElement)
                console.log(fd.get('email'))
                const data = Object.fromEntries(fd)
                console.log(data)
                await new Promise((res) => setTimeout(res, 500))
                const result = await signIn('credentials', {
                    redirect: false,
                    ...data
                })
                if (result!.ok) {
                    router.refresh()
                    return
                }
                console.log(result)
                setDisabled(false)
                setMessage(result!.error!)
            }} >
                <FlexStack>
                    {message && <Alert variant="danger">{message}</Alert>}
                    <Input disabled={disabled} autoFocus name="email" label="Correo electrónico" help="No compartiremos con nadie tu correo" id="email" />
                    <Input disabled={disabled} type="password" name="password" label="Contraseña" id="password" />
                    <div className="align-self-end">
                        <Button disabled={disabled} variant="primary" type="submit">Iniciar sesión</Button>
                    </div>
                </FlexStack>
            </form>

        </div>
    )
}