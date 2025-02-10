This project demonstrates a Node.js application following clean architecture principles.

## Structure

- \`backend/\`: Contains the main application code
  - \`src/\`: Source code following clean architecture
    - \`domain/\`: Business entities and interfaces
    - \`application/\`: Use cases and business logic
    - \`infrastructure/\`: External implementations
    - \`interfaces/\`: Controllers and routes

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

## Run Docker Container

\`\`\`bash
docker run -d -p 3000:3000 live-up-clip-backend-service
\`\`\`