import { Mail, MapPin, Phone } from "lucide-react";
import mublLogo from "@/assets/mubl-logo.png";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Events", href: "#events" },
  { name: "Achievements", href: "#achievements" },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: "📷" },
  { name: "Telegram", href: "#", icon: "✈️" },
  { name: "LinkedIn", href: "#", icon: "💼" },
  { name: "GitHub", href: "#", icon: "🐙" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={mublLogo} alt="MUBL Logo" className="h-12 w-auto invert" />
              <div>
                <h3 className="font-bold text-lg">MUBL</h3>
                <p className="text-sm opacity-70">Mirzo Ulugh Beg's Legacy</p>
              </div>
            </div>
            <p className="opacity-70 max-w-md mb-6 leading-relaxed">
              A student-led engineering club at New Uzbekistan University. We research, 
              build, publish, and lead in the fields of robotics, AI, and space technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 opacity-70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>New Uzbekistan University, Tashkent</span>
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:mubl@newuu.uz" className="hover:opacity-100 transition-opacity">
                  mubl@newuu.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} MUBL Club. All rights reserved.
          </p>
          <p className="text-sm opacity-50">
            Research. Build. Publish. Lead.
          </p>
        </div>
      </div>
    </footer>
  );
}
