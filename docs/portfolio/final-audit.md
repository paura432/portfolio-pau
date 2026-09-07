# Auditoría de reconstrucción: PAU / SYSTEMS

Fecha: 2026-09-07. Alcance: fase 0 exclusivamente. Este documento no modifica UI, rutas ni contenido.

## Estado observado

- Rama actual: main. Árbol de trabajo limpio.
- main, feat/portfolio-2026-redesign y origin/main apuntan a 04e2047.
- Stack: Next 16, React 19, lucide-react y ESLint 9. No hay TypeScript, tests ni typecheck.
- Gates existentes: npm run lint y npm run build pasan.
- El rediseño previo eliminó R3F, Motion, Radix y Tailwind. La reducción de dependencias es correcta.

## Inventario

| Área | Estado | Veredicto |
| --- | --- | --- |
| Home | Hero editorial, selected work, experiencia, capacidades, Lab, archivo y contacto. | Más sobria, pero aún secuencia de secciones genéricas. |
| Selected work | DUPLEX, Spidio y TrustOS. | No cumple nueva jerarquía: OVI no existe y Spidio sigue destacado. |
| Case studies | Una única ruta dinámica para tres proyectos. | Copy conservador, composición común. |
| Lab | Cinco estudios prometidos; ninguno implementado. | Debe eliminarse o convertirse en Foundations/Design Practice. |
| Foundations | cub3D y Minishell solo aparecen en archivo. | P0 narrativo sin resolver. |
| i18n | Navegación y copy parcial ES/EN; proyectos y cases en inglés. | Incompleto. |
| CV | mailto con “CV available on request”. | No satisface descarga. |
| SEO | Metadata básica, OG, Twitter, robots sin sitemap. | Faltan dominio, metadataBase, canonical, sitemap y JSON-LD. |

## Implementación actual

### Conservar

- App Router y SSG de rutas de trabajo.
- next/image.
- Tokens mínimos de color, grid, espacio y temas por case study.
- Skip link, landmarks, objetivos táctiles de 44 px y prefers-reduced-motion.
- Dependencias reducidas.

### Sustituir

- PortfolioShell.jsx concentra home, navegación, idioma y tema; no escala a PAU / SYSTEMS.
- app/data/portfolio.js es JavaScript, compacto y plano; no expresa evidencia, confidencialidad, enlaces, traducciones o relaciones entre sistemas.
- app/work/[slug]/page.jsx fuerza misma composición para todos los proyectos.
- El manifiesto “Understand problem...” es genérico.
- Lab promete experiencias inexistentes.
- Spidio sigue priorizado pese al nuevo brief.

## Assets locales

| Asset | Estado | Decisión |
| --- | --- | --- |
| duplex (1).png — 1013×610 | Captura pequeña, aspecto temprano. | No usar como hero dominante. |
| trust-vcs.jpeg y trust-vcs-portal.png | Material disponible. | Retener para TrustOS tras revisión humana de confidencialidad. |
| spidio.png | Proyecto que deja de ser protagonista. | Retirar de selected work. |
| cub3d.png y minishell.png | Evidencia de Foundations. | Retener como apoyo de microexperiencias. |
| FraudeBec, PAN, NorteVerse | Archivo profesional secundario. | Conservar hasta curación final. |
| OVI | No hay asset, ruta ni dato local. | Bloqueador: no inventar UI, stack o métricas. |

No se encontró PDF CV o resume bajo /home/pau/pau. El repo no contiene contrato de asset para CV.

## Inventario público verificado

| Grupo | Evidencia | Uso seguro |
| --- | --- | --- |
| 42LIBFT, 42FT_PRINTF, 42GET_NEXT_LINE | Repos públicos C. | Fundamentos de memoria, librería y streams; auditar source antes de detallar decisiones. |
| 42PUSH_SWAP | Repositorio público C. | Nodo de algoritmos; falta revisión de estrategia. |
| 42PIPEX y 42MINISHELL | C público; README de Minishell documenta lexer, parser, pipes, redirecciones, fork, execve y dup2. | Pilar de procesos y parsing; apto para microexperiencia. |
| 42PHILOSOPHERS | Repo público; README no disponible en raíz. | Candidato de concurrencia; no afirmar comportamiento antes de inspeccionar philo/. |
| 42SO_LONG | README documenta .ber, validación, movimientos, collectibles, salida y MiniLibX. | Easter egg ligero, no ruta principal. |
| 42CUB3D | README documenta DDA, rayos por columna, fish-eye, texturas, FOV, colisiones y parsing .cub. | Pilar visual de Foundations: visualización 2D-rayos-columnas respaldable. |
| 42NET_PRACTICE | Niveles JSON y material de networking. | Nodo de networking, no card independiente. |
| 42CPPS | Directorios cpp00 a cpp08. | Cierre de Foundations: C/UNIX a C++. |
| Sofia | Next 16, TypeScript, next-intl y Motion. Homepage declarada: https://sofia-chi-gold.vercel.app | Candidato fuerte de Design Practice; atribuir implementación, no contenido editorial. |
| portfolio-diego | Next 14, TypeScript y live site declarado. | Requiere QA visual y revisión de autoría. |
| finance-dashboard | Python, manage.py, requirements, SQLite y despliegue. | Auditar antes de incluir. |

No hay repositorio público OVI en la cuenta auditada ni material OVI en el checkout. Tampoco hay evidencia para afirmar Graph, Outlook, Teams, Word, Excel, Calendar, OneDrive, SharePoint o RAG.

## Links y despliegue

- GitHub actual: https://github.com/paura432.
- LinkedIn en código está desactualizado. Reemplazo autorizado: https://www.linkedin.com/in/pau-ramos-sim%C3%B3-520751202/
- Email actual: pauramosimo@gmail.com.
- Sin configuración de Vercel, GitHub Pages, dominio, sitemap o canonical. No asumir dominio público.
- Remoto: git@github.com:paura432/portfolio-pau.git.

## Riesgos

### P0

1. OVI es protagonista solicitado sin evidencia disponible. Implementarlo ahora inventaría información.
2. No hay CV PDF publicable.
3. LinkedIn actual no coincide con URL facilitada.
4. Foundations no comunica los repos públicos más verificables.

### P1

1. Lab promete trabajo ficticio.
2. Spidio sigue destacado.
3. Cases comparten estructura.
4. i18n parcial.
5. SEO incompleto.
6. Hero/home no expresa todavía evolución systems-to-product.
7. DUPLEX y TrustOS requieren revisión humana de actualidad y confidencialidad.

## Bloqueadores de contenido

- Brief o fuente autorizada de OVI: objetivo, responsabilidad, tecnologías, integraciones permitidas, estado y assets saneados.
- CV PDF publicable o confirmación de que debe mantenerse por email.
- Dominio canónico.
- Confirmación de autoría y permisos de imágenes/contenido de Sofía.
- Estado actual de capturas DUPLEX y TrustOS.

## Conclusión

PAU / SYSTEMS es defendible: conecta producto actual, infraestructura, Foundations y Design Practice con evidencia real. No es defendible empezar por nueva UI ni por OVI hasta cerrar el mapa de contenido.

Veredicto de fase 0: **READY TO PLAN, BLOCKED FOR OVI IMPLEMENTATION**.
