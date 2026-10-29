import { Link } from "react-router";
import ToursIllustration from "../../assets/Tours Illustration.svg"

export default function NextTour() {
    return (
    <section className="overview-section">
      <h2>Next Tour</h2>

      <div className="tour-empty card">
        <div className="calendar-illustration" aria-hidden="true">
          <img src={ToursIllustration} alt="" />
        </div>
        <h3>No Tours Scheduled</h3>
        <Link className="primary-button" to="/tours">
          Schedule a Tour
        </Link>
      </div>
    </section>
    )
}