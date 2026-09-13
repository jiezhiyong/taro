# Project Agents Overview

## Architecture Summary

- **Framework**: Taro (React) – cross‑platform UI framework for building mini‑programs, H5.
- **State Management**: **Zustand** store located in `src/store` for global state.
- **Styling**: Tailwind CSS with custom token‑backed utilities defined in `src/styles/globals.css` (tokens such as `bg-background`, `text-foreground`, `shadow-ring`, etc.).
- **Component Library**: **NutUI** (`@nutui/nutui-react-taro`) provides all UI primitives – buttons, inputs, cards, etc., adhering to the warm parchment design system.
- **Other Tooling**: Biome for linting/formatting, Tailwind JIT, and optional Chrome DevTools plugins for debugging.

## Interaction Flow

1. **Routing** – Taro's page router loads the appropriate page under `src/pages/*`.
2. **State** – Pages retrieve or update global state through Zustand stores.
3. **UI** – All visual elements use NutUI components styled with Tailwind token classes defined in the design system.
4. **Build / Deploy** – `npm run dev` launches the development server.
