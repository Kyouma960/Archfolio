#####  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Repository Structure](#repository-structure)
- [ Modules](#modules)
- [ Getting Started](#getting-started)
    - [ Prerequisites](#prerequisites)
    - [ Installation](#installation)
    - [ Usage](#usage)
    - [ Tests](#tests)
- [ Project Roadmap](#project-roadmap)
- [ Contributing](#contributing)
- [ License](#license)
- [ Acknowledgments](#acknowledgments)

---

##  Overview

ArchFolio is an open-source portfolio project that offers a macOS-like user interface for showcasing personal content. Built using React and UnoCSS, it features dynamic desktop management, login functionality, application launchpad, and interactive components like FaceTime and VSCode integration. ArchFolio enhances user engagement with responsive design, markdown support, and customizable system settings, making it an innovative platform for presenting portfolios in a visually engaging manner. Leveraging GitHub Actions for automation, ArchFolio provides a seamless development and deployment experience for users seeking a modern and interactive portfolio showcase tool.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | This project adopts a modern architecture using Vite for build tools and React for the frontend. It leverages UnoCSS for styling and Katex for math rendering. The codebase is structured and organized, following best practices for a scalable web application. |
| 🔩 | **Code Quality**  | The codebase maintains a high level of quality with linting rules enforced using eslint. Development enhancements are provided through Vite plugins, ensuring clean, consistent, and maintainable code across the project. |
| 📄 | **Documentation** | The project includes detailed documentation through inline comments, configuration files, and GitHub Actions workflows. The documentation covers build scripts, linting configurations, UnoCSS settings, and deployment workflows, aiding developers in understanding and contributing to the project. |
| 🔌 | **Integrations**  | Key integrations and dependencies include React libraries, framer-motion, Katex for math rendering, web-vitals for performance monitoring, and zustand for state management. GitHub Actions automate testing, building, and deployment processes, enhancing the development workflow. |
| 🧩 | **Modularity**    | The codebase demonstrates modularity and reusability with components structured in a maintainable manner. The project follows a component-driven architecture, making it easy to extend and modify existing features while maintaining consistency and scalability. |
| ⚡️  | **Performance**   | The project focuses on efficiency and speed, utilizing Vite for fast build times and optimized development experience. UnoCSS and Katex contribute to performance improvements in styling and math rendering, enhancing the overall user experience. |
| 🛡️ | **Security**      | Security measures include linting rules for code quality, Husky for pre-commit hooks, and UnoCSS for consistent and secure styling practices. The project follows best practices for data protection, access control, and code security. |
| 📦 | **Dependencies**  | Key external libraries and dependencies include React, framer-motion, Katex, web-vitals, zustand for state management, and UnoCSS for consistent styling. These dependencies enhance functionality, styling capabilities, and performance optimization within the project. |

---

##  Repository Structure

```sh
└── ArchFolio/
    ├── .github
    │   └── workflows
    ├── LICENSE
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── public
    │   ├── img
    │   ├── logo
    │   ├── manifest.json
    │   ├── markdown
    │   ├── music
    │   └── screenshots
    ├── src
    │   ├── auto-imports.d.ts
    │   ├── components
    │   ├── configs
    │   ├── hooks
    │   ├── index.tsx
    │   ├── pages
    │   ├── stores
    │   ├── styles
    │   ├── types
    │   ├── utils
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── unocss.config.ts
    └── vite.config.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/Kyouma960/ArchFolio/blob/main/package.json) | Defines build, development, lint, and serve scripts using Vite. Manages linting with Husky and lint-staged. Dependencies include React libraries, framer-motion, Katex, web-vitals, and zustand. Dev dependencies feature eslint, husky, typescript, and Vite plugins. |
| [vite.config.ts](https://github.com/Kyouma960/ArchFolio/blob/main/vite.config.ts) | Configures Vite plugins for React, UnoCSS, and auto-imports. Resolves aliases for src directory. Enhances development environment within ArchFolio repository. |
| [eslint.config.js](https://github.com/Kyouma960/ArchFolio/blob/main/eslint.config.js) | Enhances linting by customizing rules for TypeScript and React, ensuring clean and consistent code quality across the repository. |
| [unocss.config.ts](https://github.com/Kyouma960/ArchFolio/blob/main/unocss.config.ts) | Defines UnoCSS configuration with custom color attributes, utility shortcuts, presets, and transformers to enhance styling capabilities and maintain consistency throughout the ArchFolio project. |
| [pnpm-lock.yaml](https://github.com/Kyouma960/ArchFolio/blob/main/pnpm-lock.yaml) | This code file implements a workflow for continuously integrating and deploying changes to the ArchFolio web application. By leveraging GitHub Actions in the.github/workflows directory, it automates the process of testing, building, and deploying the application based on triggers such as code pushes or pull requests. This ensures that any modifications made to the codebase are seamlessly integrated into the live environment, maintaining the stability and reliability of the ArchFolio web application. |
| [index.html](https://github.com/Kyouma960/ArchFolio/blob/main/index.html) | Defines main HTML structure and metadata for ArchFolios portfolio site, ensuring proper display and mobile compatibility. Includes links to iconography, manifest for app installation, and initializes Google Analytics script. |
| [tsconfig.json](https://github.com/Kyouma960/ArchFolio/blob/main/tsconfig.json) | Enforces strict TypeScript configurations for the ArchFolio project, ensuring ESNext target, React JSX compatibility, JSON module resolution, and isolated modules with consistent file naming. Paths mapped to the source directory for seamless module imports. |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [index.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/index.tsx) | Defines the entry point for the React application, managing boot, login, and desktop states. Renders components based on system status, enabling user interaction with the macOS-like interface. |
| [auto-imports.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/auto-imports.d.ts) | Defines global imports for key components, hooks, and React functionalities. Facilitates easy access to essential modules throughout the repository, enhancing code readability and maintainability. |
| [vite-env.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/vite-env.d.ts) | Augments HTML attribute types for React components with Unocss preset attributes. Enhances development experience by extending functionality and improving type safety within the repositorys React ecosystem. |

</details>

<details closed><summary>public</summary>

| File | Summary |
| --- | --- |
| [manifest.json](https://github.com/Kyouma960/ArchFolio/blob/main/public/manifest.json) | Defines macOS playgrounds manifest with app name, icons, and display settings for Nitesh Gautams Portfolio.Manifest configures branding, start URL, colors, and icon sizes enhancing the app's visual identity and user experience. |

</details>

<details closed><summary>src.utils</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/utils/index.ts) | Exports screen-related, URL, and constants utility functions for application-wide use. Facilitates modularization and maintainability by centralizing key functionality. Enhances cohesion and reusability within the architecture. |
| [screen.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/utils/screen.ts) | Enables full-screen functionality, checking and toggling fullscreen mode across browsers for the ArchFolio project. Supports seamless user experience within the web application environment, enhancing the visual element for better engagement. |
| [constants.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/utils/constants.ts) | Defines crucial layout constants for the parent repositorys front-end design, including minimum margins and app windows title bar height. Helps ensure consistent spacing and alignment throughout the user interface components. |
| [url.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/utils/url.ts) | Validates URLs using a regex pattern.$core utility for ensuring URL correctness within the ArchFolio projects functionality. |

</details>

<details closed><summary>src.stores</summary>

| File | Summary |
| --- | --- |
| [index.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/stores/index.ts) | Defines application state slices using Zustand for dock, system, and user data, combining related functionality for a cleaner architecture. |

</details>

<details closed><summary>src.styles</summary>

| File | Summary |
| --- | --- |
| [typora.css](https://github.com/Kyouma960/ArchFolio/blob/main/src/styles/typora.css) | Defines styling for markdown content within ArchFolio, applying consistent typography, spacing, and color schemes. Enhances readability by formatting headings, links, lists, tables, and code blocks. Improves user experience and design coherence throughout the repositorys web pages. |
| [index.css](https://github.com/Kyouma960/ArchFolio/blob/main/src/styles/index.css) | Organizes** global stylesheet imports for consistent design across components, enhancing user experience. |
| [bear.css](https://github.com/Kyouma960/ArchFolio/blob/main/src/styles/bear.css) | Defines styling for markdown content in the bear theme. Applies colors, fonts, spacing, and code block formatting. Enhances readability and visual hierarchy for headings, paragraphs, lists, code blocks, images, and tables within markdown content. |
| [component.css](https://github.com/Kyouma960/ArchFolio/blob/main/src/styles/component.css) | Defines styles for various components including login, spotlight, app window, dock, slider, and switch-toggle within the architecture. Enhances visual presentation and interactions for a cohesive user experience across the application. |
| [font.css](https://github.com/Kyouma960/ArchFolio/blob/main/src/styles/font.css) | Defines font styles for Avenir Next LT Pro and other fallback fonts, ensuring consistent typography across the web app. Integrates font loading via URLs for different weights and styles to enhance user experience within ArchFolio's design system. |
| [layout.css](https://github.com/Kyouma960/ArchFolio/blob/main/src/styles/layout.css) | Defines global layout styles for the apps HTML body and root element, ensuring zero margin and padding. Sets full height and prevents overflow to maintain a clean and consistent user interface. |

</details>

<details closed><summary>src.types</summary>

| File | Summary |
| --- | --- |
| [index.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/index.d.ts) | Defines interface for Mac actions and exports data interfaces related to configurations for the parent repositorys architecture. |

</details>

<details closed><summary>src.pages</summary>

| File | Summary |
| --- | --- |
| [Desktop.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/pages/Desktop.tsx) | Implements dynamic desktop UI with app management and interactions in React. Renders desktop wallpaper, top bar menu, windows for apps, spotlight, launchpad, and dock. Handles app opening, closing, minimizing, and maximizing. Dynamically updates UI based on user actions and app states. |
| [Login.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/pages/Login.tsx) | Implements a login interface with dynamic backgrounds, password validation, and user actions. Personalizes wallpaper based on time of day. Enables password input and actions like sleep, restart, and shutdown for the Mac interface. |
| [Boot.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/pages/Boot.tsx) | Implements a boot component for initiating system restarts or sleep modes, reflecting system boot progress visually. Handles user interactions to control booting state and loading animations, providing an engaging UI feedback mechanism within the ArchFolio repository architecture. |

</details>

<details closed><summary>src.hooks</summary>

| File | Summary |
| --- | --- |
| [useInterval.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/hooks/useInterval.ts) | Enables scheduling of callback functions at specified intervals, enhancing dynamic behavior within the ArchFolio web application. |
| [useBattery.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/hooks/useBattery.ts) | Enables monitoring battery status, providing real or mock data based on browser support. Implemented with hooks for efficient state management. Facilitates battery-related functionality within the repositorys frontend architecture. |
| [useClickOutside.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/hooks/useClickOutside.ts) | Enables tracking clicks outside specified elements within the ArchFolio repository structure. Integrates event handling for excluding certain elements. |
| [index.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/hooks/index.ts) | Exports hooks to handle click outside, intervals, window size, audio, and battery usage. These hooks contribute to the projects frontend functionality, enhancing user interaction and overall experience. |
| [useWindowSize.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/hooks/useWindowSize.ts) | Enables dynamic resizing tracking for window width and height in ArchFolios frontend, enhancing responsive behavior without unnecessary re-renders. |
| [useAudio.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/hooks/useAudio.ts) | Enables audio playback control and state management in ArchFolios repository. Provides functions for playing, pausing, toggling, and adjusting volume in HTML audio elements. Handles auto-replay feature and updates audio state accordingly. |

</details>

<details closed><summary>src.configs</summary>

| File | Summary |
| --- | --- |
| [user.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/user.ts) | Defines user data for the application, setting the users name, avatar image, and password. Centralizes user information for easy access throughout the project. |
| [terminal.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/terminal.tsx) | Defines terminal data structure for personal info, interests, and dreams. Organizes data in folders and files mimicking a terminal interface. Displays content with links and styling. |
| [launchpad.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/launchpad.ts) | List essential launchpad apps with metadata in `launchpad.ts` for ArchFolio. Supports dynamic launchpad feature with titles, images, and corresponding links. Enhances user experience by providing quick access to external projects directly from the dashboard. |
| [index.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/index.ts) | Exports multiple config modules for apps, user, and UI elements from separate files within the `configs` directory. These modules provide crucial configuration settings for various components used across the application, enhancing flexibility and maintenance. |
| [apps.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/apps.tsx) | Defines an array of application data with unique IDs, titles, and configurations like window dimensions and content components. Crucial for populating the Launchpad interface with app icons and functionalities. |
| [wallpapers.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/wallpapers.ts) | Defines wallpaper images for day and night modes. Centralizes configuration in a dedicated file within the `configs` directory. Enhances user interface customization by easily swapping wallpapers based on the theme. |
| [websites.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/websites.ts) | Defines frequently visited and favorite websites data for ArchFolio UI, aiding in quick access to essential links. Organized with titles, images, and links for seamless navigation within the web application. |
| [bear.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/bear.tsx) | Defines bear content structure for personal portfolio, including sections like Profile with markdown files and icons, and Projects with linked README files for showcasing projects. Facilitates easy management and display of portfolio items within the architecture. |
| [music.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/configs/music.ts) | Defines music configurations for the project, including title, artist, cover image, and audio source. Organized under the configurations module to streamline access to music data across the application. |

</details>

<details closed><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [Launchpad.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/Launchpad.tsx) | Implements an interactive Launchpad component that dynamically filters and displays apps. Utilizes search functionality and dark mode settings from the configuration module to customize the appearance. Supports app launching with external links. |
| [Spotlight.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/Spotlight.tsx) | Enables interactive app search and launch, spotlighting relevant details. Utilizes search functionality, keyboard navigation, and dynamic content updates. Facilitates seamless app exploration and quick access within the application ecosystem. |
| [AppWindow.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/AppWindow.tsx) | Implements dynamic resizable windows with traffic lights for maximizing, minimizing, and closing within the ArchFolio repositorys frontend architecture. Windows maintain aspect ratios and drag/resize functions, enhancing user interactivity. |

</details>

<details closed><summary>src.stores.slices</summary>

| File | Summary |
| --- | --- |
| [user.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/stores/slices/user.ts) | Defines a user slice for Zustand state management. Manages Markdown content and FaceTime images. Implements functions to set, add, and delete image entries. Essential for user-specific data handling in ArchFolios frontend architecture. |
| [system.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/stores/slices/system.ts) | Defines a Zustand state slice for system settings, handling dark mode, volume, brightness, connectivity toggles, and fullscreen mode with corresponding actions. Facilitates centralized state management for system-related user interface elements in the ArchFolio application. |
| [dock.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/stores/slices/dock.ts) | Defines state slice for dock size and magnification in store using Zustand, enhancing modularity and state management in the architecture. |

</details>

<details closed><summary>src.types.configs</summary>

| File | Summary |
| --- | --- |
| [apps.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/apps.d.ts) | Defines structure for app data in the ArchFolio project. This interface specifies properties like title, image, dimensions, and visibility. It plays a crucial role in managing and rendering different applications within the system. |
| [index.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/index.d.ts) | Apps, Bear notes, Launchpad, Music, Terminal, User, Wallpaper, Websites. This centralizes data access for components throughout the ArchFolio repository, enhancing consistency and maintainability. |
| [websites.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/websites.d.ts) | Defines interfaces for site and website data structures within the parent repositorys architecture. Specifies site-related information like titles, images, and links, organized into sections for favorites and frequently visited sites. |
| [bear.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/bear.d.ts) | Defines interfaces for Bear notes data structure to streamline integration with Bear notes service in ArchFolio. |
| [music.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/music.d.ts) | Defines the structure for music data in the project, encapsulating details such as title, artist, cover image, and audio file path. Integrates with components and pages for seamless music-related functionalities. |
| [user.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/user.d.ts) | Defines the structure for user data in the ArchFolio repository. Critical for managing user information and ensuring consistent data handling across components and pages. |
| [terminal.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/terminal.d.ts) | Defines terminal data structure for ArchFolio, enabling flexible organization of dynamic content with customizable titles and types. Children can nest under parent terminals to create hierarchical views. |
| [wallpaper.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/wallpaper.d.ts) | Defines WallpaperData interface structuring day and night image URLs for dynamic wallpaper configuration in ArchFolios src/types/configs. Contributing to theme customization, it enhances user experience and visual appeal across the application. |
| [launchpad.d.ts](https://github.com/Kyouma960/ArchFolio/blob/main/src/types/configs/launchpad.d.ts) | Defines LaunchpadData interface to structure data for project launchpads; including ID, title, image URL, and link. Vital for maintaining consistent data format in the ArchFolio repositorys configurations section. |

</details>

<details closed><summary>src.components.menus</summary>

| File | Summary |
| --- | --- |
| [TopBar.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/menus/TopBar.tsx) | Defines and renders a customizable top bar on the web interface. Manages display of various menus, date/time, system controls, and dynamic elements like Wi-Fi status. Facilitates user interactions like logging out and system shutdown, enhancing the user experience and interface functionality. |
| [ControlCenterMenu.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/menus/ControlCenterMenu.tsx) | Enables control center customization by toggling settings such as Wi-Fi, Bluetooth, and Dark Mode. Offers sliders for adjusting brightness and volume, alongside music playback controls. Follows a modular architecture within the repository for efficient management. |
| [AppleMenu.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/menus/AppleMenu.tsx) | Creates an Apple-styled menu with logout, shutdown, restart, and sleep options. Integrates a click-outside functionality for seamless user experience within the ArchFolio repositorys frontend architecture. |
| [WifiMenu.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/menus/WifiMenu.tsx) | Defines a Wi-Fi menu component-Allows toggling Wi-Fi state-Utilizes useStore and useClickOutside hooks-Renders Wi-Fi toggle switch within menu-Maintains responsiveness with tailwind CSS classes |
| [base.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/menus/base.tsx) | Defines reusable menu components for creating interactive and styled menus. MenuItem supports click actions, while MenuItemGroup organizes menu items with optional borders. These components enhance user experience and maintain consistency in the projects frontend architecture. |
| [Battery.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/menus/Battery.tsx) | Displays battery status with dynamic visual indicators. Determines bar width and color based on charge level and charging status. Includes percentage, icon, and lightning charging animation. |

</details>

<details closed><summary>src.components.apps</summary>

| File | Summary |
| --- | --- |
| [VSCode.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/apps/VSCode.tsx) | Implements a component showcasing VSCode within an iframe, styled with a full size and dark background. Links directly to a GitHub repository README for interactive usage. |
| [Terminal.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/apps/Terminal.tsx) | Implements a terminal interface with interactive commands for navigating and interacting with file system-like data. Features rain animation, command history, auto-complete, and help menu. Displays file content, moves between directories, and clears the screen. Users can navigate and interact through a command-line interface. |
| [Bear.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/apps/Bear.tsx) | Enables rendering Markdown content with syntax highlighting, math support, and external links. Dynamically fetches and displays markdown files with adjustable sidebars and content panes. Enhances user experience with image URL fixes and a clean, intuitive interface within ArchFolios folder structure. |
| [Brave.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/apps/Brave.tsx) | Enables browsing functionality with tabs and a privacy report, offering favorites and frequently visited sections. Dynamically handles user-entered URLs, ensuring proper formatting and fallback search. Displays content based on internet connectivity, providing a seamless browsing experience within the Safari clone. |
| [FaceTime.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/apps/FaceTime.tsx) | Enables FaceTime functionality with webcam integration, image capture, and save options. Displays a sidebar with recent images and interactive features. Facilitates seamless user experience within the ArchFolio repositorys React-based application structure. |
| [Typora.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/apps/Typora.tsx) | Implements a Markdown editor using @milkdown/core and @milkdown/react in ArchFolios src/components/apps/Typora.tsx. Integrates commonmark, gfm presets, history plugin, and listener functionality. Allows typing and renders markdown in a typora-styled interface. |

</details>

<details closed><summary>src.components.dock</summary>

| File | Summary |
| --- | --- |
| [Dock.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/dock/Dock.tsx) | Enables dynamic app launching from the dock interface. Utilizes motion values for interactivity, adjusting based on user interaction. Enhances user experience by toggling launchpad visibility and opening apps seamlessly. Contributing to the fluidity and accessibility of the application. |
| [DockItem.tsx](https://github.com/Kyouma960/ArchFolio/blob/main/src/components/dock/DockItem.tsx) | Implements dynamic hover animation for DockItem images based on mouse position and dock settings, enhancing user interaction. It adjusts image width smoothly, responding to mouse movements. Integrates React and Framer Motion libraries with custom hooks for an engaging desktop experience. |

</details>

<details closed><summary>.github.workflows</summary>

| File | Summary |
| --- | --- |
| [deploy.yaml](https://github.com/Kyouma960/ArchFolio/blob/main/.github/workflows/deploy.yaml) | Implements automated deployment workflow using GitHub Actions. Orchestrates CI/CD pipeline for ArchFolio frontend, ensuring seamless deployment to production. Integrates with existing repository structure to streamline deployment process. |

</details>

---

##  Getting Started

###  Prerequisites

**TypeScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the ArchFolio repository:
```sh
❯ git clone https://github.com/Kyouma960/ArchFolio
```

2. Navigate to the project directory:
```sh
❯ cd ArchFolio
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ npm run build && node dist/main.js
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Kyouma960/ArchFolio/issues)**: Submit bugs found or log feature requests for the `ArchFolio` project.
- **[Submit Pull Requests](https://github.com/Kyouma960/ArchFolio/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Kyouma960/ArchFolio/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Kyouma960/ArchFolio
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Kyouma960/ArchFolio/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Kyouma960/ArchFolio">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
