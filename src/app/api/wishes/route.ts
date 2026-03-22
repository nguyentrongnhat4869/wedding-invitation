import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "wishes.json");
const MAX_WISHES = 10;

function ensureFile() {
    const dir = path.dirname(FILE_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, "[]");
}

function readWishes() {
    ensureFile();
    const raw = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(raw);
}

function writeWishes(wishes: any[]) {
    ensureFile();
    fs.writeFileSync(FILE_PATH, JSON.stringify(wishes, null, 2));
}

export async function GET() {
    const wishes = readWishes();
    return NextResponse.json(wishes);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name, message } = body;

    if (!name?.trim() || !message?.trim()) {
        return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
    }

    const wishes = readWishes();

    const newWish = {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    };

    // Thêm vào đầu, giữ tối đa 10 lời chúc
    wishes.unshift(newWish);
    if (wishes.length > MAX_WISHES) wishes.length = MAX_WISHES;

    writeWishes(wishes);
    return NextResponse.json(newWish, { status: 201 });
}