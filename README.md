# Color Clock

A React application that displays the current date and time.
The clock updates every second and uses date-fns for formatting.

## Features

- Date displayed above the time
- Time shown with seconds and AM/PM
- Fall colors with a yellow background and burnt-orange border
- Baskerville Old Face font, with fallback fonts
- Responsive clock layout

## Technologies

- React
- JavaScript and JSX
- Vite
- CSS
- date-fns

## Run Locally

Install Node.js and npm before running this project.

1. Clone this repository using its GitHub URL:
   ```bash
   git clone <repository-url>
   ```

2. Enter the project folder:
   ```bash
   cd color-clock
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the Local URL displayed in the terminal.

Keep the terminal running while viewing the application.

## Project Structure

- src/App.jsx: Clock component and timer logic
- src/App.css: Clock layout and styling
- src/index.css: Page background and fonts
- src/main.jsx: Renders the React application
- package.json: Dependencies and npm scripts