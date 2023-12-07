"use server";

import { prisma } from "../db";

export async function addPost(data: FormData) {
    const title = data.get("title")?.valueOf();
    const hashtag = data.get("hashtag")?.valueOf();

    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title");
    }

    if (typeof hashtag !== "string" || hashtag.length === 0) {
        throw new Error("Invalid hashtag");
    }

    // await prisma.post.create(data)
    console.log(data);
}

export async function updateUserNickname(data: FormData) {
    const nickname = data.get("nickname")?.valueOf();

    if (typeof nickname !== "string" || nickname.length === 0) {
        throw new Error("Invalid nickname")
    }

    // await prisma.user.update({ where: {} })
}
