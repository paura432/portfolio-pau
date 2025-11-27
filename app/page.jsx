'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react'
import Image from 'next/image'
import ParticlesBackground from './components/ParticlesBackground'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [data, setData] = useState(null)
  const [openProject, setOpenProject] = useState(null)

  const toggleAccordion = (i) => {
    setOpenProject(openProject === i ? null : i)
  }

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Failed to load data.json:', err))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const { offsetTop, offsetHeight } = el
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
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]/90">
        <div className="text-[#e8e8ea] text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <ParticlesBackground />
      <div className="relative z-20 min-h-screen bg-transparent text-[#e8e8ea]">

        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f] border-b border-[#1a1a1f]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Portfolio
            </span>

            <button
              className="md:hidden text-[#e8e8ea] p-2 hover:bg-[#1a1a1f] rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex gap-6 lg:gap-8 items-center">
              {['home', 'about', 'experience', 'education', 'skills', 'projects'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`transition-colors capitalize text-sm lg:text-base ${activeSection === section ? 'text-[#0066FF]' : 'text-[#e8e8ea] hover:text-[#0066FF]'
                    }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-[#0a0a0f] border-t border-[#1a1a1f]">
              <div className="px-4 py-4 flex flex-col gap-3">
                {['home', 'about', 'experience', 'education', 'skills', 'projects'].map(section => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="text-[#e8e8ea] hover:text-[#0066FF] capitalize py-2 px-3 rounded-lg hover:bg-[#1a1a1f] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {section}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* HOME */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent leading-tight">
              {data.personal.nombre}
            </h1>
            <div className="bg-[#1a1a1f]/90 p-6 sm:p-8 md:p-10 rounded-lg border border-[#2a2a2f]">
              <p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-[#b8b8ba]">{data.personal.titulo}</p>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#888890] px-2">{data.personal.descripcion}</p>

              <div className="flex gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3 bg-[#1a1a1f]/90 rounded-full hover:bg-[#0066FF]/90 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3 bg-[#1a1a1f]/90 rounded-full hover:bg-[#0066FF]/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href={`mailto:${data.personal.email}`}
                  className="p-3 sm:p-3 bg-[#1a1a1f]/90 rounded-full hover:bg-[#0066FF]/90 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>

              <a
                href="#projects"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 bg-[#1a1a1f]/90 p-4 sm:p-6 rounded-lg border border-[#2a2a2f]">
              {data.sobre_mi.parrafos.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-[#b8b8ba] leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Work Experience
            </h2>

            <div className="grid gap-6 sm:gap-8">
              {data.experiencia_laboral.map((job, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#1a1a1f]/90 p-4 sm:p-6 rounded-lg border border-[#2a2a2f]">
                  <Image
                    src={job.logo}
                    alt={job.empresa}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain bg-white p-2 w-16 h-16 sm:w-[70px] sm:h-[70px] flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#00a8ff]">{job.puesto}</h3>
                    <p className="text-[#e8e8ea] font-semibold text-sm sm:text-base">{job.empresa}</p>
                    <p className="text-[#888890] text-xs sm:text-sm mb-2 sm:mb-3">{job.fecha}</p>
                    <p className="text-[#b8b8ba] leading-relaxed text-sm sm:text-base">{job.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Education
            </h2>

            <div className="grid gap-6 sm:gap-8">
              {data.educacion_completa.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-[#1a1a1f]/90 p-4 sm:p-6 rounded-lg border border-[#2a2a2f]">
                  <Image
                    src={edu.logo}
                    alt={edu.centro}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain bg-white p-2 w-16 h-16 sm:w-[70px] sm:h-[70px] flex-shrink-0"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#00a8ff]">{edu.titulo}</h3>
                    <p className="text-[#e8e8ea] font-semibold text-sm sm:text-base">{edu.centro}</p>
                    <p className="text-[#888890] text-xs sm:text-sm mb-2 sm:mb-3">{edu.fecha}</p>
                    <p className="text-[#b8b8ba] leading-relaxed text-sm sm:text-base">{edu.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Skills
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {data.habilidades.map((cat, i) => (
                <div key={i} className="bg-[#1a1a1f]/90 p-4 sm:p-6 rounded-lg border border-[#2a2a2f]">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#0066FF]">{cat.categoria}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {cat.items.map((skill, j) => (
                      <span key={j} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0a0a0f]/90 rounded-full text-xs sm:text-sm border border-[#2a2a2f]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid gap-8 sm:gap-12">
              {data.proyectos.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1f]/90 rounded-lg border border-[#2a2a2f] overflow-hidden hover:border-[#0066FF] transition-all cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  {/* GRID: Imagen + Texto */}
                  <div className="grid md:grid-cols-2 gap-0">

                    {/* IMAGEN */}
                    <div className="w-full">
                      <Image
                        src={project.imagen}
                        alt={project.titulo}
                        width={1200}
                        height={700}
                        className="w-full h-auto object-contain bg-transparent md:rounded-l-lg"
                      />
                    </div>

                    {/* CONTENIDO */}
                    <div className="p-4 sm:p-6 flex flex-col justify-between bg-[#1a1a1f]/90">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#00a8ff]">
                          {project.titulo}
                        </h3>

                        <p className="text-sm sm:text-base text-[#b8b8ba] leading-relaxed mb-3 sm:mb-4">
                          {project.descripcion}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                          {project.tecnologias.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 bg-[#0a0a0f]/90 rounded-full text-xs border border-[#2a2a2f] text-[#888890]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DESPLEGABLE DEBAJO DE LA IMAGEN */}
                  {openProject === index && (
                    <div className="p-4 sm:p-6 bg-[#1a1a1f]/80 border-t border-[#2a2a2f] animate-fadeIn">
                      <h4 className="text-lg sm:text-xl font-bold mb-2 text-[#00a8ff]">
                        Detalle del proyecto
                      </h4>

                      <p className="text-sm sm:text-base text-[#b8b8ba] leading-relaxed mb-3 sm:mb-4">
                        {project.detalles ||
                          "Este proyecto incluye funcionalidades avanzadas, pero su código es privado."}
                      </p>

                      {project.funcionalidades && (
                        <ul className="list-disc list-inside text-[#888890] space-y-1 mb-3 sm:mb-4 text-sm sm:text-base">
                          {project.funcionalidades.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      )}
                      {project.github === "/#" && (
                        <p className="text-xs sm:text-sm text-[#666] mb-3">
                          The source code is not publicly available for privacy and security reasons.
                        </p>
                      )}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-gradient-to-r from-[#0066FF] to-[#00a8ff] rounded-lg text-sm sm:text-base hover:opacity-90 transition-opacity"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                        {project.github !== "/#" && (
                          <a
                            href={project.github}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.github === "/#") {
                                e.preventDefault();
                              }
                            }}
                            target={project.github !== "/#" ? "_blank" : ""}
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-[#0a0a0f]/90 rounded-lg border border-[#2a2a2f] hover:border-[#0066FF] text-sm sm:text-base transition-colors"
                          >
                            <Github size={16} /> Code
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-[#1a1a1f]">
          <div className="max-w-6xl mx-auto text-center text-[#888890] text-sm sm:text-base">
            <p>{data.contacto.copyright}</p>
          </div>
        </footer>
      </div>
    </>
  )
}