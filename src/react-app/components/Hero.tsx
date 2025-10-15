import { useEffect, useState } from 'react';
import { ChevronDown, Github, MessageCircle } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-4 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="mb-8">
          <span className="text-gray-400 text-lg font-mono">Hello, I'm</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          rikudo
        </h1>
        
        <div className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
          <span className="font-mono text-white">&lt;</span>
          Full-Stack Developer
          <span className="font-mono text-white">/&gt;</span>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 font-light max-w-4xl mx-auto text-gray-400 leading-relaxed">
          Crafting innovative web solutions with expertise in frontend, backend, and DevOps. 
          Passionate about building scalable applications and leading teams to success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/rikudo-env"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/rikudoDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-16 text-sm text-gray-500 font-mono">
          Age: 21 • Experience: 3+ years
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
}
