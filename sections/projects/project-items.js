import Link from "next/link";

function ProjectsItems() {
    return (
        <div className="lm:pt-[25vh] pt-[18vh] sm:pb-[10vh] px-[5vw] text-off-white xs:space-y-16 space-y-10">
            <div>
                <Link href="/projects/vinorepo">
                    <div className="bg-vinorepo bg-cover bg-fixed project-div">
                        <div className="project-div-header">
                            <h2 className="project-div-subheading">Project One</h2>
                            <h1 className="project-div-title">vinorepo</h1>
                        </div>
                        <div className="project-div-p">
                            <p>
                                Ever had a fine bottle of wine and wanted to know what it's story was? Each vintage has a story, starting from roots of the crops, all the way to your wineglass. Vinorepo hopes to connect you and that story, making for a more intimate wine drinking experience.
                            </p>
                            <p>
                                In this project, I am in the process of creating a platform for vineyards and wine enthusiasts. I am privileged to be able to work for Kerry and bring his idea to life, as I get to play with different design concepts, integrate some cutting-edge technology and learn more about wine!
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <Link href="projects/neubrandz">
                    <div className="bg-neubrandz bg-cover bg-fixed project-div lm:text-right">
                        <div className="project-div-header">
                            <h2 className="project-div-subheading">Project Two</h2>
                            <h1 className="project-div-title">neubrandz</h1>
                        </div>
                        <div className="project-div-p lm:text-right lm:float-right">
                            <p>
                                Health is our wealth. Neubrandz is an exciting startup company that focuses on consumables targeted at advancing health using organic products locally found in the Philippines.
                            </p>
                            <p>
                                In this project, I had the privilege of working alongside Sir Delfin and his team in designing and developing their website. I also enjoyed seeing the growth of their company and the popularity of their products increase through the year.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsItems;