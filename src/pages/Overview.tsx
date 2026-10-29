import OverviewStats from "../components/overview/OverviewStats";
import NextTour from "../components/overview/NextTour";
import RecentUpdates from "../components/overview/RecentUpdates";
import ExploreProperties from "../components/overview/ExploreProperties";
import "../styles/overview.css"

export default function Overview() {
    return (
        <div className="overview-layout">
            <div className="overview-main">
                <header className="welcome-header">
                    <h1>Welcome Back, Jegede!</h1>
                    <p>Start exploring your dashboard to manage tours and properties</p>
                </header>
                <OverviewStats />
                <NextTour />
                <RecentUpdates />
            </div>

        <ExploreProperties />
        </div>
    )
}