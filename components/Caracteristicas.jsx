import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Limpieza y desinfección en muebles de sala ',
    description: 'Limpieza y tratamiento detallado a la tapicería de tus muebles de sala dependiendo la complejidad. Realizamos en el mismo sitio, evitando incomodarte en el traslado. Cuidamos tu piso ya sea baldosa, madera o flotante.',
  },
  { name: 'Limpieza y desinfección en muebles de comedor', description: 'Tratamiento detallado enfocado a la tapicería de tus muebles de comedor dependiendo la complejidad. Realizamos en el mismo sitio, evitando incomodarte en el traslado. Cuidamos tu piso ya sea baldosa, madera o flotante.' },
  {
    name: 'Limpieza y desinfección en colchones y almohadas',
    description: 'Tratamiento enfocado a evitar alergias en la piel y respiratorias en la tapicería de tu colchón. Realizamos en el mismo sitio, evitando incomodarte en el traslado. Cuidamos tu piso ya sea baldosa, madera o flotante.',
  },
  {
    name: 'Limpieza en tapicería de vehículos y autodetailing',
    description: 'Limpieza y desinfección de techo, asientos, alfombra, moquetas, limpieza y humectación en plásticos de todo el interior de tu vehículo. Realizamos el servicio en tu domicilio totalmente sin recargo.',
  },
  {
    name: 'Resultados inmediatos',
    description: ' Ofrecemos una promesa de beneficios rápidos y notables que causarán una fuerte impresión en el usuario.',
  },
  {
    name: 'Servicio a domicilio.',
    description: 'El servicio a tu domicilio no tiene recargo adicional.',
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
