import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const KV_KEY = "wedding-wishes";
const MAX_WISHES = 10;

export async function GET() {
    try {
        const wishes = await kv.get<any[]>(KV_KEY) ?? [];
        return NextResponse.json(wishes);
    } catch {
        return NextResponse.json([]);
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name, message } = body;

    if (!name?.trim() || !message?.trim()) {
        return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
    }

    try {
        const wishes = await kv.get<any[]>(KV_KEY) ?? [];

        const newWish = {
            id: Date.now(),
            name: name.trim(),
            message: message.trim(),
            createdAt: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
        };

        wishes.unshift(newWish);
        if (wishes.length > MAX_WISHES) wishes.length = MAX_WISHES;

        await kv.set(KV_KEY, wishes);

        return NextResponse.json(newWish, { status: 201 });
    } catch (e) {
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}