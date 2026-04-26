import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time, place, certificate}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div 
                className="w-full"
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <span>
                    {certificate && (
                        <a 
                            href={certificate}
                            target="_blank"
                            className="text-primary dark:text-primaryDark capitalize"
                        >
                            <p>Certificado</p>
                        </a>
                    )}
                </span>
            </motion.div>
        </li>
    )
}
const Cursos = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Cursos</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    
                    <Details
                        type="Contar historias con datos - Storytelling"
                        time="2025"
                        place="UDEMY"
                        
                        certificate= {"/Cursos/Storytelling.pdf"}
                    />
                    <Details
                        type="Fundamentos de Análisis de Datos para Empresas"
                        time="2025"
                        place="UDEMY"
                        certificate= {"/Cursos/Analisis_Para_Empresas.pdf"}
                    />
                    <Details
                        type="Introducción Cloud Computing en AWS"
                        time="2025"
                        place="UDEMY"
                        certificate= {"/Cursos/Cloud_Computing_AWS.pdf"}
                    />
                    <Details
                        type="Master de especialista en Ciencias de Datos con Python"
                        time="2025"
                        place="UDEMY"
                        certificate= {"/Cursos/Datos_Python.pdf"}
                    />
                    <Details
                        type="Computer Vision y Machine Learning con Python"
                        time="2025"
                        place="UDEMY"
                        certificate= {"/Cursos/Computer_Vision_ML.pdf"}
                    />
                    <Details
                        type="Visualizaciones y Análisis de Datos con Python"
                        time="2025"
                        place="UDEMY"
                        certificate= {"/Cursos/Visualizacion_Python.pdf"}
                    />
                    <Details
                        type="Deep Learning Avanzado para Computer Vision con TensorFlow"
                        time="2025"
                        place="UDEMY"
                        certificate= {"/Cursos/Deep_Learning.pdf"}
                    />
                    <Details
                        type="Curso completo de Estadística a nivel universitario"
                        time="2024"
                        place="UDEMY"
                        certificate={"/Cursos/Estadistica.pdf"}
                    />
                    <Details
                        type="Introducción al Business Intelligence y la Minería de Datos"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Business_Intelligence.pdf"}
                    />
                    <Details
                        type="Microsoft Power BI - Curso de Power BI Desktop"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Power_Bi.pdf"}
                    />
                    <Details
                        type="Python y Machine Learning: Crea Soluciones Innovadoras"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Python_ML.pdf"}
                    />
                    <Details
                        type="Power Query - Domina la Transformación de datos en Power BI"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Power_Query.pdf"}
                    />
                    <Details
                        type="Curso Completo de Bases de Datos. SQL y mySQL"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/SQL_mySQL.pdf"}
                    />
                    <Details
                        type="Excel y Power Bi. Análisis y visualización de Datos"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Excel_PowerBI.pdf"}
                    />
                    <Details
                        type="Aprende todo sobre Looker Studio 2024 (Data Studio)"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Looker_studio.pdf"}
                    />
                    <Details
                        type="Tablas dinámicas, dashboards, macros y más con Google Sheets"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Google_sheets.pdf"}
                    />
                    <Details
                        type="Excel Completo - Desde Principiante Hasta Avanzado"
                        time="2024"
                        place="UDEMY"
                        certificate= {"/Cursos/Excel.pdf"}
                    />
                    <Details
                        type="Data Science Foundations - Level 1"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Data_Science_Foundations_Level_1.pdf"}
                    />
                    <Details
                        type="Applied Data Science with Python - Level 2"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Applied_Data_Science_with_Python_Level_2.pdf"}
                    />
                    <Details
                        type="Agile Explorar"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Agile_Explorer.pdf"}
                    />
                    <Details
                        type="Data Fundamentals"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/DataFundamentals.pdf"}
                    />
                    <Details
                        type="Big Data Foundations - Level 1"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Big_Data_Foundations_Level_1.pdf"}
                    />
                    <Details
                        type="Data Science Methodologies"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Data_Science_Methodologies.pdf"}
                    />
                    <Details
                        type="Data Analysis Using Python"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Data_Analysis_Using_Python.pdf"}
                    />
                    <Details
                        type="Explore Emerging Tech"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Explore_Emerging_Tech.pdf"}
                    />
                    <Details
                        type="Explorations into Mindfulness"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Explorations_into_Mindfulness.pdf"}
                    />
                    <Details
                        type="Data Visualization Using Python"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Data_Visualization_Using_Python.pdf"}
                    />
                    <Details
                        type="Hadoop Foundations - Level 1"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Hadoop_Foundations_Level_1.pdf"}
                    />
                    <Details
                        type="Job Application Essentials"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Job_Application_Essentials.pdf"}
                    />
                    <Details
                        type="Python for Data Science"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Python_for_Data_Science.pdf"}
                    />
                    <Details
                        type="Spark - Level 1"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Spark_Level_1.pdf"}
                    />
                    <Details
                        type="Working in a Digital World: Professional Skills"
                        time="2024"
                        place="IBM"
                        certificate= {"/Cursos/Working_in_a_Digital_World_Professional_Skills.pdf"}
                    />
                    <Details
                        type="Introduction to Data Science"
                        time="2023"
                        place="CISCO"
                        certificate= {"/Cursos/Introduction_to_Data_Science.pdf"}
                    />
                    <Details
                        type="Data Analitics Essentials"
                        time="2023"
                        place="CISCO"
                        certificate= {"/Cursos/Data_Analytics_Essentials.pdf"}
                    />
                    <Details
                        type="Git"
                        time="2022"
                        place="Open Bootcamp"
                        certificate= {"/Cursos/Git.pdf"}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cursos