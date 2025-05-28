# Admin Dashboard

I built a dashboard to fetch and display user data from an API.

## Features

- View user stats
- Browse users with pagination
- Search users by name
- Toggle dark/light themes
- Show reports with charts

## Technologies

- React 19: Main framework
- Vite: Fast build tool
- TailwindCSS: Responsive styling
- React Query: Data fetching
- React Router: Page navigation
- Axios: API requests
- React Icons: UI icons

## Project Structure

- components/: Reusable UI pieces
- pages/: Dashboard, Users, Reports
- hooks/: Custom logic
- context/: Theme settings
- utils/: API helpers

## Components

- Layout.jsx: Main page structure with navbar and sidebar
- Navbar.jsx: Top bar with title and theme toggle
- Sidebar.jsx: Navigation menu with page links
- Dashboard.jsx: Shows user stats and recent users
- Users.jsx: Lists users with search and pagination
- Reports.jsx: Displays analytics with cards and charts
- SearchBar.jsx: Filters users by name
- Pagination.jsx: Handles page navigation
- SummaryCard.jsx: Shows stats in cards
- Spinner.jsx: Loading animation
- SkeletonLoader.jsx: Placeholder during data load

## Custom Hooks

- useApiFetch.js: Fetches user data from API
- useSearch.js: Filters users by name
- usePagination.js: Manages page navigation
- useDebounce.js: Delays search for performance

## Theme System

- ThemeContext.jsx: Switches and saves theme

## API Integration

- api.js: Connects to REQRes API

## Data Flow

- User interacts with button or search
- Component calls custom hook
- Hook fetches data using React Query
- Data retrieved from REQRes API
- React Query caches data
- Component updates with new data
- User sees updated UI

## Technical Highlights

- React Query: Manages loading, caching, and errors
- TailwindCSS: Simplifies styling with responsive design
- Custom Hooks: Separates logic for clean, reusable code

## Key Features

- Search: Filters user names after 300ms delay
- Pagination: Shows 6 users per page with navigation
- Theme Toggle: Switches and saves dark/light mode
- Performance: Uses code splitting and lazy loading
- Mobile: Responsive sidebar, tables, and cards

## Setup

- npm install: Installs dependencies
- npm run dev: Starts dev server
- npm run build: Builds for production
- npm run preview: Tests production build

