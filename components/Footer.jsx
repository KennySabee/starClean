import {BsInstagram, BsWhatsapp, BsTiktok, BsFacebook} from "react-icons/bs"
const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100092413653365&mibextid=ZbWKwL',
    icon: BsFacebook
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/starclean23?igsh=dTI5MmV4Mnhhemlm',
    icon: BsInstagram
    
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@starprocleanec?_t=8obVeQILLKX&_r=1',
    icon: BsTiktok
  },
  
  {
    name: 'WhatsApp',
    href: 'https://walink.co/2d2594',
    icon: BsWhatsapp
  },
]
const añoActual = new Date().getFullYear();


export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-around lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} target="_blanck" className="text-[#7ac2b5] hover:text-[#69aa9e]">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-[#69aa9e]">
            &copy; {añoActual} Star Pro Clean, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
