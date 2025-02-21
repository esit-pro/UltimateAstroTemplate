export interface Framework {
    name: string;
    displayName: string;
    path: string;
    color: string;
    active: boolean;
}

export const frameworks = [
  {
    displayName: "Home",
    path: "/",
    color: "#7c3aed",
    active: true
  },
  {
    displayName: "Services",
    path: "#",
    color: "#2563eb",
    active: false
  },
  {
    displayName: "About",
    path: "#",
    color: "#db2777",
    active: false
  },
  {
    displayName: "Contact",
    path: "#",
    color: "#059669",
    active: false
  },
  {
    displayName: "Client Portal",
    path: "#",
    color: "#d97706",
    active: false
  }
];
