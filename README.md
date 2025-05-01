# Node.js Project Template

This is a Airline Booking Node.js project designed with important code principles and project management recommendations in mind. Feel free to modify it as needed.

## Project Structure

### `src`
The `src` folder contains all the source code for the project, excluding tests. (You may want to create a separate `tests` folder.)

#### Inside the `src` Folder:
- **`config`**:  
    This folder contains configurations and setup for libraries or modules.  
    Examples:
    - Setting up `dotenv` for environment variables (e.g., `server-config.js`).
    - Configuring a logging library for meaningful logs.

- **`routes`**:  
    This folder registers routes and their corresponding middleware and controllers.

- **`middlewares`**:  
    Middleware intercepts incoming requests. Use this folder for validators, authenticators, etc.

- **`controllers`**:  
    Controllers act as the last middleware before calling the business layer. They:
    - Receive incoming requests and data.
    - Pass data to the business layer.
    - Structure API responses and send outputs.

- **`repositories`**:  
    Contains logic for interacting with the database. All raw or ORM queries reside here.

- **`services`**:  
    Contains business logic and interacts with repositories to fetch data from the database.

- **`utils`**:  
    Contains helper methods, error classes, and other utility functions.

---

## Setup Instructions

### Step 1: Clone the Repository
Download this template from GitHub and open it in your favorite text editor.

### Step 2: Install Dependencies
Navigate to the project folder and run:
```bash
npm install
```

### Step 3: Configure Environment Variables
In the root directory, create a `.env` file and add the following environment variables:
```env
PORT=<port number of your choice>
```
Example:
```env
PORT=3000
```

### Step 4: Initialize Sequelize
Navigate to the `src` folder and execute:
```bash
npx sequelize init
```
This command creates `migrations` and `seeders` folders along with a `config.json` file inside the `config` folder.

#### Database Configuration:
- For **development**, update `username`, `password`, and `dialect` (e.g., `mysql`, `mariadb`, etc.) in `config.json`.
- For **test** or **production**, replace the `host` with the hosted database URL.

### Step 5: Run the Server
To start the server, execute:
```bash
npm run dev
```
