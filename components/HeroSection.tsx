"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hola, soy Alejandro!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Soy un{" "}
            <span className="font-semibold text-purple-600">
              Desarrollador Web Full Stack{" "}
            </span>
            ubicado en Bogotá, Colombia. Soy un entusiasta de la programación, y quiero ser parte de tu proyecto o de tu equipo de trabajo.
          </p>
          <div className="space-x-8 md:space-x-4">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Proyectos
            </Link>
            <Link
              to="https://wa.link/05qqqu"
              className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700 cursor-pointer"
              activeClass="active"
              rel="noreferrer"
              target="_blank"
              onClick={() => window.open('https://wa.link/05qqqu', '_blank')}
            >
                Contáctame
            </Link>
            {/*<Link
              to="https://drive.google.com/uc?id=1-EIhi4w3xviFyX-2EMaPLLqSt-4WFGuV&export=download"
              className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700"
              activeClass="active"
              rel="noreferrer"
              target="_blank"
              onClick={() => window.open('https://drive.google.com/uc?id=1-EIhi4w3xviFyX-2EMaPLLqSt-4WFGuV&export=download', '_blank')}
            >
                Mi CV en PDF
            </Link>*/}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
