import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({article, magazine, articleLink, time}) => {

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
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {article}
                </h3>
                <p>
                    {magazine}
                </p>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time}
                </span>
                <span> 
                    {articleLink && (
                        <a 
                            href={articleLink}
                            target="_blank"
                            className="text-primary dark:text-primaryDark capitalize"
                        >
                            <p>Publicación</p>
                        </a>
                    )}
                </span>
            </motion.div>
        </li>
    )
}
const Publications = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">Publicaciones</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        article="Apoptotic photoreceptor loss and alterned expression of lysosomal proteins in the nclf mouse model of neuronal ceroid lipofuscinosis" 
                        magazine="Ophthalmol Vis Sci"
                        time="2013" 
                        articleLink= "https://pubmed.ncbi.nlm.nih.gov/24084090/"
                    />
                    <Details
                        article="The distribution of mannose-6-phosphate receptors changes from newborns to adults in rat liver" 
                        magazine="Biochem Biophys Res Commun"
                        time="2011"
                        articleLink="https://pubmed.ncbi.nlm.nih.gov/21640079/"
                    />
                    <Details
                        article="Harmine spacifically inhibits proteins kinase DYRK1A and interferes with neurite formation" 
                        magazine="FEBS J"
                        time="2009"
                        articleLink="https://pubmed.ncbi.nlm.nih.gov/19796173/"
                    />
                    <Details
                        article="Organ-specific changes in the expression of mannose-6-phosphate receptors during postnatal development in rats" 
                        magazine="Cells Tissues Organs"
                        time="2009"
                        articleLink="https://pubmed.ncbi.nlm.nih.gov/18824840/"
                    />
                    <Details
                        article="Changes in phosphomannosyl ligands correlate with cation-dependent mannose-6-phosphate receptors in rat liver during perinatal development" 
                        magazine="Biochem Biophys Res Commun"
                        time="2006"
                        articleLink="https://pubmed.ncbi.nlm.nih.gov/16630551/"
                    />
                    <Details
                        article="Developmental differences between cation-independient and cation-dependent mannose-6-phosphate receptors in rat brain at perinatal stages" 
                        magazine="Res Dev Brain Res"
                        time="2005"
                        articleLink="https://pubmed.ncbi.nlm.nih.gov/15982751/"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Publications