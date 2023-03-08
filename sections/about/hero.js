import Image from "next/image";
import AboutOne from "../../public/img/about01.png"

function Hero() {
    return (
        <div className="flex max-md:flex-col-reverse xl:pt-[30vh] sm:pt-[20vh] pt-[18vh] pb-[10vh] xl:px-[8vw] xxs:px-[5vw] px-[2vw] space-x-[5vw]">
            <div className="xs:space-y-8 space-y-5 m-auto md:px-0 px-[5vw] md:py-0 xs:py-[5vh] py-[2vh]">
                <div className="xl:-space-y-10 xs:-space-y-8 -space-y-4">
                    <h1 className="font-rasfire xs:text-[8vh] xxs:text-[7vh] text-[5vh] uppercase text-almost-black">It's Me, Hi</h1>
                    <h2 className="font-thasadith xs:text-[2vh] xxs:text-[1.8vh] text-[1.6vh] xxs:tracking-[0.5px] tracking-[0.2px]">welcome to my little corner of the world. make yourself at home.</h2>
                </div>
                <div className="font-thasadith xs:text-[1.8vh] xxs:text-[1.6vh] text-[1.5vh] lg:tracking-[0.5px] tracking-[0.3px] md:w-[40vw] space-y-5">
                    <p>
                        can i interest you in some tea? i have a selection of three: jasmine, peppermint, or oolong. your selection will tell me something about who you are, so choose wisely. anyway, i'm glad you were able to find me! i'm sure that your journey has been long and tiring, so thank you for stopping by my little sanctuary. it may be small, but i'll tell you all about it.
                    </p>
                    <p>
                        it's filled with the coziest of colours-- oaks, lavenders, embers and moss. there are fireflies in my kitchen, tui's singing in the distance and a single cicada i keep in a jar. i ensure that it always smells of fresh linen, with the lingering scent of warm, freshly baked chocolate chip cookies. there really aren't many things inside yet, in terms of furnishings, but it is my dream to turn this small corner of mine into an entire world of my own, filled with all sorts of things-- some of them small, some of them big, but all of them wonderful. in order to do that, i've embarked on an perpetual quest for knowledge to deepen and sharpen my skills-- not just in technology, but in all aspects of life; so i must apologise if you don't find me home some days. i have dragons to slay and damsels to rescue.
                    </p>
                    <p>
                        in the "real" world, i live in the land down under-- the new land of zea-- in a small house, inside a small village under a cloudy mountain with my sister and four cats. i may live here physically, but i live in my head most days. i like art, i like writing, i like books, i like music, i like animals. i guess those are the big things about me. i'm constantly on-the-go, always planning and seeking something new-- but when i fall in love with something, i am relentless. i sit down, i absorb myself in the work and i stick with it obsessively. i never stop until i'm done. i'm good at the things i choose to do. most of it, anyway. or so i'd like to think.                
                    </p>
                    <p>
                        i apologize, weary traveller, if i've exhausted you with all this speak. there are many more things i'd like to say but i'd rather not burden you when you have yet so long to go. i'm sure you'd like to see the rest of this small digital space i call my home! feel free to peruse, and should you have any questions, please don't hesitate to ask. oh, and finish your tea before you leave :)
                    </p>
                    <p>
                        'til we meet again, <br/>
                        mads.
                    </p>
                </div>
            </div>
            <div className="pr-[2vw] sm:pr-0 m-auto">
                <Image src={AboutOne} width={585} height={535} alt="image" className="rounded-3xl max-xl:pr-[2vw]"/>
            </div>
        </div>
    )
}

export default Hero;