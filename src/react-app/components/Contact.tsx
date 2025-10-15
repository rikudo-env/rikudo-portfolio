import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Github } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@rikudoDev',
      href: 'https://t.me/rikudoDev',
      description: 'Preferred way to reach me'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'rikudo-env',
      href: 'https://github.com/rikudo-env',
      description: 'Check out my repositories'
    },

  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Готов к новым вызовам и интересным проектам.
              Свяжитесь со мной для обсуждения сотрудничества.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group border border-gray-700 rounded-lg p-8 hover:border-white transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white text-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <contact.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {contact.label}
                  </h3>

                  <p className="text-lg font-mono text-white mb-2">
                    {contact.value}
                  </p>

                  <p className="text-sm text-gray-400">
                    {contact.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`border border-gray-700 rounded-lg p-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
            <h3 className="text-2xl font-bold mb-4">Готов к сотрудничеству</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Работаю над проектами любой сложности. Имею большой опыт работы как в команде,
              так и на индивидуальных проектах. Ответственно отношусь к работе и соблюдению дедлайнов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/rikudoDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать в Telegram
              </a>

              <a
                href="https://github.com/rikudo-env"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
