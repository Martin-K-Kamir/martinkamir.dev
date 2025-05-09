import calendarImage from "@/assets/images/calendar-preview.png";
import countriesImage from "@/assets/images/countries-preview.png";
import forkifyImage from "@/assets/images/forkify-preview.png";
import theCabsImage from "@/assets/images/the-cabs-preview.png";
import theCabsAdminImage from "@/assets/images/the-cabs-admin-preview.png";

export const projects = [
    {
        title: "The Cabs",
        description:
            "Web app for discovering and booking unique cabins, offering a seamless experience for browsing listings, managing reservations, and ensuring a smooth end-to-end booking process.",
        image: {
            src: theCabsImage,
            alt: "The Cabs",
        },
        badges: [
            "React",
            "Redux",
            "React Query",
            "React Router",
            "Javascript",
            "Typescript",
            "SCSS",
            "Tailwind CSS",
        ],
        href: "https://the-cabs.vercel.app",
    },
    {
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
            "Tailwind CSS",
            "Tanstack Query",
            "React Router",
            "Zustand",
            "Zod",
            "Shadcn UI",
            "Vite",
        ],
        href: "https://the-cabs-admin.vercel.app",
    },
    {
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
        href: "https://thecabs.com",
    },
    {
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
        href: "https://thecabs.com",
    },
    {
        title: "Forkify",
        description:
            "Recipe app for searching, viewing, and saving your favorite meals. Users can explore a wide range of recipes by name, view detailed cooking instructions and ingredients, and bookmark recipes for quick access anytime.",
        image: {
            src: forkifyImage,
            alt: "Forkify",
        },
        badges: ["React", "Redux & RTK Query", "React Router", "CSS", "Vite"],
        href: "https://thecabs.com",
    },
];

export const jobs = [
    {
        title: "Frontend Developer · Rondo",
        description:
            "Design and develop key parts of the user interface across the product, focusing on performance, and user experience. Collaborate with designers, backend engineers, and product managers to deliver thoughtful, high-quality solutions that support both users and business goals.",
        dateRange: {
            from: new Date("2021-11-01"),
        },
        href: "https://rondo.com",
        badges: [
            "React",
            "Redux",
            "React Query",
            "React Router",
            "Javascript",
            "Typescript",
            "SCSS",
            "Tailwind CSS",
        ],
    },
];
