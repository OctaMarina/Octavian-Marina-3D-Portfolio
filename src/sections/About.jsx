import React, {useState} from 'react';
import {
    FaApple, FaWindows, FaLinux, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact,
    FaDatabase, FaTerminal, FaCalculator, FaLayerGroup, FaChartBar, FaAws, FaDocker, FaGitAlt
} from 'react-icons/fa';
import {
    SiSwift, SiJavascript, SiTensorflow, SiMongodb, SiFirebase, SiCplusplus,
    SiAdobepremierepro,
    SiOpengl, SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiTypescript
} from 'react-icons/si';
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () =>{
        console.log("copy")
        navigator.clipboard.writeText('octamarina@gmail.com')
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        }, 2000)
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full h-full object-contain"/>

                        <div>
                            <p className="grid-headtext">Hi, I'm Octavian</p>
                            <p className="grid-subtext">
                                I build and deploy full-stack, AI-powered solutions. I believe the most powerful technology is useless without a clear strategy. My background isn't just in code; it's in understanding business logic and user needs. I partner with my clients to go beyond the initial request, co-designing systems that not only solve today's problem but also create a strategic asset for the future. My goal is to be more than a developer; I aim to be your trusted technical advisor in the AI space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container relative">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)"
                                   backgroundImageOpacity={0.5}
                                   showAtmosphere
                                   showGraticules
                                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />

                        </div>
                        <p className="grid-headtext">Available for remote work worldwide.</p>
                        <p className="grid-subtext">
                            I'm based in Cluj-Napoca, Romania, with remote work available.
                        </p>
                        <a href={"#contact"}>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </a>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="relative">
                            <FaLayerGroup
                                className="absolute inset-0 w-full h-full text-gray-500"
                                style={{opacity: 0.1, fontSize: '10rem'}}
                            />
                            <div>
                                <p className="grid-headtext my-12">Tech Stack</p>
                                <ul className="grid-subtext list-disc list-inside">
                                    <li>
                                        <strong>AI & Data Science:</strong> LangChain, LlamaIndex, OpenAI API, Hugging
                                        Face, Python, Scikit-learn, Pandas
                                        <FaPython className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Backend & API:</strong> Java, Spring Framework, Python, FastAPI, REST
                                        APIs
                                        <FaJava className="inline-block ml-2"/>
                                        <FaPython className="inline-block ml-1"/>
                                    </li>
                                    <li>
                                        <strong>Databases:</strong> SQL (PostgreSQL), NoSQL (MongoDB), Vector DBs
                                        (Pinecone, ChromaDB)
                                        <FaDatabase className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Web & Mobile Development:</strong> React, React Native, TypeScript,
                                        JavaScript, HTML, CSS, Tailwind CSS, Expo
                                        <FaReact className="inline-block ml-2"/>
                                        <SiTypescript className="inline-block ml-1"/>
                                        <FaHtml5 className="inline-block ml-1"/>
                                    </li>
                                    <li>
                                        <strong>3D & Graphics:</strong> Three.js, React Three Fiber, C++, OpenGL
                                        <SiOpengl className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Big Data & BI:</strong> Apache Spark, Hadoop, Power BI, Tableau
                                        <FaChartBar className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Cloud & DevOps:</strong> AWS, Google Cloud, Docker, Git, CI/CD
                                        <FaAws className="inline-block ml-2"/>
                                        <FaDocker className="inline-block ml-1"/>
                                        <FaGitAlt className="inline-block ml-1"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <p className="grid-headtext">Building Effective Solutions from Scratch.</p>
                        <p className="grid-subtext">
                            I build with a focus on clean architecture and high-quality code, ensuring your application
                            is robust and easy to maintain. You get a future-proof asset, not a short-term fix.
                        </p>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                    alt="copy"
                                    className="mr-2"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-white">octamarina@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
