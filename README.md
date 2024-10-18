# AI Video Generator

This project is an AI-powered video generator built with React.js, Express.js, Node.js, GPTScript, and Tailwindcss. It allows users to create custom videos using artificial intelligence.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- AI-powered video generation
- User-friendly interface built with React.js
- Server-side processing with Express.js and Node.js
- GPTScript integration for enhanced AI capabilities
- Responsive and modern design using Tailwindcss

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git

## Installation

1. Clone the repository:
   ```
   https://github.com/soamtripathy/videourl-ai.git
   ```

2. Navigate to the project directory:
   ```
   cd videourl-ai
   ```

3. Install the dependencies for both the client and server:
   ```
   npm install
   cd client
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   GPTSCRIPT_API_KEY=your_gptscript_api_key
   ```

## Usage

1. Start the server:
   ```
   npm run dev
   ```

2. In a new terminal, start the client:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Project Structure

```
ai-video-generator/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used

- [React.js](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [GPTScript](https://gptscript.com/) - AI integration (Note: Replace with actual GPTScript link if different)
- [Tailwindcss](https://tailwindcss.com/) - CSS framework

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.