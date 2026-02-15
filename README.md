# Tech Event Schedule Website

This project is a simple, single-page website designed to display the schedule for a one-day technical conference. It features a clean interface and real-time search functionality. This application was generated and developed with the help of the Gemini CLI.

## Features

- **Full Day Schedule**: Displays a complete, time-ordered schedule of all talks and breaks for the event.
- **Talk Details**: Each talk includes a title, speaker(s), description, and categories.
- **Real-time Category Search**: A search bar allows users to instantly filter the schedule by talk categories (e.g., "Frontend", "API", "Python").
- **Simple and Lightweight**: Built with a minimal technology stack, making it fast and easy to understand.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Data**: Schedule data is managed via a simple `talks.json` file, making it easy to update the event details.

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher is recommended)
- npm (usually comes with Node.js)

### Installation & Running

1.  **Clone the repository** (or ensure all project files are in a single directory).
    ```bash
    git clone https://github.com/i073073/gemini-cli-event-talks-app.git
    cd gemini-cli-event-talks-app
    ```

2.  **Install dependencies**:
    This command will install the necessary packages (like Express) defined in `package.json`.
    ```bash
    npm install
    ```

3.  **Start the server**:
    This command runs the `server.js` file, starting the local web server.
    ```bash
    npm start
    ```

4.  **View the website**:
    Once the server is running, open your favorite web browser and navigate to:
    [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── public/
│   ├── css/
│   │   └── style.css       # Styles for the website
│   ├── js/
│   │   └── app.js          # Frontend logic (fetches data, handles search)
│   └── index.html          # Main HTML page structure
├── .gitignore              # Specifies files for Git to ignore
├── package.json            # Project metadata and dependencies
├── README.md               # This file
├── server.js               # The Node.js Express server
└── talks.json              # Contains all the talk and schedule data
```
