"use client"

import Image from "next/image";
import {Button, Card, Divider, Input, Link, Spacer, Textarea, ScrollShadow, Spinner} from "@nextui-org/react";
import {SendIcon} from "lucide-react";
import {CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {useState, useEffect} from "react";

interface Wish {
    id: number;
    name: string;
    message: string;
    createdAt: string;
}

export default function SectionSeven() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [sending, setSending] = useState(false);

    // Load lời chúc từ server khi mount
    useEffect(() => {
        fetch("/api/wishes")
            .then((res) => res.json())
            .then((data) => setWishes(data))
            .catch(() => {});
    }, []);

    const handleSubmit = async () => {
        if (!name.trim() || !message.trim() || sending) return;

        setSending(true);
        try {
            const res = await fetch("/api/wishes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), message: message.trim() }),
            });

            if (res.ok) {
                const newWish = await res.json();
                setWishes((prev) => [newWish, ...prev].slice(0, 10));
                setName("");
                setMessage("");
            }
        } catch {
            // silent fail
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="w-screen h-screen relative overflow-y-scroll bg-[#FFFFF0]">
            <div className="absolute inset-0">
                <Image
                    loading={"eager"}
                    src={"/DN209819.JPG"}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    quality={20}
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            <div className="relative w-full flex flex-col items-center px-4 mt-2 pb-8">
                <Spacer y={24}/>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                    Gửi đến lời chúc tốt đẹp nhất đến cặp đôi
                </h1>
                <Spacer y={2}/>

                {/* Form gửi lời chúc */}
                <Card className="flex w-full max-w-sm flex-col items-center justify-center bg-pink-200">
                    <CardHeader>
                        <h4 className="text-2xl font-semibold text-pink-700">Gửi lời chúc</h4>
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <Input
                            className="text-3xl"
                            label="Họ và tên"
                            aria-label="Name"
                            name="name"
                            placeholder="Nhập tên của bạn"
                            value={name}
                            onValueChange={setName}
                        />
                        <Textarea
                            aria-label="Feedback"
                            name="feedback"
                            placeholder="Nhập lời chúc của bạn"
                            value={message}
                            onValueChange={setMessage}
                        />
                    </CardBody>

                    <div className="flex w-full items-center justify-end gap-2 px-1">
                        <p className="text-xs text-pink-600">
                            <Link
                                className="text-pink-700 hover:text-pink-800"
                                href="https://guides.github.com/features/mastering-markdown/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Markdown
                            </Link>
                            &nbsp;được hỗ trợ.
                        </p>
                    </div>

                    <Divider className="my-2 bg-pink-300"/>

                    <CardFooter className="flex w-full items-center justify-end">
                        <Button
                            startContent={sending ? <Spinner size="sm" color="white"/> : <SendIcon size={12}/>}
                            className="bg-pink-500 text-white hover:bg-pink-600"
                            size="sm"
                            isDisabled={sending}
                            onPress={handleSubmit}
                        >
                            {sending ? "Đang gửi..." : "Gửi"}
                        </Button>
                    </CardFooter>
                </Card>

                {/* Danh sách lời chúc — ngay bên dưới form */}
                {wishes.length > 0 && (
                    <div className="w-full max-w-sm mt-6">
                        <h2 className="text-xl font-bold text-white mb-3 text-center">
                            Lời chúc từ mọi người ({wishes.length})
                        </h2>

                        <div className="space-y-3">
                            {wishes.map((wish) => (
                                <Card key={wish.id} className="bg-pink-100/90 backdrop-blur-sm">
                                    <CardBody className="py-3 px-4">
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="text-sm font-bold text-pink-800">{wish.name}</p>
                                            <p className="text-[10px] text-pink-400">{wish.createdAt}</p>
                                        </div>
                                        <p className="text-sm text-pink-700 whitespace-pre-wrap">{wish.message}</p>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}