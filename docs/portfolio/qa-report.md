# PAU / SYSTEMS — QA report

Fecha: 2026-09-07. Entorno: WSL / Next.js 16, producción local.

## Cobertura realizada

| Área | Resultado | Evidencia |
| --- | --- | --- |
| Rutas | PASS | `/`, OVI, DUPLEX, TrustOS, Foundations, cub3D, Minishell y Design devuelven HTTP 200. |
| Build | PASS | `pnpm build`: 11 rutas estáticas generadas. |
| Lint | PASS | `pnpm lint`. |
| Tipos | PASS | `pnpm typecheck`. |
| Enlaces internos | PASS | El árbol de accesibilidad expone enlaces a capítulos, Foundations y repositorios. |
| Enlaces externos | PASS por configuración | GitHub y LinkedIn usan las URLs oficiales definidas en `app/data/portfolio.ts`. |
| Accesibilidad base | PASS | Skip link, landmarks, headings ordenados, enlaces con nombre, controles nativos y equivalente textual de topology. |
| Touch/teclado | PASS por implementación | Navegación mediante enlaces, menú con botón, slider nativo y botón nativo; objetivos de 44 px. |
| Reduced motion | PASS por implementación | Las reglas CSS respetan `prefers-reduced-motion`. |

## Inspección visual realizada

- Home desktop: identidad, rol y Madrid son visibles al entrar; OVI y DUPLEX están en el primer bloque de sistemas.
- OVI desktop: se entiende como sistema privado y no se presentan secretos o una UI ficticia como producto real.
- cub3D: el árbol accesible expone el slider, su etiqueta y la explicación alternativa de mapa, rayos y columnas.

## Pendiente de instrumentación

No hay navegador automatizado ni binario de Chromium disponible en WSL para producir capturas reproducibles a 320, 390, 768, 1440, 1920 y 2560 px. La CSS contiene composiciones específicas para móvil y escritorio, pero este pendiente impide declarar una QA visual completa. Tampoco se ejecutó Lighthouse: no hay URL de producción ni navegador local compatible.

## Gates no disponibles

El proyecto no define script ni suite `test`; `pnpm test` no puede ejecutarse. No se añadió una suite vacía solo para crear una señal verde.

## Riesgos abiertos

1. Falta un PDF de CV real: no se enlaza un archivo inventado.
2. Falta dominio canónico: por ello no se añaden `metadataBase`, canonical, sitemap ni JSON-LD con URLs ficticias.
3. OVI continúa limitado deliberadamente a información pública autorizada.

## Conclusión

La implementación y sus rutas están sanas. El veredicto se mantiene en **READY WITH GAPS** hasta que los tres riesgos abiertos y la QA visual instrumentada se resuelvan.
