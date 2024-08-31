# Question Application

## Overview

This is a fun and informative quiz application that explores mysterious and fascinating places around the world. It challenges users with various questions about geography, cultures, and natural wonders, providing an engaging way to test and expand their knowledge.

## Technologies

<img src="./public/icons/HTML.svg" width="48"> <img src="./public/icons/CSS.svg" width="48"> <img src="./public/icons/JavaScript.svg" width="48"><img src="./public/icons/Vite-Dark.svg" width="48"> <img src="./public/icons/VSCode-Dark.svg" width="48"> <img src="./public/icons/React-Dark.svg" width="48">

## Features

- **Welcome Screen**: A welcoming introduction with a brief description of the quiz and a button to start.
- **Question Display**: Shows one question at a time (for 30 seconds) with multiple-choice options.
- **Option Selection**: Users can select an option, which updates their score and records their answers. Users should wait for 4 seconds to see options.
- **Result Page**: Displays the final results and the user's score after completing the quiz.

## Components

- **`App.jsx`**: Wraps the `Welcome` component with a `QuestionProvider` context for state management.
- **`Welcome.jsx`**: Provides a welcome message and a button to start the quiz, toggling the visibility of the `Questions` component.
- **`Questions.jsx`**: Manages and displays the quiz questions, transitions between questions.
- **`Options.jsx`**: Renders the available options for each question and handles user selections.
- **`Result.jsx`**: Displays the final quiz results and integrates the `Score` component to show the user's score.
- **`Score.jsx`**: Displays the user's score with a detailed breakdown of each question's result.

## Context

- **`QuestionProvider.jsx`**: Provides context for managing quiz questions, user answers, scores, and other state-related functionality across the components.

## Installation

### Node.js Installation

Ensure that Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

### Vite Installation

Install Vite by running the following command:

```bash
npm create vite@latest
```
### Project Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ikaraozdemir/Question-App.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Question-App
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

 ## Live Demo

 Check out the live demo of the Question App [here.](https://unique-praline-2fb13d.netlify.app/)