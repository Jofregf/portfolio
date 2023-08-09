import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
// import React, { useEffect, useRef } from "react";
import Image from "next/image";
import picture from "../../public/Images/profile/MiFoto.jpg";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";

// const AnimatedNumbers = ({ value }) => {
//     const ref = useRef(null);
//     const motionValue = useMotionValue(0);
//     const springValue = useSpring(motionValue, { duration: 3000 });
//     const isInView = useInView(ref, { once: true });

//     useEffect(() => {
//         if (isInView) {
//             motionValue.set(value);
//         }
//     }, [isInView, motionValue, value]);

//     useEffect(() => {
//         springValue.on("change", (latest) => {
//             if (ref.current && latest.toFixed(0) <= value) {
//                 ref.current.textContent = latest.toFixed(0);
//             }
//         });
//     }, [springValue, value]);
//     return <span ref={ref}></span>;
// };

const About = () => {
    return (
        <>
            <Head>
                <title>GJ dev | Conóceme</title>
                <meta
                    name="description"
                    content="Java Backend Developer"
                />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="La perseverancia es el camino hacia donde quieras llegar"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biografía
                            </h2>
                            <p className="font-medium">
                                Mi nombre es Guillermo Jofre. Empece en el mundo IT casi sin querer, deseaba realizar una página web con una plantilla gratuita, y me encontré con límitaciones que sólo podía superar abonando la plantilla. Entonces me pregunté, ¿cómo hacían las personas que se dedicaban a esto?
                            </p>
                            <p className="my-4 font-medium">
                                Inicie un bootcamp aprendiendo JavaScript y varias herramientas como ReactJs, ReduxJs, entre otras, para el frontend, y NodeJS, ExpressJs, Sequelize para el backend.
                            </p>
                            <p className="my-4 font-medium">
                                Al finalizar ese bootcamp, descubrí que lo que realmente me apasionaba era el backend, por lo que estuve averiguando que lenguajes se utilizaban mayormente para esto.
                            </p>
                            <p className="my-4 font-medium">
                                Y descubrí... Java, al principio me mareaba, me causaba la sensación que estaba entrando en un mar de incertidumbres. Las líneas de código parecían un enigma y los conceptos abstractos a menudo me dejaban perplejo.
                            </p>
                            <p className="my-4 font-medium">
                            Esta etapa de incertidumbre inicial me enseñó la importancia de la perseverancia y la voluntad de aprender. Hoy, miro hacia atrás con gratitud y asombro el largo camino recorrido.
                            </p>
                            <p className="font-medium">
                            Mi viaje en el mundo de Java continúa. Si estás comenzando en este camino, recuerda que cada paso cuenta y cada desafío es una oportunidad.
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

                        {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satiesfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>  */}

                    </div>
                    <Skills />
                    <Experience />
                    <Education />
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