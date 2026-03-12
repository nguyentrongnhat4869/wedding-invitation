"use client"

import Image from "next/image";
import {Button, Card, Divider, Input, Link, Spacer, Textarea} from "@nextui-org/react";
import {SendIcon} from "lucide-react";
import {CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {motion} from "motion/react";

export default function SectionSeven() {
    return (
        <div className="w-screen h-screen relative overflow-y-scroll md:overflow-y-hidden bg-[#FFFFF0]">
            <div className="absolute inset-0">
                <Image
                    loading={"eager"}
                    src={"/DN209819.JPG"}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    quality={20} // Adjust quality as needed
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div className="relative w-full min-h-screen flex flex-col justify-start items-center px-4  mt-2">
                <Spacer y={24}/>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Gửi đến lời chúc tốt đẹp nhất đến cặp
                    đôi</h1>
                <Spacer y={2}/>

                <Card
                    className="flex w-full max-w-sm flex-col items-center justify-center bg-pink-200"
                    onSubmit={(e) => e.preventDefault()}
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
                        />
                        <Textarea
                            className=""
                            aria-label="Feedback"
                            name="feedback"
                            placeholder="Nhập lời chúc của bạn"
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
                        <Button startContent={<SendIcon size={12}/>}
                                className="bg-pink-500 text-white hover:bg-pink-600" size="sm" type="submit">
                            Gửi
                        </Button>
                    </CardFooter>
                </Card>
        </div>
</div>
)
}