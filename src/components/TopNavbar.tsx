import { Link, useLocation } from "react-router";
import "../styles/topnavbar.css";

const pageTitles: Record<string, string> = {
  "/overview": "Overview",
  "/saved-properties": "Saved Properties",
  "/saved-searches": "Saved Searches",
  "/tours": "Tours",
  "/bookings": "Bookings",
  "/rentals": "My Rentals",
  "/messages": "Messages",
  "/notifications": "Notifications",
  "/settings": "Settings",
  "/help-center": "Help Centre",
};

function PageIcon({ rentals }: { rentals: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {rentals ? (
        <>
          <path d="M4 21V7l8-4v18M4 21h16V10l-8-3" />
          <path d="M8 9v1m0 3v1m0 3v1m8-5v1m0 3v1" />
        </>
      ) : (
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
      )}
    </svg>
  );
}

export default function TopNav() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "Overview";
  const isRentals = pathname === "/rentals";

  return (
    <header className="topbar">
      <div className="breadcrumb" aria-label="Breadcrumb">
        <span>Jegede</span>
        <span aria-hidden="true">›</span>
        <PageIcon rentals={isRentals} />
        <strong>{title}</strong>
      </div>

      <label className="search-box">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search..." aria-label="Search" />
      </label>

      <nav className="topbar-actions" aria-label="Quick links">
        <Link to="/messages" aria-label="Messages" title="Messages">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </Link>
        <Link to="/notifications" aria-label="Notifications" title="Notifications">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}