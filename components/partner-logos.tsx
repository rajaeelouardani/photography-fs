import Image from "next/image"
import Link from "next/link"

const partners = [
  {
    name: "Université Moulay Ismail",
    logo: "/images/umi-logo.png",
    url: "https://www.umi.ac.ma/",
  },
  {
    name: "Faculté des Sciences de Meknès",
    logo: "/images/fsm-logo.png",
    url: "https://www.fs-umi.ac.ma/",
  },
  {
    name: "Tech Business Hub",
    logo: "/images/tbh-logo.png",
    url: "#",
  },
  {
    name: "IVR Club FSM",
    logo: "/images/ivr-logo.png",
    url: "https://ivrclubfs.com/",
  },
  {
    name: "Injaz Al Maghrib",
    logo: "/images/injaz-logo.png",
    url: "https://injazmorocco.org/",
  },
  {
    name: "TWINSHELP",
    logo: "/images/twinshelp-logo.png",
    url: "https://twinshelp.ma/",
  },
  {
    name: "UMI-MUN",
    logo: "/images/umi-mun-logo.png",
    url: "https://umi-mun.online",
  },
]

export default function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
      {partners.map((partner) => (
        <Link
          key={partner.name}
          href={partner.url}
          className="group relative h-24 flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm dark:shadow-gray-800/50 hover:shadow-md dark:hover:shadow-gray-700/50 transition-shadow border border-gray-200 dark:border-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-full w-full">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={`Logo ${partner.name}`}
              fill
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
