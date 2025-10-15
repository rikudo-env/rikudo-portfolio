import { MessageCircle, Github, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, href: 'https://t.me/rikudoDev', label: 'Telegram' },
    { icon: Github, href: 'https://github.com/rikudo-env', label: 'GitHub' },
  ];

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Code className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-bold">rikudo</h3>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="mb-2">
              © {currentYear} rikudo. All rights reserved.
            </p>
            <p className="text-sm">
              Full-Stack Developer • Building innovative web solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
