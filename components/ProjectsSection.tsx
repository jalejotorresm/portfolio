import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Henry Dogs",
    description:
      "Proyecto individual de grado - Interfaz de Usuario. Hecho con: PostgreSQL, Express, React, Node.",
    image: "/project-img1.png",
    github: "https://github.com/jalejotorresm/Individual-Project-Henry-Dogs",
    link: "https://jatm-mipidogs.vercel.app/",
  },
  {
    name: "Psiconnect",
    description: "Proyecto grupal de grado - Aplicación web. Hecho con: React, Redux, HTML, MaterialUI.",
    image: "/project-img2.png",
    github: "https://github.com/Psiconnect/Psiconnect",
    link: "https://psiconnect.vercel.app/",
  },
  {
    name: "Lingua Franca",
    description:
      "Emprendimiento de Asesorías - Landing Page. Hecho con: React, HTML, ChakraUI.",
    image: "/project-img3.png",
    github: "https://github.com/Lingua-Franca-Colombia/lingua-franca",
    link: "https://lingua-franca.vercel.app/",
  },
  {
    name: "Star Wars REST API",
    description:
      "Proyecto de Integracion y Certificacion Upskilling Microservicios - Aplicacion Backend. Hecho con: NodeJS, Express, Mongoose, MongoDB, Docker, Docker Compose.",
    image: "/project-img4.png",
    github: "https://github.com/jalejotorresm/henry_starwars_ms",
    link: "https://pastebin.com/Fctr27AH",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Mis Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
