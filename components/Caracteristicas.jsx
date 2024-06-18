import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Limpieza en muebles de sala ',
    description: 'Procedimiento de limpieza detallado para mantener los muebles de sala en óptimas condiciones y buen estado.',
  },
  { name: 'Limpieza en muebles de comedor', description: 'Métodos eficaces para limpiar y mantener en buen estado los muebles del comedor.' },
  {
    name: 'Limpieza de colchones y almohadas',
    description: 'Métodos efectivos para limpiar y desinfectar colchones y almohadas, eliminando manchas y alérgenos.',
  },
  {
    name: 'Limpieza en tapicería y techo de vehículos',
    description: 'Técnicas especializadas para limpiar y mantener el techo de vehículos en perfecto estado.',
  },
  {
    name: 'Resultados inmediatos que te dejarán impresionado',
    description: ' Ofrecemos una promesa de beneficios rápidos y notables que causarán una fuerte impresión en el usuario.',
  },
  {
    name: 'Sin recargo a domicilio.',
    description: 'Servicio de entrega a domicilio sin costo adicional para el cliente.',
  },
  
  
  
]

export default function Example() {
  return (
    <div id='caracteristicas' className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-[#7ac2b5]">Lo que nos hace únicos</h2>
            <p className="mt-2 text-3xl text-center sm:text-left font-bold tracking-tight text-[#69aa9e] sm:text-4xl pt-8 sm:pt-0">Damos nueva vida a tus muebles o vehículos </p>
            <p className="mt-6 text-base text-center sm:text-left leading-7 text-[#7ac2b5] ">
           ¡Servicio 100% Garantizado !
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-5 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-[#69aa9e]">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-[#69aa9e]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-1">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
