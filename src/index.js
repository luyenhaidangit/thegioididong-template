import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ContextProvider } from './contexts/ContextProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ContextProvider>
        <RouterProvider router={router} app={App} />
    </ContextProvider>
);
// root.render(<App />);