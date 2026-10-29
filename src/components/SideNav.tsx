import type { ReactNode } from "react";
import { NavLink } from "react-router";

type IconName =
  | "home"
  | "heart"
  | "bookmark"
  | "calendar"
  | "calendar-check"
  | "building"
  | "mail"
  | "bell"
  | "settings"
  | "help";

function MenuIcon({ name }: { name: IconName }) {
  const icons: Record<IconName, ReactNode> = {
    home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
    heart: <path d="M20.8 8.6c0 4.2-8.8 10.1-8.8 10.1S3.2 12.8 3.2 8.6a4.3 4.3 0 0 1 8.8-1.2 4.3 4.3 0 0 1 8.8 1.2Z" />,
    bookmark: <path d="M6 20V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15l-6-4z" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    "calendar-check": (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V7l8-4v18M4 21h16V10l-8-3" />
        <path d="M8 9v1m0 3v1m0 3v1m8-5v1m0 3v1" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    bell: <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" />,
    settings: (
      <>
        <path d="M12 3 14 4l3-.2 1.2 2.5 2.5 1.2-.2 3 1 2.5-1.8 2.4-.2 3-2.8.8-1.7 2.5-3-.8-3 .8-1.7-2.5-2.8-.8-.2-3L3 13l1-2.5-.2-3 2.5-1.2L7.5 4l3 .2z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    help: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
        <path d="M17 19a5 5 0 0 1-5 3h-2" />
      </>
    ),
  };

  return (
    <svg
      className="nav-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

type SidebarItem = {
  to: string;
  label: string;
  icon: IconName;
  badge?: string;
};

type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

const sections: SidebarSection[] = [
  {
    title: "Main menu",
    items: [
      { to: "/overview", label: "Overview", icon: "home" },
      { to: "/saved-properties", label: "Saved Properties", icon: "heart" },
      { to: "/saved-searches", label: "Saved Searches", icon: "bookmark" },
      { to: "/tours", label: "Tours", icon: "calendar" },
      { to: "/bookings", label: "Bookings", icon: "calendar-check" },
      { to: "/rentals", label: "My Rentals", icon: "building" },
      { to: "/messages", label: "Messages", icon: "mail", badge: "12" },
    ],
  },
  {
    title: "System",
    items: [
      {
        to: "/notifications",
        label: "Notifications",
        icon: "bell",
        badge: "5",
      },
    ],
  },
  {
    title: "Support",
    items: [
      { to: "/settings", label: "Settings", icon: "settings" },
      { to: "/help-center", label: "Help Centre", icon: "help" },
    ],
  },
];

export default function SideNav() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand-row">
        <span className="brand-mark" aria-label="Troffix">
          X
        </span>
        <button
          className="sidebar-toggle"
          type="button"
          aria-label="Collapse sidebar"
        >
          <span />
        </button>
      </div>

      {sections.map((section) => (
        <section className="sidebar-section" key={section.title}>
          <p className="sidebar-heading">{section.title}</p>

          <nav className="sidebar-nav" aria-label={section.title}>
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                <MenuIcon name={item.icon} />
                <span>{item.label}</span>
                {item.badge && <span className="badge">{item.badge}</span>}
              </NavLink>
            ))}
          </nav>
        </section>
      ))}

      <div className="sidebar-account">
        <p className="sidebar-heading">Account</p>
        <div className="account">
          <div className="account-avatar" aria-hidden="true">
            J
          </div>
          <div>
            <strong>Jegede Jegede</strong>
            <span>Member</span>
          </div>
        </div>
      </div>
    </aside>
  );
}