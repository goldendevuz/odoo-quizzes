export const quizData = [
  {
    id: "odoo",
    title: "Odoo Database Quiz",
    questions: [
      {
        question: "Within how many hours does an Odoo database need to be activated to ensure the full 15 day trial?",
        options: [
          "Four hours.",
          "Five hours.",
          "Zero hours, the database is automatically activated when you set it up.",
          "Three hours.",
        ],
        correctAnswer: "Three hours.",
      },
      {
        question: "What happens when a user is created in an Odoo database?",
        options: [
          "A password is automatically created and sent to the user's email address.",
          "An email is sent with a link to create a secure password to the Odoo database.",
          "No email is sent, the password appears on the screen.",
          "You can't create users from the main dashboard.",
        ],
        correctAnswer: "An email is sent with a link to create a secure password to the Odoo database.",
      },
      {
        question: 'What needs to be activated in order to see the "Load Demo Data" option?',
        options: [
          "Developer Mode.",
          "Nothing, demo data can be loaded without any special options turned on.",
          "Concierge Mode.",
          "Admin Mode.",
        ],
        correctAnswer: "Developer Mode.",
      },
      {
        question: "Which is true about installing new applications on the Odoo database?",
        options: [
          "Only your account manager can install new applications.",
          "Any user in the database can install applications.",
          "Go to the Settings app and install applications from the list of applications.",
          "As an administrator, go to the Apps module and click Install on the application that needs to be installed.",
        ],
        correctAnswer:
          "As an administrator, go to the Apps module and click Install on the application that needs to be installed.",
      },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js Basics Quiz",
    questions: [
      {
        question: "What is the main difference between the App Router and Pages Router in Next.js?",
        options: [
          "The App Router is slower but more flexible.",
          "The Pages Router supports React Server Components.",
          "The App Router uses a file-system based router built on React Server Components.",
          "There is no difference, they are just different names for the same thing.",
        ],
        correctAnswer: "The App Router uses a file-system based router built on React Server Components.",
      },
      {
        question: "In Next.js App Router, which file is used to define the main layout of your application?",
        options: ["page.tsx", "layout.tsx", "main.tsx", "app.tsx"],
        correctAnswer: "layout.tsx",
      },
      {
        question: 'What is the purpose of the "use client" directive in Next.js?',
        options: [
          "To optimize the application for client-side rendering only",
          "To mark a boundary between a Server Component and a Client Component",
          "To prevent the component from being server-side rendered",
          "To enable client-side data fetching",
        ],
        correctAnswer: "To mark a boundary between a Server Component and a Client Component",
      },
      {
        question: "How do you create dynamic routes in Next.js App Router?",
        options: [
          "By using the useRouter hook with dynamic parameters",
          "By creating a file with square brackets like [id].tsx",
          "By creating a folder with square brackets like [id]",
          "By adding a routes.config.js file to your project",
        ],
        correctAnswer: "By creating a folder with square brackets like [id]",
      },
    ],
  },
  {
    id: "react",
    title: "React Fundamentals Quiz",
    questions: [
      {
        question: "What is a React Hook?",
        options: [
          "A way to connect React to external APIs",
          'A special function that lets you "hook into" React features',
          "A design pattern for organizing large React applications",
          "A method to optimize React performance",
        ],
        correctAnswer: 'A special function that lets you "hook into" React features',
      },
      {
        question: "Which hook would you use to perform side effects in a function component?",
        options: ["useState", "useReducer", "useEffect", "useContext"],
        correctAnswer: "useEffect",
      },
      {
        question: "What is the correct way to update state in React?",
        options: [
          "Directly modify the state variable",
          "Use the setState function returned by useState",
          "Use the this.state property",
          "Create a new component with the updated state",
        ],
        correctAnswer: "Use the setState function returned by useState",
      },
      {
        question: "What is the purpose of the key prop when rendering lists in React?",
        options: [
          "It's required for styling list items",
          "It helps React identify which items have changed, are added, or are removed",
          "It determines the order of items in the list",
          "It's used to access list items from parent components",
        ],
        correctAnswer: "It helps React identify which items have changed, are added, or are removed",
      },
    ],
  },
]

