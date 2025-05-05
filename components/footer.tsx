import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="relative h-24 w-24 mb-4">
            <Image src="/images/photography-logo-white.png" alt="Photography Logo" fill className="object-contain" />
          </div>
          <p className="text-sm mt-4">
            Le Photography Club FSM est dédié à l'art de la photographie et de la vidéographie au sein de la Faculté des
            Sciences de Meknès.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm hover:text-red-500 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-sm hover:text-red-500 transition-colors">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/videos" className="text-sm hover:text-red-500 transition-colors">
                Vidéos
              </Link>
            </li>
            <li>
              <Link href="/competitions" className="text-sm hover:text-red-500 transition-colors">
                Compétitions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm hover:text-red-500 transition-colors">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/cours" className="text-sm hover:text-red-500 transition-colors">
                Cours
              </Link>
            </li>
            <li>
              <Link href="/3d-camera" className="text-sm hover:text-red-500 transition-colors">
                3D Interactive
              </Link>
            </li>
            <li>
              <Link href="/partners" className="text-sm hover:text-red-500 transition-colors">
                Partenaires
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-red-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-500" />
              <a href="mailto:photographyfsm.pro@gmail.com" className="text-sm hover:text-red-500 transition-colors">
                photographyfsm.pro@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:0652226366" className="text-sm hover:text-red-500 transition-colors">
                0652226366
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/photographyfsm.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/photography-club-fsm-93a716363"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@PhotographyFSM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Photography Club FSM. Tous droits réservés par{" "}
          <a
            href="https://www.linkedin.com/in/rajae-elouardani-577892225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Rajae Elouardani
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
