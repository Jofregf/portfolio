import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
import Link from 'next/link';

const Details = ({type, time, place, info, certificate}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div 
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
                <p className="font-medium w-full md:text-sm">{info}</p>
                <p> 
                    <a 
                        href={`${certificate}`}
                        target="_blank" 
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        {certificate ? <p>Certificado</p> : null}
                    </a>
                </p>
            </motion.div>
        </li>
    )
}
const Education = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Educación</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="Desarrollo de APIs en Java con SpringBoot"
                        time="2023"
                        place="TodoCode Academy"
                        info="Lo revelante del curso incluye arquitectura Cliente-Servidor, Protocolo HTTP, Gestores de dependencias como Maven o Gradle, Spring Boot, Modelo Vista Controlador, Patrones de diseño DTO, Inyección de Dependencias, Arquitectura Multicapa, JPA, Hibernate."
                        certificate= "https://todocodeacademy.com/certificate/reb"
                    />
                    <Details
                        type="Programación Orientada a Objetos"
                        time="2023"
                        place="TodoCode Academy"
                        info="Lo revelante del curso incluye la Programación Orientada a Objetos (POO) utilizando Java como lenguaje de programación, propiedades de la POO, excepciones, relaciones entre clases, Java Persistence API (JPA)."
                        certificate= "https://todocodeacademy.com/certificate/vpa/"
                    />
                    <Details
                        type="Spring"
                        time="2022"
                        place="OpenBootcamp"
                        info="Configuración inicial y utilización de este framework, junto a los diferentes proyectos como Spring Boot, Spring Security, Spring Data, Spring Web."
                        certificate={"/Certificates/Spring.pdf"}
                    />
                    <Details
                        type="Hibernate"
                        time="2022"
                        place="OpenBootcamp"
                        info="Utilización de este framework de mapeo objeto-relacional para facilitar el acceso y manejo de datos. Mapeo de entidades, consultas HQL, transacciones."
                        certificate={"/Certificates/Hibernate.pdf"}
                    />
                    <Details
                        type="Java Avanzado"
                        time="2022"
                        place="OpenBootcamp"
                        info="Programación Orientada a Objetos, concurrencia, manejo de excepciones, patrones de diseño. Nuevas y poderosas características introducidas en versiones recientes de Java."
                        certificate= "/certificates/JavaAvanzado.pdf"
                    />
                    <Details
                        type="Git"
                        time="2022"
                        place="OpenBootcamp"
                        info="Configuración y utilización de Git, control del historial de cambios, creación de ramas, fusión de código y colaboración con otros desarrolladores de manera efectiva."
                        certificate="/certificates/Git.pdf"
                    />
                    <Details
                        type="Full Stack Web Developer"
                        time="2021-2022"
                        place="Henry"
                        info="Aprendizaje y uso de herramientas para desarrollar tanto el Frontend y el Backend de una aplicación, utilizando JavaScript como lenguaje de programación."
                        certificate= "https://certificates.soyhenry.com/cert?id=62316dc3-39c0-41ae-a46d-7c62d295869c"
                    />
                    <Details
                        type="Algoritmos de JavaScript y Estructuras de Datos "
                        time="2021"
                        place="freeCodeCamp"
                        info=" En la certificación Algoritmos de JavaScript y Estructuras de Datos se incluye los fundamentos de JavaScript como las variables, arreglos, objetos, bucles y funciones. Además, los dos estilos o paradigmas importantes de programación: la Programación Orientada a Objetos (OOP), y la Programación Funcional (FP)."
                        certificate= "https://freecodecamp.org/espanol/certification/fcc07edcd7f-9791-4c68-95af-4b04663acc08/javascript-algorithms-and-data-structures"
                    />
                    <Details
                        type="Lic. en Biología Molecular"
                        time="1997-2006"
                        place="Universidad Nacional de San Luis"
                        info="Carrera de grado para obtener el título de Lic. en biología molecular, el cual te permite trabajar en laboratorios de investigación científica."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education