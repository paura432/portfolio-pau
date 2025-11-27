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
      <div className="relative z-20 min-h-screen bg-transpare/90nt text-[#e8e8ea]">

        {/* NAVBAR */}
        <nav className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-[#1a1a1f]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00a8ff] bg-clip-text text-transparent">
              Portfolio
            </span>

            <button className="md:hidden text-[#e8e8ea]" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex gap-8 items-center">
              {['home', 'about', 'experience', 'education', 'skills', 'projects'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`transition-colors capitalize ${activeSection === section ? 'text-[#0066FF]' : 'text-[#e8e8ea] hover:text-[#0066FF]'
                    }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-4">
              {['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'].map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-[#e8e8ea] hover:text-[#0066FF]"
                  onClick={() => setMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* HOME */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] bg-clip-text/90 text-transparent">
              {data.personal.nombre}
            </h1>
            <p className="text-3xl mb-4 text-[#b8b8ba]">{data.personal.titulo}</p>
            <p className="text-lg md:text-xl mb-8 text-[#888890]">{data.personal.descripcion}</p>

            <div className="flex gap-6 justify-center mb-8">
              <a href={data.personal.github} target="_blank" className="p-3 bg-[#1a1a1f]/90 rounded-full hover:bg-[#0066FF]/90">
                <Github size={24} />
              </a>
              <a href={data.personal.linkedin} target="_blank" className="p-3 bg-[#1a1a1f]/90 rounded-full hover:bg-[#0066FF]/90">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${data.personal.email}`} className="p-3 bg-[#1a1a1f]/90 rounded-full hover:bg-[#0066FF]/90">
                <Mail size={24} />
              </a>
            </div>

            <a href="#projects" className="px-8 py-4 bg-[#2a2a2f] bg-gradient-to-r from-[#0066FF] to-[#00a8ff] rounded-full font-semibold">
              View Projects
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] bg-clip-text/90 text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12 bg-[#1a1a1f]/90 p-6 rounded-lg border border-[#2a2a2f]">
              {data.sobre_mi.parrafos.map((p, i) => (
                <p key={i} className="text-lg text-[#b8b8ba] leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] bg-clip-text/90 text-transparent">
              Work Experience
            </h2>

            <div className="grid gap-8">
              {data.experiencia_laboral.map((job, index) => (
                <div key={index} className="flex items-start gap-6 bg-[#1a1a1f]/90 p-6 rounded-lg border border-[#2a2a2f]">
                  <Image
                    src={job.logo}
                    alt={job.empresa}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain bg-white p-2/90"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#00a8ff]">{job.puesto}</h3>
                    <p className="text-[#e8e8ea] font-semibold">{job.empresa}</p>
                    <p className="text-[#888890] text-sm mb-3">{job.fecha}</p>
                    <p className="text-[#b8b8ba] leading-relaxed">{job.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] bg-clip-text/90 text-transparent">
              Education
            </h2>

            <div className="grid gap-8">
              {data.educacion_completa.map((edu, i) => (
                <div key={i} className="flex items-start gap-6 bg-[#1a1a1f]/90 p-6 rounded-lg border border-[#2a2a2f]">
                  <Image
                    src={edu.logo}
                    alt={edu.centro}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain bg-white p-2/90"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-[#00a8ff]">{edu.titulo}</h3>
                    <p className="text-[#e8e8ea] font-semibold">{edu.centro}</p>
                    <p className="text-[#888890] text-sm mb-3">{edu.fecha}</p>
                    <p className="text-[#b8b8ba] leading-relaxed">{edu.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] bg-clip-text/90 text-transparent">
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {data.habilidades.map((cat, i) => (
                <div key={i} className="bg-[#1a1a1f]/90 p-6 rounded-lg border border-[#2a2a2f]">
                  <h3 className="text-2xl font-bold mb-4 text-[#0066FF]">{cat.categoria}</h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((skill, j) => (
                      <span key={j} className="px-4 py-2 bg-[#0a0a0f]/90 rounded-full text-sm border border-[#2a2a2f]">
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
        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] bg-clip-text/90 text-transparent">
              Featured Projects
            </h2>

            <div className="grid gap-12">
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
                        className="w-full h-auto object-contain bg-transparent rounded-l-lg"
                      />
                    </div>

                    {/* CONTENIDO */}
                    <div className="p-6 flex flex-col justify-between bg-[#1a1a1f]/90">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-[#00a8ff]">
                          {project.titulo}
                        </h3>

                        <p className="text-[#b8b8ba] leading-relaxed mb-4">
                          {project.descripcion}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tecnologias.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#0a0a0f]/90 rounded-full text-xs border border-[#2a2a2f] text-[#888890]"
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
                    <div className="p-6 bg-[#1a1a1f]/80 border-t border-[#2a2a2f] animate-fadeIn">
                      <h4 className="text-xl font-bold mb-2 text-[#00a8ff]">
                        Detalle del proyecto
                      </h4>

                      <p className="text-[#b8b8ba] leading-relaxed mb-4">
                        {project.detalles ||
                          "Este proyecto incluye funcionalidades avanzadas, pero su código es privado."}
                      </p>

                      {project.funcionalidades && (
                        <ul className="list-disc list-inside text-[#888890] space-y-1 mb-4">
                          {project.funcionalidades.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      )}
                      {project.github == "/#" && (
                        <p className="text-sm text-[#666]">
                          The source code is not publicly available for privacy and security reasons.
                        </p>
                      )}
                      <div className="flex gap-4 mt-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            className="flex items-center bg-[#2a2a2f] gap-2 mt-4 px-4 py-2 bg-gradient-/90to-r from-[#0066FF] to-[#00a8ff] rounded-lg"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                        {project.github !== "/#" && (
                        <a
                          href={project.github}
                          onClick={(e) => {
                            e.stopPropagation();   // No cerrar el accordion

                            if (project.github === "/#") {
                              e.preventDefault();
                            }
                          }}
                          target={project.github !== "/#" ? "_blank" : ""}
                          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#0a0a0f]/90 rounded-lg border border-[#2a2a2f] hover:border-[#0066FF]"
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
        <footer className="py-8 px-6 border-t border-[#1a1a1f]">
          <div className="max-w-6xl mx-auto text-center text-[#888890]">
            <p>{data.contacto.copyright}</p>
          </div>
        </footer>
      </div>
    </>
  )
}
