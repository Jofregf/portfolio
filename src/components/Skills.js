import React from "react";
import {motion} from "framer-motion";

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
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 ">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:circularDarktMd
            sm:bg-circularLightSm sm:circularDarkSm">
                <motion.div 
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{scale:1.05}}
                >
                    Web
                </motion.div>
                <Skill name="Java" x="-5vw" y="-8vw"/>
                <Skill name="Spring Boot" x="10vw" y="-12vw"/>
                <Skill name="PostgreSQL" x="-21vw" y="-14vw"/>
                <Skill name="MySQL" x="30vw" y="-5vw"/>
                <Skill name="Postman" x="12vw" y="-21vw"/>
                <Skill name="HTML" x="-12vw" y="5vw"/>
                <Skill name="CSS" x="12vw" y="5vw"/>
                <Skill name="JavaScript" x="2vw" y="13vw"/>
                <Skill name="Node" x="30vw" y="5vw"/>
                <Skill name="Express" x="-31vw" y="1vw"/>
                <Skill name="NextJs" x="20vw" y="14vw"/>
                <Skill name="ReactJS" x="-25vw" y="10vw"/>
                <Skill name="Redux" x="-12vw" y="21vw"/>

            </div>
        
        </>
    );
};

export default Skills;
