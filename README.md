# Weather Data Visualization Application Documentation

This documentation provides an overview of the Weather Data Visualization Application, which allows users to visualize weather data using two types of visualizations: line charts for average weather over multiple days and bar graphs for high, low, and average weather for a single day.

## Preview

![Average of All Days][./documentation/screenshots/avg.png]
![Single Day Statistics][./documentation/screenshots/specific.png]

## Website Hosting

The Weather Data Visualization Application is available in two branches:

1. **Main Branch (Local Development)**
   - This branch assumes the local Python development server is running on port 5000.
   - Network calls are made to fetch weather data from the backend.

2. **Static Branch (Hosted Version)**
   - The hosted version of the website is available at [weather-visualiser-tejesh.netlify.app/](https://weather-visualiser-tejesh.netlify.app/).
   - This branch doesn't make network calls and uses a JavaScript object to fetch the same data.

## Technologies Used

- **Frontend: React + Vite**
  - React is used for building the user interface.
  - Vite is the build tool used to develop and bundle the frontend code.

- **Data Visualization: ECharts**
  - ECharts is a powerful JavaScript charting library used for creating interactive and customizable charts.

- **Backend: Flask**
  - Flask is a Python web framework used to provide API endpoints for fetching weather data.

## Features

The Weather Data Visualization Application provides the following features:

1. **Line Chart Visualization**
   - Users can visualize the average weather data for multiple days using a line chart.
   - The line chart provides an overview of temperature trends over time.

2. **Bar Graph Visualization**
   - Users can view high, low, and average weather data for a single day using a bar graph.
   - The bar graph displays temperature variations throughout a day.

## Usage

To use the Weather Data Visualization Application, follow these steps:

1. **Clone the Repository**
   - Clone the repository to your local machine.

2. **Choose a Branch**
   - Select the branch that suits your needs:
     - **Main Branch (Local Development)**
       - If you want to run the application locally and have the Python backend server running on port 5000.
     - **Static Branch (Hosted Version)**
       - If you prefer to use the hosted version without network calls.

3. **Install Dependencies**
   - Navigate to the project directory and install the required dependencies using npm or yarn.

   ```shell
   npm install
   # OR
   yarn install

4. **Run The Application**
   - Start the development server to run the application.

   ```shell
   npm run dev
   # OR
   yarn dev

The application will be accessible in your web browser at the specified URL.
