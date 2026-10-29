import { useState } from "react";
import { Link } from "react-router";
import PropertyIllustration from "../../assets/Properties illustration.svg"

export default function ExploreProperties() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "For Sale", "For Rent"];

  return (
    <aside className="explore-panel">
      <div className="section-heading">
        <h2>Explore Properties</h2>
        <button className="icon-button" type="button" aria-label="More options">
          ⋮
        </button>
      </div>

      <div className="property-tabs" role="tablist" aria-label="Property type">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "selected" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="explore-empty">
        <div className="property-illustration" aria-hidden="true">
          <img src={PropertyIllustration} alt="" />
        </div>
        <h3>Explore Properties</h3>
        <p>Start browsing to get personalized recommendations</p>
        <Link className="primary-button" to="/saved-properties">
          Browse Properties
        </Link>
      </div>
    </aside>
  );
}