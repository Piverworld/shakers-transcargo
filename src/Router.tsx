import { createBrowserRouter } from "react-router";
import PageLayout from "./components/Layout/PageLayout"
import App from "./App";
import NotFound from "./components/NotFound";
import ServicesLayout from "./components/Layout/ServicesLayout";
import MainSection from "./Pages/Services/MainSection";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '',
                element: <App />,
            },
            {
                path: 'leistungen/',
                element: <ServicesLayout />,
                children: [
                    {
                        path: ':name',
                        element: <MainSection />,
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

