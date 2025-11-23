'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(jsonData => setData(jsonData))
      .catch(err => console.error('Error cargando data.json:', err))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-[#e8e8ea] text-xl">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ea]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/95 backdrop-blur-sm z-50 border-b border-[#1a1a1f]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Portfolio
            </span>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#e8e8ea]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-8">
              {['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`transition-colors capitalize ${
                    activeSection === section
                      ? 'text-[#0066FF]'
                      : 'text-[#e8e8ea] hover:text-[#0066FF]'
                  }`}
                >
                  {section.replace('-', ' ')}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4">
              {['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors capitalize ${
                    activeSection === section
                      ? 'text-[#0066FF]'
                      : 'text-[#e8e8ea] hover:text-[#0066FF]'
                  }`}
                >
                  {section.replace('-', ' ')}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
            {data.personal.nombre}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-[#b8b8ba]">
            {data.personal.titulo}
          </p>
          <p className="text-lg md:text-xl mb-8 text-[#888890]">
            {data.personal.descripcion}
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-8">
            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1f] rounded-full hover:bg-[#0066FF] transition-all transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1f] rounded-full hover:bg-[#0066FF] transition-all transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              className="p-3 bg-[#1a1a1f] rounded-full hover:bg-[#0066FF] transition-all transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#proyectos"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] rounded-full font-semibold hover:shadow-lg hover:shadow-[#0066FF]/50 transition-all transform hover:scale-105"
          >
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {data.sobre_mi.parrafos.map((parrafo, index) => (
              <p key={index} className="text-lg text-[#b8b8ba] leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[data.sobre_mi.experiencia, data.sobre_mi.educacion, data.sobre_mi.logros].map((item, index) => (
              <div key={index} className="bg-[#1a1a1f] p-6 rounded-lg border border-[#2a2a2f] hover:border-[#0066FF] transition-all">
                <h3 className="text-xl font-bold mb-2 text-[#0066FF]">{item.titulo}</h3>
                <p className="text-[#b8b8ba]">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
            Habilidades
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.habilidades.map((categoria, index) => (
              <div key={index} className="bg-[#1a1a1f] p-6 rounded-lg border border-[#2a2a2f]">
                <h3 className="text-2xl font-bold mb-4 text-[#0066FF]">{categoria.categoria}</h3>
                <div className="flex flex-wrap gap-3">
                  {categoria.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#0a0a0f] rounded-full text-sm border border-[#2a2a2f] hover:border-[#0066FF] transition-all"
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
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>

          <div className="grid gap-8">
            {data.proyectos.map((proyecto, index) => (
              <div
                key={index}
                className="bg-[#1a1a1f] rounded-lg border border-[#2a2a2f] hover:border-[#0066FF] transition-all overflow-hidden group"
              >
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Image Column */}
                  {proyecto.imagen && (
                    <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content Column */}
                  <div className={`${proyecto.imagen ? 'md:col-span-3' : 'md:col-span-5'} p-6`}>
                    <h3 className="text-2xl font-bold mb-3 text-[#0066FF] group-hover:text-[#00a8ff] transition-colors">
                      {proyecto.titulo}
                    </h3>
                    <p className="text-[#b8b8ba] mb-4 leading-relaxed">
                      {proyecto.descripcion}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {proyecto.tecnologias.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0a0a0f] rounded-full text-xs border border-[#2a2a2f] text-[#888890]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] rounded-lg hover:shadow-lg hover:shadow-[#0066FF]/50 transition-all"
                      >
                        <ExternalLink size={16} />
                        <span>Ver Proyecto</span>
                      </a>
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0f] rounded-lg border border-[#2a2a2f] hover:border-[#0066FF] transition-all"
                      >
                        <Github size={16} />
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-[#0f0f14]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
            {data.contacto.titulo}
          </h2>
          <p className="text-lg text-[#b8b8ba] mb-8 leading-relaxed">
            {data.contacto.descripcion}
          </p>

          <div className="flex gap-6 justify-center mb-8">
            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1a1a1f] rounded-full hover:bg-[#0066FF] transition-all transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1a1a1f] rounded-full hover:bg-[#0066FF] transition-all transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              className="p-4 bg-[#1a1a1f] rounded-full hover:bg-[#0066FF] transition-all transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          <a
            href={`mailto:${data.personal.email}`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] rounded-full font-semibold hover:shadow-lg hover:shadow-[#0066FF]/50 transition-all transform hover:scale-105"
          >
            Enviar Mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1f]">
        <div className="max-w-6xl mx-auto text-center text-[#888890]">
          <p>{data.contacto.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
