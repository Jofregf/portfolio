import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/Images/profile/profile.jpg"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "../components/Icons"
import HireMe from "@/components/HireMe";


export default function Home() {
    return (
        <>
            <Head>
                <title>GJ dev | Inicio</title>
                <meta
                    name="description"
                    content="Java Backend Developer"
                />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full">
                            <Image 
                                src={profile} 
                                alt="Logo" 
                                className="w-full h-auto lg:hidden md:inline-block md:w-full" 
                                priority 
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center pl-10">
                            <AnimatedText text="Materializando ideas a través del código" className="!text-6xl !text-left xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-4xl md:!text-center sm:!text-3xl sm:!text-center"/>
                            <p className="my-4 text-base font-medium md:text-sm md:!text-center sm:text-xs sm:!text-center">
                                Como desarrollador backend, me dedico a convertir ideas en aplicaciones web innovadoras.
                                A través de mis proyectos, te invito a explorar mi sólida experiencia en el mundo del desarrollo web y en particular en el framework Spring Boot.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link 
                                    href="/CV-GuillermoJofre.pdf" 
                                    target={"_blank"}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                    download={true}
                                >
                                    CV <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link 
                                    href="mailto:jofregf@gmail.com" 
                                    target={"_blank"}
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                                >
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe/>
            </main>
        </>
    );
}
