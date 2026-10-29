import { Link } from "react-router";


const metrics = [
  {
    label: "Saved Properties",
    value: 0,
    icon: "♡",
    tone: "pink",
    to: "/saved-properties",
  },
  {
    label: "Upcoming Tours",
    value: 0,
    icon: "▢",
    tone: "green",
    to: "/tours",
  },
  {
    label: "New Matches",
    value: 0,
    icon: "♧",
    tone: "blue",
    to: "/saved-searches",
  },
] as const;

export default function OverviewStats() {
  return (
    <div className="metrics-grid">
      {metrics.map((metric) => (
        <Link
          className={`metric-card ${metric.tone}`}
          to={metric.to}
          key={metric.label}
        >
          <span className="metric-icon" aria-hidden="true">
            {metric.icon}
          </span>
          <span className="metric-copy">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </span>
          <span className="metric-arrow" aria-hidden="true">›</span>
        </Link>
      ))}
    </div>
  );
}