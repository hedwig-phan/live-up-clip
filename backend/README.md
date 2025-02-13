# Backend Service
This project demonstrates a Node.js application following clean architecture principles.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Container**: Docker

## Structure

- \`backend/\`: Contains the main application code
  - \`src/\`: Source code following clean architecture
    - \`domain/\`: Business entities and interfaces
    - \`application/\`: Use cases and business logic
    - \`infrastructure/\`: External implementations
    - \`interfaces/\`: Controllers and routes

## Prerequisites
- Docker and Docker Compose
- Node.js 18+
- npm

## Getting Started

1. Navigate to the backend directory:
   \`\`\`bash
   cd backend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`" > README.md

## Build Docker Image

\`\`\`bash
docker build -t live-up-clip-backend-service .   
\`\`\`

### Run Docker Container

\`\`\`bash
docker run -d -p 3000:3000 live-up-clip-backend-service
\`\`\`

### Start all services

\`\`\`bash
docker compose up -d
\`\`\`

### Stop all services

\`\`\`bash
docker compose down
\`\`\`

### View logs

\`\`\`bash
docker logs -f live-up-clip-backend-service
\`\`\`

## Prisma

### Generate Prisma Client

\`\`\`bash
npx prisma generate
\`\`\`

### Run Migrations

\`\`\`bash
npx prisma migrate dev
\`\`\`

### Create a new migration
Update the User model in Prisma schema and run the following command to create a new migration:
\`\`\`bash
npx prisma migrate dev --name <migration-name>
\`\`\`

### Apply migrations

\`\`\`bash
npx prisma migrate deploy
\`\`\`







