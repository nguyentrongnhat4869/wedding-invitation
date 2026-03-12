import Slider from "@/components/Slider";
import SectionOne from "@/components/Section/SectionOne";
import SectionTwo from "@/components/Section/SectionTwo";
import SectionThree from "@/components/Section/SectionThree";
import SectionFour from "@/components/Section/SectionFour";
import SpotifyButton from "@/components/SpotifyButton";
import SectionFive from "@/components/Section/SectionFive";
import SectionSeven from "@/components/Section/SectionSeven";

export default function Home() {
    return (
        <main className="">
            <Slider>
                <SectionOne/>
                <SectionTwo/>
                <SectionFour/>
                <SectionFive/>
                <SectionSeven/>
            </Slider>

            {/* Sound button*/}
            <div className={"fixed md:bottom-6 bottom-12 left-4 md:left-8"}>
                <SpotifyButton songTitle={"Die with a Smile"} artist={"Lady Gaga & Bruno Mars."}
                               albumArt={"/song.jpeg"} flacSrc={"/die_with_a_smile.mp3"}/>
            </div>
        </main>
    );
}
