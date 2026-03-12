"use client"

import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Spacer} from "@nextui-org/react";
import Image from "next/image";

import phuong from "@/assets/qr/phuong.png";
import huyen from "@/assets/qr/huyen.png";

export default function SectionSix() {
    return (
        <div className="w-screen h-screen relative overflow-y-scroll bg-[#F7E7CE] text-gray-800">
            <div className={"flex flex-col text-center items-center w-full justify-center"}>
                <div className={"flex w-full flex-col text-center items-center"}>
                    <h1 className="text-4xl font-bold mt-5">Mừng cưới Online</h1>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <p className=" text-xl md:text-2xl max-w-4xl">
                        Chúng mình rất vui và hạnh phúc khi được chia sẻ niềm vui này cùng với mọi người. Chúng mình vẫn
                        rất mong sẽ nhận được sự chúc phúc từ
                        mọi ngừoi rất mong nhận được sự chúc mừng từ mọi người. Chúng mình sẽ rất cảm kích nếu mọi người
                        có
                        thể chia
                        sẻ niềm vui này cùng chúng mình.</p>
                </div>
            </div>
            <div className={"relative w-full min-h-screen flex flex-col justify-start items-center px-4 py-8 md:py-16"}>
                <div className={"flex flex-col w-full max-w-6xl gap-8 md:flex-row"}>
                    <Card className="w-full max-w-[450px] p-4 md:p-6 bg-white/20 backdrop-blur-md hover:bg-white/30 mx-auto text-gray-800 bg-gray-50">
                        <CardHeader className="flex flex-col items-center pb-6">
                            <h3 className="text-2xl md:text-3xl font-semibold ">
                                Mừng cưới cho Chú rể
                            </h3>
                        </CardHeader>
                        <CardBody className="flex flex-col  items-center gap-6">
                            <div
                                className="relative w-64 h-64  overflow-hidden border-4 border-white bg-pink-100">
                                <Image
                                    src={huyen}
                                    alt="Trọng Nhật"
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-bold   mb-4">
                                    Nguyễn Trọng Nhật
                                </h2>
                                <div className=" text-xl space-y-2 font-bold">
                                    <p>STK: 2224154678</p>
                                </div>
                                <div className=" text-xl space-y-2 font-bold">
                                    <p>Ngân hàng: BIDV</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="w-full max-w-[450px] p-4 md:p-6 bg-white/20 backdrop-blur-md hover:bg-white/30 mx-auto text-gray-800 bg-gray-50 ">
                        <CardHeader className="flex flex-col items-center pb-6">
                            <h3 className="text-2xl md:text-3xl font-semibold  tracking-wider">
                                Mừng cưới cho cô dâu
                            </h3>
                        </CardHeader>
                        <CardBody className="flex flex-col items-center gap-6">
                            <div
                                className="relative w-64 h-64 overflow-hidden border-4 border-white bg-pink-100">
                                <Image
                                    src={phuong}
                                    alt="Thảo Anh"
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-bold font-dancing-script  mb-4">
                                    Trần Thị Thảo Anh
                                </h2>
                                <div className=" text-xl space-y-2 font-bold">
                                    <p>STK: 4520703048</p>
                                </div>
                                <div className=" text-xl space-y-2 font-bold">
                                    <p>Ngân hàng: BIDV</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <Spacer y={28}/>
            </div>
        </div>
    )
}