#!/bin/bash

# Script para crear el portfolio completo en Next.js - Versión Azul con JSON
echo "🚀 Creando tu portfolio en Next.js (Negro y Azul)..."

# Crear estructura de carpetas
mkdir -p app

# Crear data.json
cat > data.json << 'EOFJSON'
{
  "personal": {
    "nombre": "Tu Nombre",
    "titulo": "Desarrollador Full Stack",
    "descripcion": "Creando experiencias digitales excepcionales con código limpio y diseño elegante",
    "email": "tu@email.com",
    "github": "https://github.com/tu-usuario",
    "linkedin": "https://linkedin.com/in/tu-usuario",
    "ubicacion": "Tu Ciudad, País"
  },
  "sobre_mi": {
    "parrafos": [
      "Soy un desarrollador apasionado por crear soluciones tecnológicas que mejoren la vida de las personas. Con experiencia en desarrollo full stack, me especializo en construir aplicaciones web modernas, escalables y eficientes.",
      "Mi enfoque combina código limpio, mejores prácticas y una atención especial a la experiencia del usuario. Me encanta aprender nuevas tecnologías y enfrentar desafíos técnicos complejos.",
      "Cuando no estoy programando, puedes encontrarme explorando nuevas herramientas, contribuyendo a proyectos open source, o compartiendo conocimiento con la comunidad de desarrolladores."
    ],
    "experiencia": {
      "titulo": "Experiencia",
      "descripcion": "+3 años desarrollando aplicaciones web y mobile"
    },
    "educacion": {
      "titulo": "Educación",
      "descripcion": "Título en Ingeniería de Software / Desarrollo Web"
    },
    "logros": {
      "titulo": "Logros",
      "descripcion": "Proyectos exitosos y clientes satisfechos"
    }
  },
  "habilidades": [
    {
      "categoria": "Frontend",
      "items": ["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      "categoria": "Backend",
      "items": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      "categoria": "Herramientas",
      "items": ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman"]
    },
    {
      "categoria": "Otros",
      "items": ["UI/UX Design", "SEO", "Testing", "Agile", "CI/CD", "Responsive Design"]
    }
  ],
  "proyectos": [
    {
      "titulo": "Proyecto 1",
      "descripcion": "Descripción de tu proyecto destacado. Explica qué problema resuelve y las tecnologías utilizadas.",
      "tecnologias": ["React", "Node.js", "MongoDB"],
      "link": "https://proyecto1.com",
      "github": "https://github.com/tu-usuario/proyecto1"
    },
    {
      "titulo": "Proyecto 2",
      "descripcion": "Otro proyecto importante. Destaca los desafíos técnicos que superaste y el impacto del proyecto.",
      "tecnologias": ["Next.js", "TypeScript", "Tailwind"],
      "link": "https://proyecto2.com",
      "github": "https://github.com/tu-usuario/proyecto2"
    },
    {
      "titulo": "Proyecto 3",
      "descripcion": "Proyecto adicional que muestra tus habilidades. Menciona resultados medibles si los tienes.",
      "tecnologias": ["Vue", "Firebase", "CSS"],
      "link": "https://proyecto3.com",
      "github": "https://github.com/tu-usuario/proyecto3"
    }
  ],
  "contacto": {
    "titulo": "Hablemos",
    "descripcion": "¿Tienes un proyecto en mente o simplemente quieres conectar? Me encantaría saber de ti. Envíame un mensaje y te responderé lo antes posible.",
    "copyright": "© 2024 Tu Nombre. Diseñado y desarrollado con pasión."
  }
}
EOFJSON

# Crear package.json
cat > package.json << 'EOF'
{
  "name": "mi-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
EOF

# Crear next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
EOF

# Crear tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Crear postcss.config.js
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Crear .gitignore
cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF

# Crear app/layout.jsx
cat > app/layout.jsx << 'EOF'
import './globals.css'

export const metadata = {
  title: 'Tu Nombre - Portfolio',
  description: 'Portfolio profesional de desarrollo web full stack',
  keywords: 'desarrollador, portfolio, react, next.js, full stack',
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    title: 'Tu Nombre - Portfolio',
    description: 'Portfolio profesional de desarrollo web',
    url: 'https://tu-dominio.com',
    siteName: 'Tu Nombre Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
EOF

# Crear app/globals.css
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: #0a0a0f;
  color: #e8e8ea;
}

@layer utilities {
  .animation-delay-100 {
    animation-delay: 100ms;
  }
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  .animation-delay-300 {
    animation-delay: 300ms;
  }
}
EOF

# Crear app/page.jsx con diseño azul y lectura de JSON
cat > app/page.jsx << 'EOFPAGE'
'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import portfolioData from '../data.json';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { personal, sobre_mi, habilidades, proyectos, contacto } = portfolioData;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ea] relative overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#1a1a24] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
            transition: 'left 0.5s, top 0.5s'
          }}
        />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#60a5fa] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-[#3b82f6] rounded-full opacity-10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 px-6 py-3 rounded-full bg-[#1a1a24]/80 backdrop-blur-lg border border-[#2a2a34]">
        <div className="flex gap-8">
          {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                activeSection === section 
                  ? 'text-[#3b82f6] font-bold' 
                  : 'text-[#b8b8ba] hover:text-[#e8e8ea]'
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 overflow-hidden">
            <h1 
              className="text-8xl md:text-9xl font-bold mb-4 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient 8s ease infinite'
              }}
            >
              {personal.nombre}
            </h1>
          </div>
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl text-[#b8b8ba] font-light" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              {personal.titulo}
            </p>
            <p className="text-lg md:text-xl text-[#8a8a8c] max-w-2xl mx-auto leading-relaxed">
              {personal.descripcion}
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-[#3b82f6]/50 transition-all duration-300 transform hover:scale-105"
            >
              Contáctame
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border-2 border-[#3b82f6] rounded-full text-[#3b82f6] font-semibold hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
            >
              Ver Proyectos
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-[#b8b8ba] hover:text-[#3b82f6] transition-colors duration-300">
              <Github size={28} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#b8b8ba] hover:text-[#3b82f6] transition-colors duration-300">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${personal.email}`} className="text-[#b8b8ba] hover:text-[#3b82f6] transition-colors duration-300">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 
            className="text-6xl md:text-7xl font-bold mb-16 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-[#b8b8ba]">
              {sobre_mi.parrafos.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-[#1a1a24] rounded-2xl border border-[#2a2a34] hover:border-[#3b82f6] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-xl">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{sobre_mi.experiencia.titulo}</h3>
                </div>
                <p className="text-[#b8b8ba]">{sobre_mi.experiencia.descripcion}</p>
              </div>
              <div className="p-6 bg-[#1a1a24] rounded-2xl border border-[#2a2a34] hover:border-[#3b82f6] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-xl">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{sobre_mi.educacion.titulo}</h3>
                </div>
                <p className="text-[#b8b8ba]">{sobre_mi.educacion.descripcion}</p>
              </div>
              <div className="p-6 bg-[#1a1a24] rounded-2xl border border-[#2a2a34] hover:border-[#3b82f6] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-xl">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{sobre_mi.logros.titulo}</h3>
                </div>
                <p className="text-[#b8b8ba]">{sobre_mi.logros.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 
            className="text-6xl md:text-7xl font-bold mb-16 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Habilidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {habilidades.map((skillGroup, index) => (
              <div 
                key={skillGroup.categoria}
                className="p-8 bg-[#1a1a24] rounded-2xl border border-[#2a2a34] hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]" />
                  <h3 className="text-2xl font-bold">{skillGroup.categoria}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-[#0a0a0f] rounded-full text-sm text-[#b8b8ba] border border-[#2a2a34] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 
            className="text-6xl md:text-7xl font-bold mb-16 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((project, index) => (
              <div 
                key={project.titulo}
                className="group bg-[#1a1a24] rounded-2xl border border-[#2a2a34] overflow-hidden hover:border-[#3b82f6] transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center">
                  <Code2 size={64} className="text-[#3b82f6] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.titulo}</h3>
                  <p className="text-[#b8b8ba] mb-4 leading-relaxed">{project.descripcion}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tecnologias.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-[#0a0a0f] rounded-full text-xs text-[#3b82f6] border border-[#2a2a34]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-semibold">Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm font-semibold">Código</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 
            className="text-6xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {contacto.titulo}
          </h2>
          <p className="text-xl text-[#b8b8ba] mb-12 max-w-2xl mx-auto leading-relaxed">
            {contacto.descripcion}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-[#3b82f6]/50 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>{personal.email}</span>
            </a>
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-[#3b82f6] rounded-full text-[#3b82f6] font-semibold hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-[#2a2a34]">
            <p className="text-[#8a8a8c]">
              {contacto.copyright}
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+Pro:wght@300;400;600&display=swap');
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
EOFPAGE

echo ""
echo "✅ ¡Archivos creados exitosamente! (Versión Azul con JSON)"
echo ""
echo "📦 Próximos pasos:"
echo "1. npm install"
echo "2. npm run dev"
echo ""
echo "📝 Para personalizar tu portfolio:"
echo "   Edita el archivo data.json con tu información"
echo ""
echo "🌐 Tu portfolio estará en http://localhost:3000"
echo ""
