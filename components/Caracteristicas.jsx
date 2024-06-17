import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Limpieza en muebles de sala ',
    description: 'En Itaca, tu mascota merece lo mejor. Nuestras camas para perros premium combinan elegancia y comodidad. ¡Dales el lujo que se merecen!',
  },
  { name: 'Limpieza en muebles de comedor', description: '100% Calidad Garantizada. Hecho en Ecuador con los mejores materiales. Tu mascota merece lo mejor.' },
  {
    name: 'Limpieza de colchones y almohadas',
    description: 'Descubre la felicidad de las mascotas a través de nuestras reseñas positivas. ¡Únete a la comunidad satisfecha de Itaca!.',
  },
  {
    name: 'Limpieza en tapicería y techo de vehículos',
    description: 'Simplifica tu vida con nuestras camas de madera para perros: llegan ensambladas y listas para que tu amigo peludo descanse de inmediato.',
  },
  {
    name: 'Resultados inmediatos que te dejarán impresionado',
    description: ' Nuestras camas de madera para perros son fáciles de limpiar, garantizando comodidad e higiene para tu mascota.',
  },
  {
    name: 'Sin recargo a domicilio.',
    description: 'Ofrece a tu perro lo mejor: nuestras camas cuentan con cojines de espuma premium y capa de plumón para un descanso lujoso.',
  },
  
  
  
]

export default function Example() {
  return (
    <div id='caracteristicas' className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-950">Lo que nos hace únicos</h2>
            <p className="mt-2 text-3xl text-center sm:text-left font-bold tracking-tight text-gray-900 sm:text-4xl pt-8 sm:pt-0">Eleva el encanto de tu hogar y cuida a tu mejor amigo</p>
            <p className="mt-6 text-base text-center sm:text-left leading-7 text-gray-600">
           ¡Servicio 100% Garantizado !
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-5 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-gray-950" aria-hidden="true" />
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
