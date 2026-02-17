export interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    image?: string; // Placeholder for future real images
    gradient: string;
    tags: string[]; // For filtering
}

export const projects: Project[] = [
    {
        id: "01",
        title: "Meridian Finance",
        category: "Branding · Web App",
        year: "2025",
        description: "Complete brand overhaul and fintech dashboard for a next-gen investment platform.",
        gradient: "from-neon-blue/20 to-transparent",
        tags: ["branding", "development", "product"],
    },
    {
        id: "02",
        title: "Aether Studios",
        category: "3D · WebGL · Identity",
        year: "2024",
        description: "Immersive 3D portfolio and brand identity for a creative production house.",
        gradient: "from-empire-gold/20 to-transparent",
        tags: ["3d", "branding", "development"],
    },
    {
        id: "03",
        title: "Pulse Health",
        category: "Product Design · GTM",
        year: "2024",
        description: "End-to-end product design and go-to-market strategy for a health-tech startup.",
        gradient: "from-emerald-500/20 to-transparent",
        tags: ["product", "gtm"],
    },
    {
        id: "04",
        title: "Nova Marketplace",
        category: "Development · UX",
        year: "2023",
        description: "High-performance e-commerce platform with AI-powered recommendations.",
        gradient: "from-purple-500/20 to-transparent",
        tags: ["development", "product"],
    },
    {
        id: "05",
        title: "Vanguard Architecture",
        category: "Strategy · Branding",
        year: "2023",
        description: "Rebranding a global architecture firm to reflect their sustainable vision.",
        gradient: "from-orange-500/20 to-transparent",
        tags: ["strategy", "branding"],
    },
    {
        id: "06",
        title: "Lumina Labs",
        category: "3D · Motion",
        year: "2022",
        description: "Visual identity and motion graphics package for an AI research lab.",
        gradient: "from-cyan-500/20 to-transparent",
        tags: ["3d", "motion", "branding"],
    },
];

export const categories = [
    { label: "All", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Product", value: "product" },
    { label: "Development", value: "development" },
    { label: "3D & Motion", value: "3d" },
    { label: "Strategy", value: "strategy" },
];
