# 🚀 ForgeCLI

**Deploy. Scale. Monitor — From Your Terminal.**

ForgeCLI is a cloud-native DevOps and deployment automation CLI that helps developers deploy, monitor, scale, and manage applications directly from the terminal.

Instead of manually handling Docker, Kubernetes, CI/CD pipelines, logs, and infrastructure workflows, developers can use simple commands like:

```bash
forge deploy
forge logs
forge scale
forge monitor
```

ForgeCLI simplifies modern deployment systems through an intuitive terminal-first experience while exposing developers to real-world backend and infrastructure engineering concepts.

---

## ✨ Features

### 🚀 Deployment Automation

- One-command deployments
- Dockerized application hosting
- Environment configuration
- Rollback support

### 📈 Monitoring & Logs

- Realtime logs
- CPU & memory monitoring
- Health checks
- Deployment analytics

### ⚡ CI/CD Workflows

- Automated deployment pipelines
- Build tracking
- Deployment history
- Git integration

### ☸ Kubernetes Support

- Pod scaling
- Service orchestration
- Container management
- Cluster workflows

### 🔐 Secure Infrastructure

- Environment variable management
- Secure deployments
- Authentication-ready architecture

### 🎯 Interactive Project Generator

- **Interactive template selection** — Browse and select from multiple project templates using an intuitive CLI menu
- **Template categories** — Templates grouped by category (Backend, Frontend, Full Stack, DevOps, Tooling)
- **Rich template descriptions** — View tech stack, tags, and detailed descriptions before selecting
- **Input validation** — Project names, directories, and template selections validated in real-time
- **Non-interactive mode** — Skip prompts with `--template` flag for scripting/automation
- **Project scaffolding** — Automatically generates project files, directories, and boilerplate code
- **6 built-in templates** — Node.js Express API, React Frontend, Next.js Full Stack, Python Flask API, Dockerized Node.js, CLI Tool

---

## 🛠 Example Workflow

> **Initialize Project (Interactive)**
> 
> ```bash
> forge init
> ```
> 
> Launches an interactive prompt where you select a template, enter a project name, and confirm the target directory — all with real-time validation and rich descriptions.
>
> **Initialize Project (Quick — Skip Prompts)**
>
> ```bash
> forge init my-api --template node-express-api
> ```
>
> **List All Available Templates**
>
> ```bash
> forge templates
> ```
>
> **Deploy Application**
> 
> ```bash
> forge deploy
> ```
> 
> **View Logs**
> 
> ```bash
> forge logs
> ```
> 
> **Scale Infrastructure**
> 
> ```bash
> forge scale 5
> ```
> 
> **Monitor Services**
> 
> ```bash
> forge monitor
> ```

---

## 🧠 Core Concepts Behind ForgeCLI

ForgeCLI is designed around modern infrastructure and scalable backend systems.  
The project includes concepts like:

- Distributed Systems
- Containerization
- Infrastructure Automation
- CI/CD Pipelines
- Monitoring Systems
- Load Balancing
- Reverse Proxies
- Cloud-native Architecture
- Queue Workers
- Realtime Systems

---

## 🏗 Architecture Overview

```
User Terminal
      |
   ForgeCLI
      |
 API Gateway
      |
------------------------------------------------
|            |             |                   |
Auth      Deployment    Monitoring         CI/CD
Service   Service       Service            Service
      |
 Message Queue
      |
------------------------------------------------
|                |                 |
Build Worker    Log Worker       Metrics Worker
      |
Docker/Kubernetes Cluster
      |
Hosted Applications
```

---

## ⚙ Tech Stack

**Frontend**
- React
- Next.js
- Tailwind CSS
- TypeScript

**Backend**
- Node.js
- Express / NestJS
- WebSockets

**DevOps**
- Docker
- Kubernetes
- Terraform
- GitHub Actions
- Nginx

**Databases**
- PostgreSQL
- Redis

**Monitoring**
- Prometheus
- Grafana
- Loki

---

## 🚀 Getting Started

**Clone Repository**

```bash
git clone https://github.com/your-username/ForgeCLI.git
cd ForgeCLI
```

**Install Dependencies**

```bash
npm install
```

**Setup Environment Variables**

```bash
cp .env.example .env
```

**Start Development Server**

```bash
npm run dev
```

---

## 📂 Project Structure

```
ForgeCLI/
│
├── bin/                  # CLI entry point
├── src/                  # Source code
│   ├── index.js          # Main logic (non-interactive init)
│   ├── templates.js      # Template definitions (6 templates)
│   ├── selector.js       # Interactive template selector
│   ├── validator.js      # Input validation utilities
│   └── generator.js      # Project scaffolding engine
├── apps/
│   ├── cli/
│   ├── api-server/
│   ├── dashboard/
│   └── docs-site/
│
├── packages/
│   ├── deployment-engine/
│   ├── monitoring/
│   ├── auth/
│   ├── websocket/
│   └── shared-types/
│
├── infrastructure/
│   ├── docker/
│   ├── kubernetes/
│   ├── terraform/
│   └── nginx/
│
├── docs/
├── scripts/
├── tests/
└── README.md
```

---

## 🌐 Vision

ForgeCLI aims to simplify modern deployment workflows while helping developers understand real-world DevOps and scalable infrastructure systems through a developer-friendly CLI experience.

The long-term goal is to build a powerful cloud-native automation ecosystem focused on:

- deployment simplicity,
- infrastructure visibility,
- scalable systems,
- and modern developer tooling.

---

## 📌 Future Scope

- Multi-cloud deployments
- AI-powered debugging
- Distributed worker systems
- Advanced monitoring dashboards
- Plugin ecosystem
- Infrastructure templates
- Realtime analytics