"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " ¿Quienes somos?",
    answer:
      "Somos una microempresa quiteña con 4 años de experiencia en el detalle de limpieza en tapicería. Para una mejor atención e información más detallada, ¡Comunícate con nosotros!",
  },{
    question: "¿Cuánto tiempo toma limpiar un sofá a domicilio?",
    answer:
      "El tiempo depende del nivel de complejidad en la limpieza, el material y el tratamiento que se deba aplicar. Aproximadamente 15 minutos por cada puesto.",
  },{
    question: "¿Cuánto tiempo toma la limpieza del interior de un vehículo a domicilio?",
    answer:
      "Realizamos una evaluación previa para especificar el tratamiento y producto a usar, también depende el tamaño del vehículo y la complejidad. Aproximadamente 4 horas sin incluir los detalles en limpieza y humectación de plásticos.",
  },
  {
    question: " ¿Qué productos utilizan para la limpieza?",
    answer:
      "Estamos pendientes de tu salud y tu comodidad, para todos nuestros servicios utilizamos desengrasantes industriales totalmente biodegradables que evitan alergias o irritaciones en su contacto, de igual manera usamos medidas exactas para un mejor tratamiento de la tapicería.",
  },
  {
    question: "¿Cuál es el procedimiento para contratar un servicio de limpieza?",
    answer:
      "Realizamos agendamiento bajo citas con 24 horas de anticipación y a su vez de manera inmediata. Luego, concretamos la fecha y hora para realizar el servicio de limpieza solicitado.",
  },
  {
    question: "¿Cuál es nuestro horario de trabajo?",
    answer:
      " Nuestro horario se adapta a tus necesidades. Coordinamos con el equipo ya sea temprano por la mañana o tarde para garantizar la mejor calidad de servicio. Trabajamos de lunes a domingo.",
  },
  {
    question: "¿Dónde estamos ubicados?",
    answer:
      "Realizamos el servicio a tu domicilio sin recargo alguno a todo el cantón de Quito. ¡Contáctanos y recupera la vida de tus muebles!",
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
