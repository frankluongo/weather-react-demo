import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Weather from './components/Weather';

import './reset.css';
import './typography.css';
import './grid.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Weather defaultCity="New York" />
      </main>
      <footer>
        <a
          href="https://github.com/brennawilliamson/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{' '}
        by Brenna Williamson
      </footer>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
