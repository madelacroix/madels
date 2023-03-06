import Image from "next/image";
import AboutTwo from "../../public/img/about02.png"

function Pitch() {
    return (
        <div className="bg-[#78736E] xs:py-[12vh] py-[10vh] xl:px-[10vw] px-[6.5vw]">
            <div>
                <div className="md:grid md:grid-cols-3 flex flex-col-reverse">
                    <div className="m-auto md:block lm:flex">
                        <div className="bg-black text-off-white font-thasadith xs:text-[1.8vh] text-[1.6vh] sm:pl-[5vw] sm:pr-[10vw] px-[8vw] lg:py-[9vh] sm:py-[8vh] xxs:py-[6vh] py-[5vh] rounded-3xl md:mb-0 sm:mb-[10vh] xs:mb-[5vh] mb-[4vh]">
                            <div className="md:w-[30vw] lm:w-[50vw] xs:space-y-8 space-y-5 tracking-[0.5px]">
                                <p>
                                    I like to think working with me is very easy. My collaboration style is very heavy on listening, I pay close attention and take on board all things that are said-- whether it be critique, ideas or analyses. I look for patterns in everything I see and when I can afford to do so, I enjoy refining things right down to the atom. I like to find ways to integrate the principles, ideas, techniques and skills I've gained from mastering certain crafts to infuse into my work in order to create something beautiful and interesting.
                                </p>
                                <p>
                                    I've been rewarded some rich experiences in a few different roles in different industries throughout my secular lifetime. I've been in customer service, fast food, research, call centers and sales, but none of them have enraptured me as much as tech. My curse is that I am both creative and analytic-- two sides of me that are in eternal conflict. However, technology has allowed me to build a bridge to close the gap between the two, helping me find joy and fulfilment in my work.
                                </p>
                                <p>
                                    In my experiences, I've learned many things. But I hold strongly to three particular values and use them as a guiding light in all areas of my work, because I believe that they are the keys to push myself and those around me to success.
                                </p>
                            </div>
                        </div>
                        <Image src={AboutTwo} width={305} height={420} alt="image" className="rounded-3xl lm:-ml-[8vw] mt-[15vh] md:hidden max-lm:hidden" />
                    </div>
                    <Image src={AboutTwo} width={305} height={420} alt="image" className="rounded-3xl ml-[12vw] mt-[25vh] md:block hidden" />
                    <div className="text-off-white md:text-right md:pr-0 sm:pr-[25vw] xs:pr-[15vw] md:pb-0 pb-[5vh] space-y-2 relative">
                        <h2 className="font-thasadith xxs:text-[2vh] text-[1.8vh] tracking-[0.5px] opacity-80">but let&apos;s bring ourselves back down to earth.</h2>
                        <h1 className="font-rasfire uppercase xl:text-[7vh] xs:text-[6vh] xxs:text-[5.5vh] text-[4.5vh] leading-none opacity-90">What&apos;s it Like to work with me?</h1>
                    </div>
                </div>
                <div className="sm:flex sm:place-content-between lm:mt-[10vh] sm:space-y-0 space-y-8 sm:px-0 px-[2vw]">
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