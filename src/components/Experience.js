import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {

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
                    <a 
                        href={companyLink} 
                        target="_blank" 
                        className="text-primary dark:text-primaryDark capitalize"
                    >
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
                    <Details
                        position="Backend" company="TodoCode Academy"
                        companyLink="https://todocodeacademy.com/"
                        time="Julio 2023-Agosto 2023"
                        work="Backend realizado con Java y Spring Boot para el manejo del inventario de un bazar, incluyendo el registro de clientes y las ventas, realizado durante el curso de Spring impartido por TodoCode Academy."
                    />
                    <Details
                        position="Backend" company="TodoCode Academy"
                        companyLink="https://todocodeacademy.com/"
                        time="Junio 2023"
                        work="Realización de aplicaciones de escritorios, producidas durante la realización del curso de Programación Orientada a Objetos impartido  por TodoCode Academy."
                    />
                    <Details
                        position="Full Stack" company="Proyecto Propio"
                        companyLink="/"
                        time="Marzo-2023-Mayo-2023" 
                        work="Aplicación web propia, la cual implementa Java y Spring Boot en el backend, y JavaScript, ViteJs y ReduxJs en el frontend. La misma es para registrar diferentes restaurantes de una ciudad, y los clientes puedan hacer reservas a dichos restaurantes."
                    />
                    <Details
                        position="Backend" company="Henry"
                        companyLink="https://www.soyhenry.com/"
                        time="Marzo 2022-Abril 2022" address="| Buenos Aires-Arg"
                        work="Trabajo final en grupo para obtener el título de full stack del bootcamp Henry. Realización del backend de un e-commerce."
                    />
                    <Details
                        position="Full Stack" company="Henry"
                        companyLink="https://www.soyhenry.com/"
                        time="Marzo 2022" address="| Buenos Aires-Arg"
                        work="Trabajo individual del bootcamp Henry con el objetivo de aprobar los primeros módulos del programa. Como lenguaje se utilizó JavaScript, y tuve el rol de armar una base de datos utilizando Express, Node, PostgreSQL, cargarla con los datos obtenidos desde una API externa, y posteriormente mostrar esos datos a través de distintos endpoints que eran consultados por el frontend, utilizando ReactJs y ReduxJs"
                    />
                    <Details
                        position="Frontend" company="Proyecto Propio"
                        companyLink="/"
                        time="Diciembre 2021" 
                        work="Realización del frontend utilizando ReactJS, de un proyecto propio, el cual se trata de un cotizador de criptomonedas en tiempo real en distintas monedas de curso legal."
                    />
                    <Details
                        position="Docente" company="Gobierno de Mendoza y San Luis"
                        companyLink="/"
                        time="2010 - 2019" 
                        work="Docente en escuelas secundarias de las Provincias de Mendoza y San Luis, argentina, impartiendo los cursos de Biología, Química e Histología."
                    />
                    <Details
                        position="Investigación Científica" company="Instituto de Neurociencias de ALicante"
                        companyLink="https://in.umh-csic.es/es/"
                        time="2008-2010" 
                        work="Trabajos de investigación científica en el Instituto de Neurociencias de Alicante, España, con el objetivo de obterner el título de Doctor en Neurociencias."
                    />
                    <Details
                        position="Investigación Científica" company="Universität Hamburg"
                        companyLink="https://www.uni-hamburg.de/"
                        time="2007-2008" 
                        work="Pasantías de investigación científica realizadas en el hospital Hamburg-Eppendorf. Alemania."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience