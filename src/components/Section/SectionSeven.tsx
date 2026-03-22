"use client"

import Image from "next/image";
import {Button, Card, Divider, Input, Link, Spacer, Textarea, ScrollShadow} from "@nextui-org/react";
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
    const [showWishes, setShowWishes] = useState(false);

    // Load wishes từ localStorage khi mount
    useEffect(() => {
        const stored = localStorage.getItem("wedding-wishes");
        if (stored) {
            const parsed = JSON.parse(stored) as Wish[];
            setWishes(parsed);
            if (parsed.length > 0) setShowWishes(true);
        }
    }, []);

    // Sync wishes vào localStorage mỗi khi thay đổi
    useEffect(() => {
        if (wishes.length > 0) {
            localStorage.setItem("wedding-wishes", JSON.stringify(wishes));
        }
    }, [wishes]);

    const handleSubmit = () => {
        if (!name.trim() || !message.trim()) return;

        const newWish: Wish = {
            id: Date.now(),
            name: name.trim(),
            message: message.trim(),
            createdAt: new Date().toLocaleString("vi-VN"),
        };

        setWishes((prev) => [newWish, ...prev]);
        setShowWishes(true);
        setName("");
        setMessage("");
    };

    return (
        <div className="w-screen h-screen relative overflow-y-scroll md:overflow-y-hidden bg-[#FFFFF0]">
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

            <div className="relative w-full min-h-screen flex flex-col md:flex-row justify-start items-start px-4 mt-2">
                {/* Cột trái: Form gửi lời chúc */}
                <div className={`flex flex-col items-center w-full transition-all duration-700 ease-in-out ${
                    showWishes ? "md:w-1/2" : "md:w-full"
                }`}>
                    <Spacer y={24}/>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                        Gửi đến lời chúc tốt đẹp nhất đến cặp đôi
                    </h1>
                    <Spacer y={2}/>

                    <Card
                        className="flex w-full max-w-sm flex-col items-center justify-center bg-pink-200"
                    >
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
                                startContent={<SendIcon size={12}/>}
                                className="bg-pink-500 text-white hover:bg-pink-600"
                                size="sm"
                                onPress={handleSubmit}
                            >
                                Gửi
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Cột phải: Danh sách lời chúc */}
                <div className={`flex flex-col items-center w-full md:w-1/2 transition-all duration-700 ease-in-out origin-right ${
                    showWishes ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none md:w-0"
                }`}>
                    <Spacer y={24} className="hidden md:block"/>
                    <Spacer y={6} className="md:hidden"/>

                    <h2 className="text-2xl font-bold text-white mb-4">Lời chúc từ mọi người</h2>

                    <ScrollShadow className="w-full max-w-sm max-h-[60vh] space-y-3 pr-1">
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
                    </ScrollShadow>
                </div>
            </div>
        </div>
    );
}