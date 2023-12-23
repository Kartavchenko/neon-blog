import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { insertUsers } from "@/app/db";

export async function POST(req: NextRequest) {
    try {
        const userData = await req.json();
        const createUser = await insertUsers(userData);

        return new NextResponse(JSON.stringify(createUser));
    } catch (error) {
        console.error("Rejected");
    }

    revalidatePath("profile");
    redirect("/create-nickname");
}
