"use client";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import oil from "../../public/Images/projects/Oil_&_Gas_Well_Performance.png";
import superstore from "../../public/Images/projects/superstore.png"
import credit from "../../public/Images/projects/credit_risk.png"
import potenciar from "../../public/Images/projects/potenciar.png"
import { motion } from "framer-motion";

const FeaturedProject = ({title, summary, img, link, github}) => {

    const image = (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg group">

            <FramerImage
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-50"
            />

            <div className="relative w-full h-full flex items-center justify-center">
                <FramerImage 
                    src={img} 
                    alt={title} 
                    className="relative w-full h-full object-contain p-4"
                />
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                
                {github && (
                    <Link href={github} target="_blank" className="text-white text-lg font-semibold border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
                        GitHub
                    </Link>
                )}

                {link && (
                    <Link href={link} target="_blank" className="bg-white text-black text-lg font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        Ver Proyecto
                    </Link>
                )}
            </div>
        </div>
    );


    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>

            <div className="w-1/2 lg:w-full">
                {image}
            </div>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-lg">
                    {title}
                </h2>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>

                {!link && (
                    <span className="text-sm text-gray-500 italic mt-2">
                        Demo no disponible
                    </span>
                )}
            </div>
        </article>
    )
}

const FramerImage = motion(Image);
const projects = () => {
    return (
        <>
            <Head>
                <title>GJ analyst | Proyectos </title>
                <meta name="description" content="Analista de Datos" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="De la pregunta al resultado: proyectos reales" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "/>
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Oil well production analysis"
                                img={oil}
                                summary="Análisis de producción de pozos petroleros con pronóstico, límite económico e ingresos para optimizar decisiones operativas y de inversión."
                                link="https://github.com/Jofregf/oil-well-production-analysis/blob/main/Oil%20Production.pbix"
                                github="https://github.com/Jofregf/oil-well-production-analysis"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Superstore Sales Analytics"
                                img={superstore}
                                summary="Análisis de ventas y rentabilidad por categoría y región para identificar oportunidades de mejora y optimizar decisiones comerciales."
                                link="https://github.com/Jofregf/superstore-analytics/blob/main/superstore.pbix"
                                github="https://github.com/Jofregf/superstore-analytics"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Credit Risk"
                                img={credit}
                                summary="Modelo de evaluación de riesgo crediticio para predecir incumplimientos y mejorar la toma de decisiones financieras."
                                link={null}
                                github="https://github.com/Jofregf/Credit-Risk"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Fundación Potenciar Solidario"
                                img={potenciar}
                                summary="Dashboard interactivo para el análisis de datos de una fundación, facilitando la toma de decisiones y el seguimiento de indicadores clave."
                                link="https://datastudio.google.com/s/snnPyMrx1-s"
                                github={null}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
