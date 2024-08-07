export default function Hero() {
    const collections = [
        {
          name: "Muebles",
          href: '#',
          imageSrc: 'https://res.cloudinary.com/kennysabee/image/upload/v1718731385/starClean/Hero/muebles.jpg',
          imageAlt: 'Muebles.',
        },
        {
          name: "Vehiculos",
          href: '#',
          imageSrc: 'https://res.cloudinary.com/kennysabee/image/upload/v1718731385/starClean/Hero/techoAuto.jpg',
          imageAlt: 'Techo Carro.',
        },
        {
          name: 'Colchones',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/kennysabee/image/upload/v1718731385/starClean/Hero/colchon.jpg',
          imageAlt: 'Colchones.',
        },
      ]
  return (
    <main>
        {/* Hero section */}
    <div className="relative" id="inicio">
    {/* Background image and overlap */}
    <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
      <div className="relative w-full flex-1 bg-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/kennysabee/image/upload/v1718732510/starClean/Hero/central.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
    </div>

    <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
      {/* Background image and overlap */}
      <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/kennysabee/image/upload/v1718732305/starClean/Hero/central.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="h-48 w-full bg-white" />
      </div>
      <div className="relative py-32">
        <h1 className="text-4xl font-bold tracking-tight text-[#7ac2b5] sm:text-5xl md:text-6xl">Star Pro Clean</h1>
        <h3 className="mt-4 sm:mt-8 text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">Confianza en cada servicio,<br></br> calidad en cada detalle</h3>
        <div className="mt-4 sm:mt-8">
          <a
            href="/#caracteristicas"
            className="inline-block rounded-md border border-transparent bg-[#7ac2b5] px-8 py-3 font-medium text-white hover:bg-[#69aa9e]"
          >
            Servicios
          </a>
        </div>
      </div>
    </div>

    <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
      <h2 id="collection-heading" className="sr-only">
        Collections
      </h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
        {collections.map((collection) => (
          <div
            key={collection.name}
            className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
          >
            <div>
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 overflow-hidden ">
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">
                  Limpieza y desinfección 
                  </p>
                  <h3 className="mt-1 font-semibold text-white">
                    <a href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
    </main>
    
  );
}
