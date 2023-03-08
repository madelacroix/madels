import Image from "next/image"
import Link from "next/link";
import VinorepoImg from "../../../public/img/vinorepo-img01.png"

function Content() {
    return (
        <div className="py-[10vh] space-y-20">
            <div className="px-[5vw] space-y-10">
                <div className="project-content-div">
                    <h2 className="project-content-title">Summary</h2>
                    <p className="project-content-p">
                        Lorem ipsum dolor sit amet consectetur. Euismod lorem dignissim maecenas metus nunc mauris aenean erat. Et lectus eget risus in. Massa urna feugiat tellus arcu. At erat suspendisse eget pretium faucibus odio. Diam tempor interdum scelerisque praesent orci turpis. Sed eu tellus est pharetra. Integer facilisi vestibulum nulla leo. Bibendum sed mi eu auctor id.
                    </p>
                </div>
                <div className="project-content-div">
                    <h2 className="project-content-title">Main Responsibilities</h2>
                    <ol type="1" className="project-content-p">
                        <li>1. Arcu fermentum non nibh sit gravida.</li>
                        <li>2. Fames viverra auctor sed proin mattis tellus lectus morbi elit.</li>
                        <li>3. Ullamcorper nunc diam tristique neque nisi.</li>
                        <li>4. Non facilisi vel ut fringilla ut.</li>
                        <li>5. Phasellus pulvinar pellentesque sit tincidunt.</li>
                    </ol>
                </div>
            </div>
            <div className="flex items-center">
                <Image src={VinorepoImg} width={745} height={750} alt="image of man holding glass of wine" className="rounded-tr-3xl rounded-br-3xl"/>
                <div className="px-[5vw] space-y-10 text-right">
                    <div className="project-content-div">
                        <h2 className="project-content-title">What We're Working On</h2>
                        <p className="project-content-p">
                            Lorem ipsum dolor sit amet consectetur. Euismod lorem dignissim maecenas metus nunc mauris aenean erat. Et lectus eget risus in. Massa urna feugiat tellus arcu. At erat suspendisse eget pretium faucibus odio. Diam tempor interdum scelerisque praesent orci turpis. Sed eu tellus est pharetra. Integer facilisi vestibulum nulla leo. Bibendum sed mi eu auctor id.
                        </p>
                    </div>
                    <div className="project-content-div pb-[5vh]">
                        <h2 className="project-content-title">What I Enjoyed</h2>
                        <p className="project-content-p">
                            Lorem ipsum dolor sit amet consectetur. Euismod lorem dignissim maecenas metus nunc mauris aenean erat. Et lectus eget risus in. Massa urna feugiat tellus arcu. At erat suspendisse eget pretium faucibus odio. Diam tempor interdum scelerisque praesent orci turpis. Sed eu tellus est pharetra. Integer facilisi vestibulum nulla leo. Bibendum sed mi eu auctor id.
                        </p>
                    </div>
                    <Link href="/contact">
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