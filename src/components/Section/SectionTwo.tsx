import CoupleCards from "@/components/couple-cards";
import Image from 'next/image';

import hero from '@/assets/SN_07172.jpg';
import {Spacer} from "@nextui-org/react";

export default function SectionTwo() {
    return (
        <div className="w-screen h-screen relative overflow-y-scroll md:overflow-y-hidden bg-black">
            <div className="absolute inset-0">
                <Image
                    loading={"eager"}
                    src={hero}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    quality={20} // Adjust quality as needed
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div className="relative w-full min-h-screen flex flex-col justify-start items-center px-4  mt-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Chú rể & Cô dâu</h1>
                <CoupleCards/>
            </div>
            <div className={"h-24 md:hidden"}/>
        </div>
    )
}