import postgres from "postgres";

const databaseURL = process.env.DATABASE_URL;

type UserData = {
    [key: string]: any;
};

async function db() {
    if (!databaseURL) {
        throw new Error("DATABASE_URL is not defined in environment variables");
    }

    return postgres(databaseURL, { ssl: "require" });
}

export async function insertUsers(data: UserData | null | undefined) {
    const sql = await db();

    if (!data) return;

    return await sql`
        INSERT INTO users (name, neon_nickname, email, access_token)
        VALUES (${data.user.name}, ${data.user.nickname}, ${data.user.email}, ${data.accessToken})
        ON CONFLICT (email) DO NOTHING   
        `;
}
