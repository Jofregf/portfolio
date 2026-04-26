import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, time, address, work}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] ">
            <LiIcon reference={ref}/>
            <motion.div 
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp; 
                    <p                  
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        {company}
                    </p>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time}  {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    )
}

const DetailsLink = ({position, company, companyLink, time, address, work}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] ">
            <LiIcon reference={ref}/>
            <motion.div 
                className="w-full"
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp; 
                    <a 
                        href={companyLink} 
                        target="_blank" 
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        <br/>
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time}  {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    )
}
const Experience = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">Experiencia</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <DetailsLink
                        position="Científico de Datos" company="Digpatho"
                        companyLink="https://digpatho.com/es/"
                        time="Marzo 2025-Setiembre 2025"
                        work="Procesamiento y estructuración de grandes volúmenes de datos biomédicos. Automatización de pipelines de análisis con Python para limpieza, integración y validación de información. Generación de métricas cuantitativas, cálculos estadísticos y reportes automatizados. Construcción y documentación de flujos de trabajo, asegurando consistencia y trazabilidad. Desarrollo de herramientas internas para mejorar la eficiencia del procesamiento y asegurar la calidad de los datos."
                    />
                    <Details
                        position="Analista de Datos" company="Guayerd/IBM"
                        companyLink="/"
                        time="Agosto 2024-Diciembre 2024"
                        work="Diseño, actualización y automatización de reportes financieros y operativos para una ONG. Creación de dashboards en Power BI y Looker Studio, consolidando KPIs clave para la toma de decisiones. Desarrollo de una base de datos en MySQL para la migración y limpieza de datos desde múltiples archivos. Implementación de procesos de ETL para asegurar la calidad, consistencia y disponibilidad de la información. Documentación de métricas, modelos de datos y flujos internos para mejorar la trazabilidad y eficiencia."
                    />
                    <Details
                        position="Fullstack" company="Proyecto Propio"
                        companyLink="/"
                        time="2021-2024" 
                        work="Automatización de procesos mediante desarrollo de APIs y microservicios en Java/Spring Boot. Integración de datos y manejo de flujos transaccionales, aportando experiencia en estructuración y validación de información."
                    />
                    <Details
                        position="Docente" company="Gobierno de Mendoza y San Luis"
                        companyLink="/"
                        time="2010-2019" 
                        work="Docente en escuelas secundarias de las Provincias de Mendoza y San Luis, argentina, impartiendo los cursos de Biología, Química e Histología."
                    />
                    <DetailsLink
                        position="Investigación Científica" company="Instituto de Neurociencias de Alicante"
                        companyLink="https://in.umh-csic.es/es/"
                        time="2008-2010" 
                        work="Trabajos de investigación científica en el Instituto de Neurociencias de Alicante, España, con el objetivo de obterner el título de Doctor en Neurociencias."
                    />
                    <DetailsLink
                        position="Investigación Científica" company="Cell Biology of Rare Diseases"
                        companyLink="https://www.uke.de/english/departments-institutes/institutes/osteology-and-biomechanics/research/cell-biology-of-rare-deseases/index.html"
                        time="2007-2008" 
                        work="Pasantías de investigación científica realizadas en el hospital Hamburg-Eppendorf, Alemania."
                    />
                    <DetailsLink
                        position="Investigación Científica" company="IHEM"
                        companyLink="https://ihem.conicet.gov.ar/"
                        time="2003-2007" 
                        work="Pasantías de investigación científica realizadas en el hospital Instituto de Histología y Embriologia de Mendoza, Mendoza, Argentina"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience