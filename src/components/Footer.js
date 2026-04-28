"use client";
import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base ">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span className="text-dark/75 dark:text-light/75">
                    {new Date().getFullYear()} &copy; {" "}
                    {language === "es" 
                        ? "Todos los derechos reservados" 
                        : "All Rights Reserved"}
                </span>
                <div className="flex items-center lg:py-2">
                    {language === "es" ? "Realizada con" : "Made with"}
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                        &#9825;
                    </span>
                        {language === "es" ? "por" : "by"}&nbsp;
                    <p className="underline">Guillermo Jofre</p>
                </div>
                <Link 
                    href="mailto:jofregf@gmail.com" 
                    target={"_blank"}
                >
                    {language === "es" ? "Contáctame" : "Contact me"}
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
