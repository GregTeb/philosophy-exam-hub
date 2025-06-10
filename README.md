Philosophy Exam Hub

A web application designed to help students prepare for philosophy exams by providing access to exam tickets (questions) in Ancient Philosophy and Logic. Users can browse questions, view official answers, and switch between light and dark themes for a comfortable experience.

Features





Browse Exam Tickets: View questions, official answers, and explanations for Ancient Philosophy and Logic.



Tab Navigation: Switch between sections (Ancient Philosophy, Logic) using an intuitive tab interface.



Light/Dark Theme: Toggle between light and dark modes for better readability.



Responsive Design: Clean and user-friendly UI with custom CSS styling.



Data Management: Tickets are stored in a JSON file (tickets.json) for easy access and maintenance.

Tech Stack





Frontend: React, TypeScript



Styling: Custom CSS



Data Management: JSON (tickets.json)



Build Tool: Create React App



Type Safety: TypeScript interfaces for robust data structures

Getting Started

Prerequisites





Node.js (v18 or higher)



npm (v8 or higher)

Installation





Clone the repository:

git clone https://github.com/your-username/philosophy-exam-hub.git
cd philosophy-exam-hub



Install dependencies:

npm install



Start the development server:

npm start

The app will be available at http://localhost:3000.

Project Structure

philosophy-exam-hub/
├── public/                  # Static assets (e.g., favicon)
├── src/
│   ├── assets/             # Images (sun.svg, moon.svg for theme toggle)
│   ├── components/         # React components
│   │   ├── TabNavigator.tsx  # Tab navigation component
│   │   └── TabContent.tsx    # Ticket display component
│   ├── data/               # JSON data
│   │   └── tickets.json    # Exam tickets data
│   ├── types/              # TypeScript interfaces
│   │   └── tickets.d.ts    # Interfaces for tickets
│   ├── App.tsx             # Main app component
│   ├── App.css             # Custom styles
│   └── index.tsx           # Entry point
├── README.md               # Project documentation
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration

Usage





Navigate Sections: Use the tab navigator to switch between Ancient Philosophy and Logic.



View Tickets: Browse questions, official answers, and explanations for each section.



Toggle Theme: Click the theme toggle button (sun/moon icon) to switch between light and dark modes.

Contributing

Contributions are welcome! To contribute:





Fork the repository.



Create a new branch (git checkout -b feature/your-feature).



Commit your changes (git commit -m "Add your feature").



Push to the branch (git push origin feature/your-feature).



Open a Pull Request.

Please ensure your code is type-safe and follows the existing structure.

Future Plans





Add functionality to create new tickets via a form.



Implement user answers for tickets (using the userAnswer field).



Add search functionality to filter tickets by keywords.



Support additional philosophy sections (e.g., Ethics, Metaphysics).



Deploy the app to a hosting platform (e.g., Vercel, Netlify).



Improve accessibility and add unit tests.
