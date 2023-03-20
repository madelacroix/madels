import Image from "next/image";
import AboutTwo from "../../public/img/about02.png"

function Pitch() {
    return (
        <div className="bg-[#78736E] xs:py-[12vh] py-[10vh] xl:px-[10vw] px-[6.5vw]">
            <div>
                <div className="md:grid md:grid-cols-3 flex flex-col-reverse">
                    <div className="m-auto md:block lm:flex">
                        <div className="bg-black text-off-white font-thasadith xs:text-[1.8vh] text-[1.6vh] sm:pl-[5vw] sm:pr-[10vw] px-[8vw] lg:py-[9vh] xxs:py-[6vh] py-[5vh] rounded-3xl lm:mb-0 mb-[5vh]">
                            <div className="md:w-[30vw] xs:space-y-8 space-y-5 tracking-[0.5px]">
                                <p>
                                    I like to think working with me is easy. My collaboration style is very heavy on listening, and my work ethic is something that I'm proud of. I definitely have a self-directed drive for things to be done-- done right and done beautifully at that. I'm great at searching for and finding patterns in everything I see, and when I can afford to do so, I enjoy refining things right down to the atom. Collaboration is something that inspires me a lot, and I love learning from others around me.
                                </p>
                                <p>
                                    Throughout my secular lifetime, I've had experience in research, call centers, sales, and customer service, but none of them has a grip on me as much as tech does. My favourite frameworks that I use almost exclusively are Next.js and TailwindCSS, but I'm also proficient in React as well as Flutter. There are many other languages that I've dipped my toes in, so if you'd like to know the full extent of my skills, you're more than welcome to sneak a peek at my CV on the bottom of the page :)
                                </p>
                                <p>
                                    In my experiences, I've learned many things. However, I hold strongly to three particular values and use them as a guiding light in all areas of my work, because I believe that they are the keys to push myself and those around me to success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image src={AboutTwo} width={305} height={420} alt="image" className="rounded-3xl ml-[12vw] mt-[35vh] md:block hidden" />
                    <div className="text-off-white md:text-right md:pr-0 sm:pr-[25vw] xs:pr-[15vw] md:pb-0 pb-[5vh] space-y-2 relative">
                        <h2 className="font-thasadith xxs:text-[2vh] text-[1.8vh] tracking-[0.5px] opacity-80">but let&apos;s bring ourselves back down to earth.</h2>
                        <h1 className="font-rasfire uppercase xl:text-[7vh] xs:text-[6vh] xxs:text-[5.5vh] text-[4.5vh] leading-none opacity-90">What&apos;s it Like to work with me?</h1>
                    </div>
                </div>
                <div className="lm:flex sm:place-content-between lm:mt-[10vh] lm:space-y-0 space-y-8 lm:px-0 px-[2vw]">
                    <div className="about-pitch-div">
                        <h1 className="about-pitch-num">01</h1>
                        <p className="about-pitch-p">
                            <span className="italic">Professionalism.</span><br />
                            I never want a client, a customer, a partner or even a friend to walk away from any conversation with me feeling downcast or slighted. I pay very close attention to the words I speak and the way that it's delivered. I like to be concise and direct, for collaboration and connection is the pinnacle of a work environment that nurtures growth, and I believe the work that we produce will be a direct reflection of that.
                        </p>
                    </div>
                    <div className="about-pitch-div">
                        <h1 className="about-pitch-num">02</h1>
                        <p className="about-pitch-p">
                            <span className="italic">Honesty and Creative Integrity.</span><br />
                            All art forms, to me, are incredibly sacred. And all of my work must be bound by virtues if they are to be worth anything. More than that, the ability to give and take valid criticism is something I pride myself on. Being honest is one of the biggest ways I offer value.
                        </p>
                    </div>
                    <div className="about-pitch-div">
                        <h1 className="about-pitch-num">03</h1>
                        <p className="about-pitch-p">
                            <span className="italic">Balance.</span><br />
                            It is necessary for me to derive fulfilment from many different avenues in life-- not just the secular nor the recreational. Doing so allows room for ideas and inspiration to manifest, for creativity to grow and for my art to thrive. I can give my best in everything, if I am balanced in everything.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pitch;