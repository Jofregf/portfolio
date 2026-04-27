"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import picture from "../../public/Images/profile/MiFoto.jpg"
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Cursos from "@/components/Cursos"
import Publications from "@/components/Publications";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";

const About = () => {
    return (
        <>
            <Head>
                <title>GJ analista | Conóceme</title>
                <meta
                    name="description"
                    content="Analista de Datos"
                />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Todo empieza con una pregunta bien hecha"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biografía
                            </h2>
                            <p className="font-medium">
                                Mi nombre es Guillermo Jofre. Durante más de 10 años trabajé en investigación científica, analizando información compleja y buscando patrones donde otros veían ruido. Esa misma lógica es la que hoy aplico en el análisis de datos.
                            </p>
                            <p className="my-4 font-medium">
                                Mi transición al mundo de datos no fue un cambio de rumbo, sino una evolución natural, pasar de estudiar sistemas biológicos a resolver problemas reales con datos.
                            </p>
                            <p className="my-4 font-medium">
                                Hoy complemento ese enfoque con herramientas modernas de análisis y visualizaciones, y estoy profundizando en el uso de modelos de machine learning para ir un paso más allá, no solo entender qué pasó, sino también anticipar lo que viene y construir soluciones con impacto real.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={picture}
                                alt="Guillermo Jofre"
                                className="w-full h-auto rounded-2xl"
                                priority 
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            />
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                    <Cursos />
                    <Publications />
                    <div className="flex items-center justify-center lg:justify-center">
                                <Link 
                                    href="/CV-GuillermoJofre.pdf" 
                                    target={"_blank"}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                    download={true}
                                >
                                    CV <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                            </div>
                </Layout>
            </main>
        </>
    );
};

export default About;