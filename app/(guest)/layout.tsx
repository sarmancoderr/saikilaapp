import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Layout({children }) {
    const session = await getServerSession()

    if (session) {
        return redirect('/customers')
    }

    return children
}