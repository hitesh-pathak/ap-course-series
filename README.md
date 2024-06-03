# Intro
This project is a static webapp clone of [Archarya Prashant's website's video series page](https://acharyaprashant.org/en/video-modules/series/cs-5ddbd9).
The latest commit from this branch is deployed on render.

[Link to Deployed App on Render](https://ap-video-series.onrender.com/)

## Techstack
- React with Typescript using Vite
- Tailwindcss
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Redux Toolkit Query or RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for much better data-fetching from APIs

## Features
- Lazy Loding: I've used lazy loading to render off-screen components like the FAQs section. I've used [React's lazy()](https://react.dev/reference/react/lazy) for this purpose
- Type Safety: For better type safety, I've used Typescript
- Data Caching: I've implemented data-fetching with RTK Query & also ensured that the data gets cached,
  so we do not end up spamming the APIs just because a component requiring the data rendered multiple times

## Running the Project Locally

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your development machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the development server**:

    ```sh
    npm run dev
    ```

    This will start the Vite development server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

4. **Build for production**:

    ```sh
    npm run build
    ```

    This will create an optimized production build of your project.

5. **Preview the production build**:

    ```sh
    npm run preview
    ```

    This will preview the production build locally.

