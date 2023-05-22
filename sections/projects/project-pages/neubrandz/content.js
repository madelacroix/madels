import Image from "next/image"
import Link from "next/link";
import NeubrandzImg from "../../../../public/img/neubrandz-img01.png"

function Content() {
    return (
        <div className="py-[10vh] space-y-20">
            <div className="px-[5vw] space-y-10">
                <div className="project-content-div">
                    <h2 className="project-content-title">Summary</h2>
                    <p className="project-content-p">
                        Neubrandz is a unique Filipino company that focuses on innovation in the health foods sector. They were able to hit the ground running with their flagship product, Milagrovino Wine, and have been going strong ever since. What distinguishes them from other similar brands is their special focus on ingredients that are native to the Philippines. Namely, superfruits such as Guyabano, Bignay and others. I was commissioned to design and develop their website to provide a digital platform for them so that they can eventually take their ideas worldwide. 
                    </p>
                </div>
                <div className="project-content-div">
                    <h2 className="project-content-title">Main Responsibilities</h2>
                    <ol type="1" className="project-content-p">
                    <li>
                            1. <span className="font-bold">Planning and Analysis:</span> Neubrandz is an innovative company that is focused on health. So I knew that during this stage, our target audience would predominantly be those around the ages of 30-50, who are interested in implementing healthy habits in an easy, seamless way. 
                        </li>
                        <li>
                            2. <span className="font-bold">Design:</span> Because Neubrandz focuses on health and wellbeing, I wanted the website to give that same calming effect too. So we decided on clean lines and focused mainly on greens, browns and earthy neutral colours.
                        </li>
                        <li>
                            3. <span className="font-bold">Development:</span> I built the website using Next.js, TailwindCSS and Markdown predominantly. I used AWS S3 to store my code and then used CloudFront and Route53 to eventually deploy it. I also GitHub for version control.
                        </li>
                        <li>
                            4. <span className="font-bold">Content Creation:</span> I got to work on a lot of copywriting on this site. The team had also commissioned me to work on some articles for their blog, as their company and products were gaining a bit of press in the Philippines, the team wanted to hit the ground running with a healthy and well-stocked blog page. 
                        </li>
                        <li>
                            5. <span className="font-bold">Testing and Optimization:</span> I've optimized this site to be functional on most browsers and all screen sizes. I've also been able to optimize the design and layout based on valuable feedback.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="flex items-center">
                <Image src={NeubrandzImg} width={745} height={750} alt="image of man holding glass of wine" className="rounded-tr-3xl rounded-br-3xl bg-center"/>
                <div className="px-[5vw] space-y-10 text-right">
                    <div className="project-content-div">
                        <h2 className="project-content-title">What We're Working On</h2>
                        <p className="project-content-p">
                            We are still working on the final stages of getting the site deployed. We want to make sure that every detail is correct down to the T, so that  we'd have less to worry about once it is live. Other than that, the new and exciting product that they are currently soft launching is a coffee made out of turmeric! How exciting is that!
                        </p>
                    </div>
                    <div className="project-content-div pb-[5vh]">
                        <h2 className="project-content-title">What I Enjoyed</h2>
                        <p className="project-content-p">
                            The team was very easy to work with. I particularly enjoyed learning about the different types of native Filipino fruits and their health benefits. It had never been something I'd known before, so helping out with some of their content creation and copywriting has really encouraged me to increase my knowledge through research. Apart from that, I also realised that I enjoyed writing in general and it's really opened my horizons to some other possibilities for services that I can potentially offer in the future.
                        </p>
                    </div>
                    <Link href="/404">
                        <button className="font-thasadith uppercase bg-[#F5F5F5] md:px-[3vw] sm:px-[5vw] xs:px-[8vw] xxs:px-[10vw] px-[20vw] py-[1.5vh] rounded-full text-almost-black tracking-[0.8px] xs:text-[1.8vh] text-[1.6vh] lm:mt-0 sm:-mt-[8vh] xxs:-mt-[10vh] float-right">
                            <h2>View Neubrandz</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Content;