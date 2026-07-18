import {
  Boxes,
  BriefcaseBusiness,
  Brush,
  FileText,
  Layers3,
  Megaphone,
  MessageCircle,
  Package,
  Palette,
  PenTool,
  Printer,
  Sparkles,
  Store
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "https://firnadiqgraphics.myportfolio.com/", external: true },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "Logo Design",
    description: "Distinct marks built for recognition, balance, and long-term brand memory.",
    icon: PenTool
  },
  {
    title: "Brand Identity",
    description: "Complete visual systems with color, type, usage rules, and brand applications.",
    icon: Sparkles
  },
  {
    title: "Packaging Design",
    description: "Shelf-ready packaging concepts that combine clarity, form, and brand presence.",
    icon: Package
  },
  {
    title: "Print Design",
    description: "Production-aware artwork prepared for accurate colors, margins, and output.",
    icon: Printer
  },
  {
    title: "Social Media Design",
    description: "Scroll-stopping creative systems for campaigns, launches, and daily content.",
    icon: Megaphone
  },
  {
    title: "Business Stationery",
    description: "Premium business cards, letterheads, profiles, and brand touchpoints with clear hierarchy.",
    icon: BriefcaseBusiness
  },
  {
    title: "Creative Direction",
    description: "Practical art direction for brands that need sharper visual decisions and presentation.",
    icon: Palette
  },
  {
    title: "Marketing Design",
    description: "Campaign visuals, flyers, posters, brochures, and digital assets made for clear action.",
    icon: FileText
  }
];

export const portfolioCategories = [
  "All",
  "Logo Design",
  "Brand Identity",
  "Print Design",
  "Social Media",
  "Poster Design",
  "Mockups"
];

export const portfolioItems = [
  {
    title: "Monogram Logo System",
    category: "Logo Design",
    summary: "A refined mark exploration with grid, spacing, and color discipline.",
    accent: "#EE4723"
  },
  {
    title: "Complete Brand Kit",
    category: "Brand Identity",
    summary: "Identity guidelines, typography, color rules, and brand applications.",
    accent: "#241E5C"
  },
  {
    title: "Premium Business Stationery",
    category: "Print Design",
    summary: "Letterhead, business card, and print-ready collateral system.",
    accent: "#0F766E"
  },
  {
    title: "Launch Campaign Grid",
    category: "Social Media",
    summary: "Consistent post templates designed for product launches, offers, and brand campaigns.",
    accent: "#B42318"
  },
  {
    title: "Event Poster Direction",
    category: "Poster Design",
    summary: "A bold poster composition with strong hierarchy and practical readability.",
    accent: "#7C3AED"
  },
  {
    title: "Brand Mockup Suite",
    category: "Mockups",
    summary: "Presentation-ready mockups for client review and portfolio display.",
    accent: "#0F172A"
  },
  {
    title: "Product Packaging Concept",
    category: "Print Design",
    summary: "A clean packaging direction built for shelf presence and production clarity.",
    accent: "#B45309"
  },
  {
    title: "Identity Presentation Boards",
    category: "Brand Identity",
    summary: "Brand storytelling slides built for confident client presentations.",
    accent: "#155E75"
  },
  {
    title: "Creative Product Mockups",
    category: "Mockups",
    summary: "Modern visual previews for campaigns, packaging, and launch assets.",
    accent: "#BE123C"
  }
];

export const whyChoose = [
  {
    title: "Identity-Led Design",
    description: "Every project starts with a clear visual direction that makes the brand easier to recognize.",
    icon: Sparkles
  },
  {
    title: "Brand-First Thinking",
    description: "Every service focuses on visual communication that is memorable, consistent, and useful.",
    icon: Layers3
  },
  {
    title: "Production Ready",
    description: "Designs are prepared with real-world digital and print output in mind from the start.",
    icon: Boxes
  },
  {
    title: "Creative Direction",
    description: "Clear guidance helps brands make stronger visual decisions across campaigns and touchpoints.",
    icon: Brush
  },
  {
    title: "Portfolio Quality",
    description: "Work is prepared for premium presentation across digital platforms, print, and brand launches.",
    icon: Store
  }
];
