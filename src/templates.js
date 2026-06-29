/**
 * Template definitions for ForgeCLI.
 * Each template includes metadata about the project structure to scaffold.
 */

function getTemplates() {
  return [
    {
      name: 'node-express-api',
      label: 'Node.js Express API',
      description: 'A RESTful API server built with Express.js, including routing, middleware, error handling, and environment configuration.',
      tags: ['node', 'express', 'api', 'rest', 'backend'],
      techStack: ['Node.js', 'Express', 'JavaScript'],
      category: 'Backend',
      files: [
        { path: 'package.json', content: '{\n  "name": "express-api",\n  "version": "1.0.0",\n  "main": "src/index.js",\n  "scripts": {\n    "start": "node src/index.js",\n    "dev": "nodemon src/index.js"\n  },\n  "dependencies": {\n    "express": "^4.18.2",\n    "cors": "^2.8.5",\n    "dotenv": "^16.3.1",\n    "helmet": "^7.1.0"\n  }\n}' },
        { path: 'src/index.js', content: "const express = require('express');\nconst cors = require('cors');\nconst helmet = require('helmet');\nrequire('dotenv').config();\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.use(helmet());\napp.use(cors());\napp.use(express.json());\n\napp.get('/', (req, res) => {\n  res.json({ message: 'Welcome to your Express API!' });\n});\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\n" },
        { path: '.env.example', content: 'PORT=3000\nNODE_ENV=development\n' },
        { path: 'README.md', content: '# Express API\n\nA RESTful API built with Express.js.\n\n## Getting Started\n\n```bash\nnpm install\nnpm start\n```\n' },
      ],
    },
    {
      name: 'react-frontend',
      label: 'React Frontend App',
      description: 'A modern React single-page application with component architecture, routing, and state management boilerplate.',
      tags: ['react', 'frontend', 'spa', 'ui', 'javascript'],
      techStack: ['React', 'JavaScript (ES6+)', 'CSS3'],
      category: 'Frontend',
      files: [
        { path: 'package.json', content: '{\n  "name": "react-app",\n  "version": "1.0.0",\n  "private": true,\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-router-dom": "^6.20.0"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build"\n  },\n  "devDependencies": {\n    "react-scripts": "5.0.1"\n  }\n}' },
        { path: 'public/index.html', content: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>React App</title></head><body><div id="root"></div></body></html>' },
        { path: 'src/App.js', content: "import React from 'react';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <h1>Welcome to React</h1>\n    </div>\n  );\n}\n\nexport default App;\n" },
        { path: 'src/App.css', content: '.App {\n  text-align: center;\n  padding: 2rem;\n}\n' },
        { path: 'src/index.js', content: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);\n" },
      ],
    },
    {
      name: 'nextjs-fullstack',
      label: 'Next.js Full Stack',
      description: 'A full-stack Next.js application with API routes, SSR, static generation, and Tailwind CSS styling.',
      tags: ['nextjs', 'fullstack', 'react', 'ssr', 'tailwind'],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
      category: 'Full Stack',
      files: [
        { path: 'package.json', content: '{\n  "name": "nextjs-app",\n  "version": "1.0.0",\n  "private": true,\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start"\n  },\n  "dependencies": {\n    "next": "^14.0.3",\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  },\n  "devDependencies": {\n    "autoprefixer": "^10.4.16",\n    "postcss": "^8.4.32",\n    "tailwindcss": "^3.3.6"\n  }\n}' },
        { path: 'pages/index.js', content: "import Head from 'next/head';\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>Next.js App</title>\n      </Head>\n      <main>\n        <h1 className=\"text-4xl font-bold text-center mt-10\">Welcome to Next.js!</h1>\n      </main>\n    </div>\n  );\n}\n" },
        { path: 'tailwind.config.js', content: "module.exports = {\n  content: ['./pages/**/*.js', './components/**/*.js'],\n  theme: { extend: {} },\n  plugins: [],\n};\n" },
        { path: 'postcss.config.js', content: "module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};\n" },
        { path: 'styles/globals.css', content: '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' },
      ],
    },
    {
      name: 'python-flask-api',
      label: 'Python Flask API',
      description: 'A lightweight Python Flask REST API with structured routing, error handling, and environment configuration.',
      tags: ['python', 'flask', 'api', 'rest', 'backend'],
      techStack: ['Python', 'Flask', 'Python-dotenv'],
      category: 'Backend',
      files: [
        { path: 'requirements.txt', content: 'flask==3.0.0\npython-dotenv==1.0.0\nflask-cors==4.0.0\n' },
        { path: 'app.py', content: "from flask import Flask, jsonify\nfrom dotenv import load_dotenv\nimport os\n\nload_dotenv()\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return jsonify({'message': 'Welcome to Flask API!'})\n\nif __name__ == '__main__':\n    app.run(debug=True, port=int(os.getenv('PORT', 5000)))\n" },
        { path: '.env.example', content: 'PORT=5000\nFLASK_ENV=development\n' },
        { path: 'README.md', content: '# Flask API\n\nA REST API built with Flask.\n\n## Setup\n\n```bash\npip install -r requirements.txt\npython app.py\n```\n' },
      ],
    },
    {
      name: 'docker-node-app',
      label: 'Dockerized Node.js App',
      description: 'A Node.js application fully containerized with Docker, featuring multi-stage builds and Docker Compose setup.',
      tags: ['docker', 'node', 'container', 'devops', 'backend'],
      techStack: ['Node.js', 'Docker', 'Docker Compose'],
      category: 'DevOps',
      files: [
        { path: 'package.json', content: '{\n  "name": "docker-node-app",\n  "version": "1.0.0",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "dependencies": {\n    "express": "^4.18.2"\n  }\n}' },
        { path: 'server.js', content: "const express = require('express');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello from Dockerized Node.js!' });\n});\n\napp.listen(PORT, () => console.log(`App running on port ${PORT}`));\n" },
        { path: 'Dockerfile', content: 'FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install --production\nCOPY . .\nEXPOSE 3000\nCMD ["node", "server.js"]\n' },
        { path: 'docker-compose.yml', content: 'version: "3.8"\nservices:\n  app:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - PORT=3000\n' },
        { path: '.dockerignore', content: 'node_modules\nnpm-debug.log\n.git\n' },
      ],
    },
    {
      name: 'cli-tool',
      label: 'CLI Tool (Commander)',
      description: 'A command-line interface tool scaffold using Commander.js, with subcommands, options, and help documentation.',
      tags: ['cli', 'commander', 'node', 'tooling'],
      techStack: ['Node.js', 'Commander.js', 'Chalk'],
      category: 'Tooling',
      files: [
        { path: 'package.json', content: '{\n  "name": "my-cli",\n  "version": "1.0.0",\n  "bin": {\n    "mycli": "./bin/mycli.js"\n  },\n  "dependencies": {\n    "chalk": "^4.1.2",\n    "commander": "^11.1.0"\n  }\n}' },
        { path: 'bin/mycli.js', content: "#!/usr/bin/env node\nconst { program } = require('commander');\n\nprogram\n  .name('mycli')\n  .description('A custom CLI tool')\n  .version('1.0.0');\n\nprogram\n  .command('greet <name>')\n  .description('Greet a user')\n  .action((name) => {\n    console.log(`Hello, ${name}!`);\n  });\n\nprogram.parse();\n" },
        { path: 'README.md', content: '# My CLI Tool\n\nA command-line tool built with Commander.js.\n\n## Usage\n\n```bash\nnode bin/mycli.js greet John\n```\n' },
      ],
    },
  ];
}

module.exports = { getTemplates };