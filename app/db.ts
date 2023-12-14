import postgres from "postgres";

const databaseURL = process.env.DATABASE_URL;

type UserData = {
    [key: string]: any;
};

async function db() {
    if (!databaseURL) {
        throw new Error("DATABASE_URL is not defined in environment variables");
    }

    const sql = postgres(databaseURL, { ssl: "require" });
    return sql;
}

export async function insertUsers(data: UserData | null | undefined) {
    const sql = await db();

    if (!data) return;

    const response = await sql`
    INSERT INTO users (name, neon_nickname, email, access_token)
    VALUES (${data.user.name}, ${data.user.nickname}, ${data.user.email}, ${data.accessToken})
    ON CONFLICT (email) DO NOTHING   
    `;

    return response;
}
