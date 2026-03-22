"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Card, Divider, Input, Link, Spacer, Textarea } from "@nextui-org/react";
import { SendIcon } from "lucide-react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionSeven() {
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [wishes, setWishes] = useState([]);

    // 1. Lấy lời chúc từ localStorage khi vừa load trang
    useEffect(() => {
        const saved = localStorage.getItem("wedding_wishes");
        if (saved) {
            setWishes(JSON.parse(saved));
        }
    }, []);

    // 2. Hàm xử lý khi bấm nút Gửi
    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (!name.trim() || !feedback.trim()) return;

        const newWish = {
            id: Date.now(),
            name: name,
            content: feedback,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const updatedWishes = [newWish, ...wishes].slice(0, 10); // Lưu tối đa 10 lời chúc gần nhất
        setWishes(updatedWishes);
        localStorage.setItem("wedding_wishes", JSON.stringify(updatedWishes));

        // Reset form
        setName("");
        setFeedback("");
    };

    return (
        <div className="w-screen h-screen relative overflow-y-auto bg-[#FFFFF0]">
            {/* Background Image */}
            <div className="fixed inset-0">
                <Image
                    loading={"eager"}
                    src={"/DN209819.JPG"}
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    quality={20}
                />
            </div>
            
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-10">
                <Spacer y={24} />

                <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center px-2">
                    Gửi đến lời chúc tốt đẹp nhất đến cặp đôi
                </h1>

                {/* Container 2 cột: Trái là Form, Phải là Lời chúc */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-start">
                    
                    {/* BÊN TRÁI: FORM GỬI LỜI CHÚC */}
                    <div className="flex justify-center lg:justify-end w-full">
                        <Card
                            as="form"
                            onSubmit={handleSubmit}
                            className="w-full max-w-sm bg-pink-100 shadow-2xl"
                        >
                            <CardHeader className="justify-center pb-0 pt-6">
                                <h4 className="text-2xl font-bold text-pink-700">Gửi lời chúc</h4>
                            </CardHeader>
                            <CardBody className="space-y-4 px-6">
                                <Input
                                    value={name}
                                    onValueChange={setName}
                                    label="Họ và tên"
                                    variant="bordered"
                                    placeholder="Nhập tên của bạn"
                                    classNames={{
                                        input: "text-lg",
                                        label: "text-pink-600"
                                    }}
                                />
                                <Textarea
                                    value={feedback}
                                    onValueChange={setFeedback}
                                    label="Lời chúc"
                                    variant="bordered"
                                    placeholder="Nhập lời chúc của bạn"
                                    classNames={{
                                        input: "text-md",
                                        label: "text-pink-600"
                                    }}
                                />
                                <div className="flex w-full items-center justify-end gap-2">
                                    <p className="text-[10px] text-pink-600 opacity-70">
                                        <Link
                                            className="text-[10px] text-pink-700 underline"
                                            href="https://guides.github.com/features/mastering-markdown/"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            Markdown
                                        </Link>
                                        &nbsp;được hỗ trợ.
                                    </p>
                                </div>
                            </CardBody>

                            <Divider className="bg-pink-300" />

                            <CardFooter className="flex justify-end p-4">
                                <Button 
                                    onPress={handleSubmit}
                                    startContent={<SendIcon size={16} />}
                                    className="bg-pink-500 text-white font-bold px-8" 
                                    radius="full"
                                >
                                    Gửi ngay
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* BÊN PHẢI: DANH SÁCH LỜI CHÚC */}
                    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md">
                        <h3 className="text-white text-xl font-semibold border-l-4 border-pink-500 pl-3 mb-2">
                            Lời chúc mới nhất
                        </h3>
                        
                        <div className="flex flex-col gap-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                            <AnimatePresence mode="popLayout">
                                {wishes.length === 0 ? (
                                    <p className="text-gray-400 italic">Chưa có lời chúc nào, hãy viết gì đó nhé!</p>
                                ) : (
                                    wishes.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl shadow-lg"
                                        >
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-pink-400 font-bold text-sm">@{item.name}</span>
                                                <span className="text-[10px] text-gray-400">{item.time}</span>
                                            </div>
                                            <p className="text-white text-sm leading-relaxed">
                                                {item.content}
                                            </p>
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}