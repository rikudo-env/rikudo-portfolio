import { useEffect, useRef, useState } from 'react';
import { Server, Globe, Code, Database, Settings, Users } from 'lucide-react';

export default function About() {
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

  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Electron', 'Tauri', 'Radix UI', 'shadcn/ui']
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['NestJS', 'Node.js', 'Python (Flask)', 'Rust', 'C/C++ (изучаю)']
    },
    {
      category: 'Database & ORM',
      icon: Database,
      technologies: ['MongoDB', 'PostgreSQL', 'SQLite', 'Prisma', 'Drizzle', 'Knex']
    },
    {
      category: 'DevOps',
      icon: Settings,
      technologies: ['CI/CD', 'Server Administration', 'Shell Scripting', 'Docker']
    }
  ];

  const experience = [
    { icon: Code, label: 'Years of Experience', value: '3+' },
    { icon: Globe, label: 'Projects Completed', value: '15+' },
    { icon: Users, label: 'Team Collaborations', value: '5+' },
    { icon: Settings, label: 'Technologies Mastered', value: '20+' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About
              <span className="block text-white">Developer</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Меня зовут <strong className="text-white">rikudo</strong>, мне 21 год. 
                Я разработчик полного стека с обширным опытом в создании современных веб-приложений.
              </p>
              
              <p className="text-lg">
                Имею опыт в <strong className="text-white">DevOps</strong> - настройка CI/CD, 
                разворачивание серверов и их администрирование, написание shell скриптов 
                для улучшения работы экосистемы команды и локальной разработки.
              </p>
              
              <p className="text-lg">
                Разрабатывал <strong className="text-white">админ панели</strong>, 
                фронтенд для сайтов магазинов и многое другое. Имею опыт работы с 
                графиками и анимациями. Работал как в команде, так и на индивидуальных проектах.
              </p>
              
              <p className="text-lg">
                Активно изучаю <strong className="text-white">C/C++</strong> для решения более 
                сложных и углубленных задач, связанных с системным программированием.
              </p>
              
              <p className="text-lg">
                Очень <strong className="text-white">ответственно отношусь к работе</strong> в команде 
                и в целом к работе. Готов работать над проектами разной сложности, 
                так как есть очень много опыта.
              </p>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {experience.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center border border-gray-700 rounded-lg p-4 transform transition-all duration-500 hover:border-white ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold mb-8">Tech Stack</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className={`border border-gray-700 rounded-lg p-6 transform transition-all duration-500 hover:border-white ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className="w-6 h-6 text-white" />
                    <h4 className="text-xl font-semibold text-white">{skill.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-white hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
