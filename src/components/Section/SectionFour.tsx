"use client"

import {FocusCards} from "@/components/ui/focus-cards";
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

export default function SectionFour() {
    const cards = [
        {
            title: "Ảnh cưới 1",
            src: "/album_Nhat_TA/SN_05802.JPG",
        },
        {
            title: "Ảnh cưới 2",
            src: "/album_Nhat_TA/SN_05823.JPG",
        },
        {
            title: "Ảnh cưới 3",
            src: "/album_Nhat_TA/SN_05832.JPG",
        },
        {
            title: "Ảnh cưới 4",
            src: "/album_Nhat_TA/SN_06000.JPG",
        },
        {
            title: "Ảnh cưới 5",
            src: "/album_Nhat_TA/SN_06026.JPG",
        },
        {
            title: "Ảnh cưới 6",
            src: "/album_Nhat_TA/SN_06097.JPG",
        },
        {
            title: "Ảnh cưới 7",
            src: "/album_Nhat_TA/SN_06199.JPG",
        },
        {
            title: "Ảnh cưới 8",
            src: "/album_Nhat_TA/SN_06336.JPG",
        }, {
            title: "Ảnh cưới 9",
            src: "/album_Nhat_TA/SN_06321.JPG",
        },
        {
            title: "Ảnh cưới 10",
            src: "/album_Nhat_TA/SN_06509.JPG",
        },
        {
            title: "Ảnh cưới 11",
            src: "/album_Nhat_TA/DN209793.JPG",
        },
        {
            title: "Ảnh cưới 12",
            src: "/album_Nhat_TA/SN_06710.JPG",
        },
        {
            title: "Ảnh cưới 13",
            src: "/album_Nhat_TA/SN_06769.JPG",
        }, {
            title: "Ảnh cưới 14",
            src: "/album_Nhat_TA/SN_07114.JPG",
        }, {
            title: "Ảnh cưới 15",
            src: "/album_Nhat_TA/SN_07174.JPG",
        }, {
            title: "Ảnh cưới 16",
            src: "/album_Nhat_TA/SN_07027.JPG",
        },{
            title: "Ảnh cưới 17",
            src: "/album_Nhat_TA/SN_06906.JPG",
        },{
            title: "Ảnh cưới 18",
            src: "/album_Nhat_TA/SN_06977.JPG",
        },
        
    ];

    return (
        <div className={"flex h-screen flex-col items-center overflow-y-scroll bg-[#FFFFF0]"}>
            <div className={"flex flex-col text-4xl font-bold mt-20 mb-10 text-black"}>
                <p>Album hình cưới</p>

            </div>
            <FocusCards cards={cards}/>
        </div>
    )
}