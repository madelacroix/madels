import Image from "next/image"
import Link from "next/link";
import VinorepoImg from "../../../../public/img/vinorepo-img01.png"

function Content() {
    return (
        <div className="py-[10vh] space-y-20">
            <div className="pl-[8vw] pr-[15vw] space-y-10">
                <div className="project-content-div">
                    <h2 className="project-content-title">Summary</h2>
                    <p className="project-content-p">
                        VinoRepo is a place for vineyards and wine enthusiasts to connect. The idea was formed in 2022-- inspired by wines of Waiheke island. Wine is a premium product-- a beverage typically consumed during special and happy occasions. We want to add to the quality of consumption by bringing forward everything else that comes with it. All the richness it has to offer through storytelling, and bringing more light to the vineyards that produced it. By means of a QR code that is generated for every wine that is registered within the site, the consumer can simply scan and learn more about any vintage. From its origins, its tastes, all the way down to the barrel, the vineyard and how it may be best consumed.
                    </p>
                </div>
                <div className="project-content-div">
                    <h2 className="project-content-title">Main Responsibilities</h2>
                    <ol type="1" className="project-content-p">
                        <li>
                            1. <span className="font-bold">Planning and Analysis:</span> Since wine is a premium product, I knew that our target audience would be people who had a taste for the finer things. So in my planning and analysis stage, I laid out all the elements I knew would work best for such a concept-- such as a muted, earth toned color palette to give it a clean feel, and a very easy to navigate UI through wireframes.
                        </li>
                        <li>
                            2. <span className="font-bold">Design</span> For a clean and premium feel, I stuck to a more earthy and muted colour palette with clean lines. Most of the images I chose were either stock or directly from the main site, with minimal changes to the original image. Since we're still in the development stages for this site, I've been free to experiment with a few UI/UX designs for both web and mobile.
                        </li>
                        <li>
                            3. <span className="font-bold">Development:</span> I built the website using Next.js and TailwindCSS predominantly. I used AWS S3 to store my code and then used CloudFront and Route53 to eventually deploy it. I also used SendGrid on this site for the contact form and use GitHub for version control.
                        </li>
                        <li>
                            4. <span className="font-bold">Content Creation:</span> Most of the content that you're able to read on VinoRepo comes from Kerry, my boss for this project. He's the real brains behind the whole thing. A few bits of content writing that I've done are sprinkled in there in some places, but I mostly do the final edits.
                        </li>
                        <li>
                            5. <span className="font-bold">Testing and Optimization:</span> I've optimized this site to be functional on most browsers and all screen sizes. I've also been able to optimize the design and layout based on valuable feedback.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="flex items-center">
                <Image src={VinorepoImg} width={745} height={750} alt="image of man holding glass of wine" className="rounded-tr-3xl rounded-br-3xl" />
                <div className="px-[5vw] space-y-10 text-right">
                    <div className="project-content-div">
                        <h2 className="project-content-title">What We're Working On</h2>
                        <p className="project-content-p">
                            Currently, we're mainly working on getting the word our about our concept. What that means for me is constant refinement and reviewing of the site to make sure that it runs smoothly and looks beautiful. I'm also still learning a lot of things for this site such as SEO and Google Analytics. Currently I'm also learning more about AWS DynamoDB so that we can integrate it in the future.
                        </p>
                    </div>
                    <div className="project-content-div pb-[5vh]">
                        <h2 className="project-content-title">What I Enjoyed</h2>
                        <p className="project-content-p">
                            I've learned so much from this project! The wine world was not something I thought I'd be interested in, but I am! It's like stepping into a world of artisans and connoiseurs, and I am fascinated by the many different attributes of a vintage and the endless ways wine can be described. Aside from that, I've also done so much learning on this project-- from different softwares to design concepts. And that's always fun for me.
                        </p>
                    </div>
                    <Link href="https://www.vinorepo.com" target="_blank">
                        <button className="font-thasadith uppercase bg-[#F5F5F5] md:px-[3vw] sm:px-[5vw] xs:px-[8vw] xxs:px-[10vw] px-[20vw] py-[1.5vh] rounded-full text-almost-black tracking-[0.8px] xs:text-[1.8vh] text-[1.6vh] lm:mt-0 sm:-mt-[8vh] xxs:-mt-[10vh] float-right">
                            <h2>View Vinorepo</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Content;