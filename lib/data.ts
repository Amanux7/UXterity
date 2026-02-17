export interface Service {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: string;
}

export const services: Service[] = [
    {
        id: "branding",
        number: "01",
        title: "Brand Strategy",
        description:
            "We architect brand identities that command attention and build lasting emotional connections with your audience.",
        icon: "Palette",
    },
    {
        id: "product-design",
        number: "02",
        title: "Product Design",
        description:
            "From wireframes to pixel-perfect UI — we design digital products that feel intuitive and look extraordinary.",
        icon: "PenTool",
    },
    {
        id: "development",
        number: "03",
        title: "Development",
        description:
            "We engineer high-performance web & mobile applications using cutting-edge frameworks and architectures.",
        icon: "Code",
    },
    {
        id: "motion-design",
        number: "04",
        title: "Motion & 3D",
        description:
            "Immersive experiences through WebGL, 3D visualization, and cinematic motion design that captivates.",
        icon: "Layers",
    },
    {
        id: "gtm-strategy",
        number: "05",
        title: "GTM Strategy",
        description:
            "Data-driven go-to-market plans that position your product for explosive growth and market dominance.",
        icon: "Rocket",
    },
    {
        id: "content",
        number: "06",
        title: "Content & Media",
        description:
            "Premium content ecosystems — from editorial copywriting to social media campaigns that drive engagement.",
        icon: "Megaphone",
    },
];

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasMegaMenu: true },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const megaMenuItems = [
    {
        category: "Branding",
        items: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Naming & Voice"],
    },
    {
        category: "Technology",
        items: ["Web Development", "Mobile Apps", "3D & WebGL", "AI Integration"],
    },
    {
        category: "Go-To-Market",
        items: ["Growth Strategy", "Content Marketing", "Performance Ads", "Analytics"],
    },
];

export const timeline = [
    {
        year: "2004",
        title: "The Beginning",
        description: "Founded as a two-person design studio with a passion for pixel-perfect craft.",
    },
    {
        year: "2008",
        title: "Going Digital",
        description: "Expanded into web development and interactive experiences as the digital era accelerated.",
    },
    {
        year: "2012",
        title: "First Major Awards",
        description: "Recognized with multiple Awwwards and CSS Design Awards for groundbreaking web experiences.",
    },
    {
        year: "2016",
        title: "Global Expansion",
        description: "Opened offices in London and Mumbai, growing to a team of 30+ specialists.",
    },
    {
        year: "2020",
        title: "3D & Immersive",
        description: "Pioneered WebGL and 3D experiences, launching our dedicated Motion & 3D division.",
    },
    {
        year: "2024",
        title: "Empire Mode",
        description: "150+ projects delivered. Trusted by Fortune 500s and ambitious startups alike.",
    },
];
