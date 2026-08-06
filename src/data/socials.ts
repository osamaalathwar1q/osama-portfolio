export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  label: string;
  category: "chat" | "social" | "web" | "email";
  colorHex?: string;
}

export const contactInfo = {
  fullName: "Osama Ahmed Mohammed",
  fullNameArabic: "أسامة أحمد محمد عثمان",
  title: "Software Engineer & Team Leader",
  company: "Founder of AFAQ CODE",
  email: "osamaahmedmohammed26@gmail.com",
  whatsappNumber: "+967778144907",
  whatsappUrl: "https://wa.me/967778144907",
  telegramPersonalUrl: "https://t.me/OAMO7",
  telegramChannelUrl: "https://t.me/AfaqCode",
  githubUrl: "https://github.com/osamaalathwar1q",
  linkedinUrl: "https://www.linkedin.com/in/osama-ahmed-mohammed-othman-82395225b",
  instagramUrl: "https://www.instagram.com/oa_a3q",
  companyInstagramUrl: "https://www.instagram.com/afaq.ac",
  companyWebsiteUrl: "https://afaqcodesystem.42web.io/?i=1",
};

export const socialLinks: SocialLink[] = [
  {
    id: "whatsapp",
    name: "WhatsApp المباشر",
    url: contactInfo.whatsappUrl,
    iconName: "whatsapp",
    label: "+967 778 144 907",
    category: "chat",
    colorHex: "#25D366",
  },
  {
    id: "telegram-personal",
    name: "Telegram الشخصي",
    url: contactInfo.telegramPersonalUrl,
    iconName: "telegram",
    label: "@OAMO7",
    category: "chat",
    colorHex: "#229ED9",
  },
  {
    id: "telegram-channel",
    name: "قناة Telegram (AFAQ CODE)",
    url: contactInfo.telegramChannelUrl,
    iconName: "telegram",
    label: "@AfaqCode",
    category: "chat",
    colorHex: "#0088cc",
  },
  {
    id: "github",
    name: "GitHub الشخصي",
    url: contactInfo.githubUrl,
    iconName: "github",
    label: "@osamaalathwar1q",
    category: "social",
    colorHex: "#f0f6fc",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: contactInfo.linkedinUrl,
    iconName: "linkedin",
    label: "Osama Ahmed Mohammed Othman",
    category: "social",
    colorHex: "#0A66C2",
  },
  {
    id: "instagram-personal",
    name: "Instagram الشخصي",
    url: contactInfo.instagramUrl,
    iconName: "instagram",
    label: "@oa_a3q",
    category: "social",
    colorHex: "#E4405F",
  },
  {
    id: "instagram-company",
    name: "Instagram AFAQ CODE",
    url: contactInfo.companyInstagramUrl,
    iconName: "instagram",
    label: "@afaq.ac",
    category: "social",
    colorHex: "#C13584",
  },
  {
    id: "company-web",
    name: "موقع منصة AFAQ CODE",
    url: contactInfo.companyWebsiteUrl,
    iconName: "globe",
    label: "afaqcodesystem.42web.io",
    category: "web",
    colorHex: "#06B6D4",
  },
];
