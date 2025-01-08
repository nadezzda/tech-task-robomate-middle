# Order List SPA

This project is a simple Single Page Application (SPA) that allows users to log in, view, and manage a list of items. It includes functionality for adding and editing items, and uses Redux Toolkit for state management, Formik for form handling, and Material UI (MUI) for UI components.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup](#setup)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [State Management](#state-management)
6. [Testing](#testing)
7. [Deployment](#deployment)

## Technologies Used

- **React.js** (functional components, React Hooks)
- **Redux Toolkit** for state management
- **React Router** for routing
- **Material UI (MUI)** for UI components
- **Formik** + **Yup** for form validation
- **Jest** + **React Testing Library** for testing
- **Vite** (for faster development and build process)
- **TypeScript** for type safety

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nadezzda/tech-task-robomate-middle.git
   ```
2. Navigate to the project directory:
   ```bash
    cd tech-task-robomate-middle
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
    npm run dev
   ```

5. Open your browser and go to http://localhost:3000 to see the app in action.

6. Run the tests:

   ```bash
    npm test
   ```

## Project Structure

Here is a breakdown of the folder structure in the project:

- **`components/`**: Contains reusable components such as the login form, items table, and dialog for adding/editing items.
- **`features/`**: Contains Redux slices for managing user login status and items list.
- **`hooks/`**: Custom hooks used in the app.
- **`lib/`**: Utility functions, constants and helper modules.
- **`pages/`**: Pages for different routes in the app, including the login page and items page.
- **`schemas/`**: Yup validation schemas for form validation.
- **`tests/`**: Contains Jest tests for the components and features.
- **`types/`**: TypeScript types used throughout the application.

## Features

### Login Page (/login)

- A simple login form with email and password fields.
- Validation using **Yup** (email format validation, password must be at least 8 characters long and contain at least one special character (!@#$%^&\*)).
- On successful form submission, the user is logged in, and their state is stored in Redux. They are redirected to `/items`.

### Items Page (/items)

- Displays a list of items in a table/list using **Material UI** components.
- Users can add new items through a modal form (using **Formik**).
- Users can edit existing items by clicking the "Edit" button next to each item, which pre-fills the form.
- On submit, the item is added/updated in the Redux state.

### Authentication

- Users must be logged in to access the `/items` page. If not logged in, they will be redirected to the login page.

### Toast Notifications

- Toasts are shown when an item is added or edited, providing feedback to the user.

### Logout

- A logout button in the header allows users to log out and redirect to the login page.

## State Management

This project uses [Redux](https://redux.js.org/) for state management along with [redux-persist](https://github.com/rt2zz/redux-persist) to persist the Redux state across page reloads. This ensures that the user's data (such as login status and item information) is maintained even after refreshing the page or closing the browser.

### Key Features of Redux Persist:

- **Automatic persistence:** The Redux state is automatically persisted to the browser's local storage.
- **Easy setup:** `redux-persist` integrates seamlessly with Redux to keep data persistent between sessions.

## Testing

### LoginForm Component

- **Form Elements Test**: Verifies that the login form contains the necessary elements, such as the email input, password input, and the "Log In" button.
- **Form Submission Test**: Ensures that when the form is submitted, the `login` action is dispatched with the correct payload (email and password). Also, it verifies that the user is navigated to the `/items` page after successful login.

### ItemsPage Component

- **Order Details Rendering Test**: Checks that the order details are correctly rendered in the `OrderTable` component, verifying that the order ID and status are displayed.
- **Add Order Test**: Tests the functionality of adding a new order. It simulates filling out the customer details (email, name, phone, total amount) and submitting the form. It then ensures that the `addOrder` action is dispatched with the correct data and that the modal dialog is opened and closed correctly.

### Header Component

- **Header Rendering Test**: Verifies that the header contains the text "Order System" and the "Logout" button.
- **Logout Button Test**: Ensures that when the logout button is clicked, the `logout` action is dispatched and the user is redirected to the login page (`/login`).

## Deployment

The project is deployed on [Vercel](https://vercel.com/). You can access the live version of the app by visiting the following link: [tech-task-robomate-middle](https://tech-task-robomate-middle.vercel.app/)
