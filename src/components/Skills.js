"use client";
import React from "react";
import {motion} from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Skill = ({name, x, y}) => {
    return (
        <motion.div 
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light sm:font-bold"
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition: {duration:1.5}}}
            transition={{duration: 1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    const { language } = useLanguage();
    
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 ">
                {language === "es" ? "Habilidades" : "Skills"}
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:circularDarktMd
            sm:bg-circularLightSm sm:circularDarkSm">
                <motion.div 
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{scale:1.05}}
                >
                    {language === "es" ? "Analista de Datos" : "Data Analyst"}
                </motion.div>
                <Skill name="Python" x="-5vw" y="-8vw"/>
                <Skill name="SQL" x="10vw" y="-11vw"/>
                <Skill name="PostgreSQL" x="-17vw" y="-14vw"/>
                <Skill name="MySQL" x="30vw" y="-5vw"/>
                <Skill name="Excel" x="-12vw" y="5vw"/>
                <Skill name="Sheets" x="14vw" y="2vw"/>
                <Skill name="Power Bi" x="2vw" y="12.5vw"/>
                <Skill name="Pandas" x="30vw" y="5vw"/>
                <Skill name="Numpy" x="-32vw" y="1vw"/>
                <Skill name="Looker Studio" x="-22vw" y="-5vw"/>
                <Skill name = {language === "es" ? "Estadística" : "Statistics"} x="-15vw" y="15vw"/>
                <Skill name="Git" x="15vw" y="20vw"/>
                <Skill name="Scrum" x="15vw" y="-20vw"/>
            </div>
        
        </>
    );
};

export default Skills;
