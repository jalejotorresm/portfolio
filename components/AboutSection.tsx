import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript" },
  { skill: "SQL" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "Rust" },
  { skill: "PHP" },
  { skill: "Linux Management" },
  { skill: "Wordpress" },
  { skill: "MySQL" },
  { skill: "PL/SQL" },
  { skill: "HTML + CSS3" },
  { skill: "PostgreSQL" },
  { skill: "ExpressJS" },
  { skill: "ReactJS" },
  { skill: "NodeJS" },
  { skill: "Idioma Inglés" },
  { skill: "Andragogía" },
  { skill: "Servicio al Cliente" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mi
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Conoce un poco sobre mi!
            </h1>
            <p>
              Hola, mi nombre es Alejandro, y soy un desarrollador web{" "}
              <span className="font-bold">{"dedicado"}</span>,
              <span className="font-bold">{" enfocado al detalle"}</span>, y
              <span className="font-bold">{" muy profesional"}</span> ubicado en Bogotá, Colombia.
            </p>
            <br />
            <p>
              Soy graduado de los bootcamps de Henry y Alura entre 2022 y 2023
              como Desarrollador Web Full Stack con manejo de diferentes tecnologías,
              y he realizado proyectos desde entonces.
            </p>
            <br />
            <p>
              Invierto mi tiempo libre en pasatiempos e intereses muy variados.
              Entre esos pasatimepos están leer, ver videos y escuchar música.
              Siempre busco nuevas experiencias que me den alegria y satisfacción, 
              mientras también aprendo cosas nuevas.
            </p>
            <br />
            <p>
              Considero que todos debemos{" "}
              <span className="font-bold text-purple-500">
                seguir creciendo y progresando
              </span>{" "}
              y me esfuerzo en hacer esto, soy un apasionado por la
              tecnología, y siempre deseo probar mis límites dentro de lo
              posible. Tengo mucha emoción de ver lo lejos que podré llegar con esta carrera,
              siempre abierto a nuevas oportunidades. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/*<Image
              src="/hero-image.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-8 md:left-16 md:z-0"
            />*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
