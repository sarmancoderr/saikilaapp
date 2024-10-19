import { dbPrisma } from "@/utils/sql";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    const search = req.nextUrl.searchParams.get('search')
    const query = search!.replace(/\s/g, '%')
    const results = await dbPrisma.$queryRawUnsafe(`
        SELECT * FROM \`customer\` c
        JOIN address a ON c.address_id = a.address_id
        WHERE CONCAT(first_name, ' ', last_name, ' ', email, ' ', address, ' ', district) LIKE \'%${query}%\'
        LIMIT 20
    `)
    console.log(results)
    return NextResponse.json(results)
}