"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " ¿Quienes somos?",
    answer:
      "Somos una empresa con más de 4 años de experiencia en el sector de limpiezas. Nos gusta ser claros y ofrecer toda la información posible para ayudarte en tus decisiones.",
  },{
    question: "¿Cuánto tiempo toma limpiar un sofá a domicilio?",
    answer:
      "El tiempo de limpieza de un sofá a domicilio puede variar según el tamaño del sofá y el nivel de suciedad. Por lo general, el proceso de limpieza puede tomar entre 1 y 2 horas",
  },{
    question: "¿Cuánto tiempo toma limpiar un vehiculo sedan a domicilio?",
    answer:
      "El tiempo de limpieza de un sofá a domicilio puede variar según el tamaño del vehiuclo y el nivel de suciedad. Por lo general, el proceso de limpieza puede tomar entre 3 y 4 horas",
  },
  {
    question: " ¿Qué productos utilizan para la limpieza?",
    answer:
      "Utilizamos productos industriales adaptados para cada tipo de limpieza, presentando una reducida agresividad con los materiales. Evitamos utilizar materiales ácidos o abrasivos.",
  },
  {
    question: "¿Cuál es el procedimiento para contratar un servicio de limpieza?",
    answer:
      "Tras ponerte en contacto con nosotros, acordamos una visita previa para valorar lo que deseas realizar. En menos de 24 horas, ofrecemos un presupuesto ajustado sin compromiso. Luego, concretamos la fecha y horario para realizar el servicio de limpieza",
  },
  {
    question: "¿Cuál es nuestro horario de trabajo?",
    answer:
      " Nuestro horario se adapta a tus necesidades. Coordinamos equipos de limpieza de mañana y tarde para garantizar la mejor calidad de servicio.",
  },
  {
    question: "¿Dónde estamos ubicados?",
    answer:
      "Estamos disponibles en el valle de los chillos para atenderte en nuestras oficinas. ¡Contáctanos y recupera la frescura de tus muebles! .",
  },
  
]

export default function Example() {
  return (
    <div id='faqs' className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-center  text-[#7ac2b5]">¿Tienes preguntas sobre nuestros servicios de limpieza? </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7 ">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center ">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
