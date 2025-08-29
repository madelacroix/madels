import Image from "next/image"
import Link from "next/link";
import BobbyKurbImg from "@/public/img/bobbykurb01.jpg"

function Content() {
    return (
        <div className="py-[10vh] space-y-20">
            <div className="pl-[8vw] pr-[15vw] space-y-10">
                <div className="project-content-div">
                    <h2 className="project-content-title">Summary</h2>
                    <p className="project-content-p">
                        This portfolio website showcases the abstract and conceptual artwork of Bobby Kurb, a New Zealand-based artist. It features a curated selection of his vibrant and emotionally evocative pieces, along with limited edition prints for purchase. The site emphasizes Kurb&apos;s unique artistic process and philosophy, blending visual storytelling with bold textures and colors. Visitors can explore his portfolio, learn about his artistic journey, and stay updated on new releases and exhibitions.
                    </p>
                </div>
                <div className="project-content-div">
                    <h2 className="project-content-title">Main Responsibilities</h2>
                    <ol type="1" className="project-content-p">
                        <li>
                            1. <span className="font-bold">Planning and Analysis:</span> Knowing the site's audience would appreciate conceptual and abstract art, I focused on creating a modern, minimalist structure. Early planning included moodboards and wireframes that reflected Bobby Kurb&apos;s artistic aesthetic—clean layouts, ample white space, and a refined, gallery-like experience.
                        </li>
                        <li>
                            2. <span className="font-bold">Design</span> We chose a muted, monochromatic palette to let the artwork speak for itself while ensuring a premium, contemporary look. The design emphasizes visual storytelling, using high-resolution art images and subtle typography to maintain an elegant tone across devices.
                        </li>
                        <li>
                            3. <span className="font-bold">Development:</span> Built mainly using Typescript and TailwindCSS, the site is fast and responsive. I used AWS S3 for file storage, with CloudFront and Route53 for global distribution and DNS routing. All code is version-controlled via GitHub.
                        </li>
                        <li>
                            4. <span className="font-bold">Content Creation:</span> Most of the written content was developed by Bobby Kurb himself, and I focused on presenting his vision and story. I worked closely with the artist to ensure copy reflected his artistic voice, making refinements where needed for clarity and tone.
                        </li>
                        <li>
                            5. <span className="font-bold">Testing and Optimization:</span> The site has been tested across browsers and screen sizes to ensure a smooth UX. User feedback helped refine navigation and interaction, especially on mobile, where the artwork display was key to maintaining engagement.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="flex items-center">
                <Image src={BobbyKurbImg} width={745} height={750} alt="image of man holding glass of wine" className="rounded-tr-3xl rounded-br-3xl" />
                <div className="px-[5vw] space-y-10 text-right">
                    <div className="project-content-div">
                        <h2 className="project-content-title">What We're Working On</h2>
                        <p className="project-content-p">
                            Currently, we're working on getting a blog site up and running, complete with a functional backend using Express.js Node.js and React. This is very new and exciting for me and is a huge undertaking since we also have a deadline for his opening exhibition date later on this year! Learning has been fun nonetheless and I will be updating this as we go along in my journey.
                        </p>
                    </div>
                    <div className="project-content-div pb-[5vh]">
                        <h2 className="project-content-title">What I Enjoyed</h2>
                        <p className="project-content-p">
                            It's so nice to get in touch with my artistic roots, and I have Bobby Kurb to thank for that. His work is riveting and inspiring, and his team have been really easy to work with as well. Working with him has really inspired me to pursue art once again.
                        </p>
                    </div>
                    <Link href="https://www.bobbykurb.com" target="_blank">
                        <button className="white-button">
                            <h2>View Bobby Kurb's Portfolio</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Content;