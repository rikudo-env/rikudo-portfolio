import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Bot, Store, User, Film } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'bot', label: 'Telegram Bot' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Telegram Bot - Косметика',
      description: 'Телеграм бот с магазином косметики. Полнофункциональная система заказов.',
      category: 'bot',
      technologies: ['Next.js', 'NestJS', 'Prisma', 'Telegram API'],
      link: 'https://t.me/elseda74m_bot',
      github: null,
      icon: Bot,
      status: 'Live'
    },
    {
      id: 2,
      title: 'Пирог За Часок',
      description: 'Фронтенд сайта для магазина пирогов с современным дизайном и удобным UX.',
      category: 'frontend',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://pirogzachasok.com/',
      github: null,
      icon: Store,
      status: 'Live'
    },
    {
      id: 3,
      title: 'Portfolio - Haitanskaya',
      description: 'Индивидуальный сайт портфолио/визитка с элегантным дизайном.',
      category: 'frontend',
      technologies: ['Next.js', 'CSS', 'Responsive Design'],
      link: 'https://haitanskaya.netlify.app/',
      github: null,
      icon: User,
      status: 'Live'
    },
    {
      id: 4,
      title: 'MoviesLab',
      description: 'Библиотека фильмов - википедия с подробной информацией о фильмах.',
      category: 'fullstack',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Movie API'],
      link: 'https://movieslab.onrender.com/',
      github: null,
      icon: Film,
      status: 'Live'
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Примеры работ, которые я могу показать. Остальные проекты под NDA.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group border border-gray-800 rounded-lg p-6 hover:border-white transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <project.icon className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-green-400 border border-green-400 px-2 py-1 rounded text-xs">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="border border-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Больше проектов</h3>
            <p className="text-gray-400 leading-relaxed">
              У меня есть множество других проектов, которые находятся под NDA (соглашение о неразглашении). 
              Эти проекты включают в себя корпоративные приложения, админ панели, 
              и системы управления контентом для различных клиентов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
