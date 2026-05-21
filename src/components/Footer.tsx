import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import mublLogo from "@/assets/mubl-logo.png";

const navigationColumns = [
  [
    { name: "Projects", href: "/projects" },
    { name: "Programs", href: "/programs" },
    { name: "Highlights", href: "/highlights" },
  ],
  [
    { name: "Ideas", href: "/ideas" },
    { name: "Resources", href: "/resources" },
    { name: "Join", href: "/join" },
  ],
];

export function Footer() {
  return (
    <footer className="border-t border-blue-300/10 bg-[#071120]/95 text-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={mublLogo} alt="MUBL Logo" className="h-12 w-auto invert" />
              <div>
                <h3 className="font-bold text-lg">MUBL</h3>
                <p className="text-sm text-slate-400">Mirzo Ulugh Beg&apos;s Legacy</p>
              </div>
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-slate-400">
              A student-led engineering club at New Uzbekistan University. We research, 
              build, publish, and lead in the fields of robotics, AI, and space technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <div className="grid grid-cols-2 gap-8">
              {navigationColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-3">
                  {column.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-slate-400 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://yandex.com/maps/-/CPs1VIn5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  <span>New Uzbekistan University, Tashkent</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:mubl@newuu.uz" className="transition-colors hover:text-white">
                  mubl@newuu.uz
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Send className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://t.me/marvelousacosmos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @marvelousacosmos
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/company/mirzo-ulugh-beg-s-legacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Mirzo Ulugh Beg&apos;s Legacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MUBL Club. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Developed by{" "}
            <a
              href="https://enkd.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-400 transition-colors hover:text-white"
            >
              enkd.uz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
