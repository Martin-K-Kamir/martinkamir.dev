import calendarImage from "@/assets/images/calendar-preview.png";
import countriesImage from "@/assets/images/countries-preview.png";
import forkifyImage from "@/assets/images/forkify-preview.png";
import theCabsImage from "@/assets/images/the-cabs-preview.png";
import theCabsAdminImage from "@/assets/images/the-cabs-admin-preview.png";
import { Link } from "lucide-react";

export const projects = [
    {
        intlKey: "the_cabs",
        namespace: "projects",
        title: "The Cabs",
        description:
            "Web app for discovering and booking unique cabins, offering a seamless experience for browsing listings, managing reservations, and ensuring a smooth end-to-end booking process.",
        image: {
            src: theCabsImage,
            alt: "The Cabs",
        },
        badges: [
            "React",
            "Nextjs",
            "Typescript",
            "TanStack Query",
            "Zod",
            "Zustand",
            "Tailwind CSS",
            "Shadcn UI",
        ],
        url: "https://the-cabs.vercel.app",
        otherUrls: [
            {
                href: "https://github.com/Martin-K-Kamir/the-cabs",
                namespace: "other",
                intlKey: "repository",
                label: "Repository",
                icon: <Link />,
            },
        ],
    },
    {
        intlKey: "the_cabs_admin",
        namespace: "projects",
        title: "The Cabs Admin",
        description:
            "Admin app for managing cabins, bookings, and platform insights through a dedicated admin dashboard built for The Cabs. It offers full CRUD functionality and delivers clear, actionable statistics to help streamline operations.",
        image: {
            src: theCabsAdminImage,
            alt: "The Cabs Admin",
        },
        badges: [
            "React",
            "Typescript",
            "TanStack Query",
            "React Router",
            "React Hook Form",
            "Zod",
            "Zustand",
            "Tailwind CSS",
            "Shadcn UI",
            "Vite",
        ],
        url: "https://the-cabs-admin.vercel.app",
        otherUrls: [
            {
                href: "https://github.com/Martin-K-Kamir/the-cabs-admin",
                namespace: "other",
                intlKey: "repository",
                label: "Repository",
                icon: <Link />,
            },
        ],
    },
    {
        intlKey: "calendar",
        namespace: "projects",
        title: "Calendar",
        description:
            "Simple calendar app inspired by Google Calendar. Users can create, update, and delete events through a clean and intuitive interface.",
        image: {
            src: calendarImage,
            alt: "Calendar",
        },
        badges: [
            "React",
            "Typescript",
            "Tailwind CSS",
            "Shadcn UI",
            "Vite",
            "Cypress",
            "Vitest",
            "React Testing Library",
        ],
        url: "https://calendar-clone-mkk.netlify.app",
        otherUrls: [
            {
                href: "https://github.com/Martin-K-Kamir/calendar",
                namespace: "other",
                intlKey: "repository",
                label: "Repository",
                icon: <Link />,
            },
        ],
    },
    {
        intlKey: "countries",
        namespace: "projects",
        title: "Countries",
        description:
            "Web app for exploring countries around the world. Users can browse a complete list of countries, search by name, filter by region, and view detailed information about each country including population, capital, currencies, languages, and neighboring countries.",
        image: {
            src: countriesImage,
            alt: "Countries",
        },
        badges: [
            "React",
            "Redux & RTK Query",
            "React Router",
            "Tailwind CSS",
            "Vite",
        ],
        url: "https://countries-martinkamir.netlify.app",
        otherUrls: [
            {
                href: "https://github.com/Martin-K-Kamir/frontend-mentor-countries",
                namespace: "other",
                intlKey: "repository",
                label: "Repository",
                icon: <Link />,
            },
        ],
    },
    {
        intlKey: "forkify",
        namespace: "projects",
        title: "Forkify",
        description:
            "Recipe app for searching, viewing, and saving your favorite meals. Users can explore a wide range of recipes by name, view detailed cooking instructions and ingredients, and bookmark recipes for quick access anytime.",
        image: {
            src: forkifyImage,
            alt: "Forkify",
        },
        badges: ["React", "Redux & RTK Query", "React Router", "CSS", "Vite"],
        url: "https://forkify-martinkamir.netlify.app",
        otherUrls: [
            {
                href: "https://github.com/Martin-K-Kamir/forkify",
                namespace: "other",
                intlKey: "repository",
                label: "Repository",
                icon: <Link />,
            },
        ],
    },
];

export const experiences = [
    {
        intlKey: "rondo",
        namespace: "experiences",
        title: "Frontend Developer · Rondo",
        description:
            "Design and develop key parts of the user interface across the product, focusing on performance, and user experience. Collaborate with designers, backend engineers, and product managers to deliver thoughtful, high-quality solutions that support both users and business goals.",
        dateRange: {
            from: new Date("2021-11-01"),
        },
        badges: [
            "React",
            "Redux",
            "React Router",
            "Javascript",
            "Typescript",
            "SCSS",
            "Tailwind CSS",
        ],
        url: "https://www.rondo.cz",
    },
    {
        intlKey: "iq_group",
        namespace: "experiences",
        title: "Frontend Developer · IQ Group",
        description:
            "Built the front-end for a custom IQ testing platform, focusing on performance, usability, and clear presentation of complex test flows. Delivered the project end-to-end in close collaboration with designers and backend developers.",
        dateRange: {
            from: new Date("2025-02-01"),
            to: new Date("2025-05-01"),
        },
        url: "https://iq-test.cz",
        badges: [
            "React",
            "Typescript",
            "TanStack Query",
            "React Router",
            "React Hook Form",
            "Zod",
            "Tailwind CSS",
            "Shadcn UI",
            "Vite",
            "Cypress",
            "Vitest",
            "React Testing Library",
        ],
    },
];
