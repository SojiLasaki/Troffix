export default function RecentUpdates() {
  return (
    <section className="overview-section">
      <div className="section-heading">
        <h2>Recent Updates</h2>
        <select aria-label="Filter recent updates" defaultValue="All">
          <option>All</option>
          <option>Unread</option>
        </select>
      </div>

      <div className="updates-card card">
        <span className="update-icon" aria-hidden="true">▤</span>
        <div className="update-copy">
          <strong>Welcome to Troffix</strong>
          <p>
            Start exploring properties, save your favorites, and book tours
            with ease
          </p>
        </div>
        <time>Yesterday, 4:20 PM</time>
      </div>
    </section>
  );
}