import './App.css'
import './styles/app.css'
import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import Bookings from "./pages/Bookings"
import Tours from "./pages/Tours"
import './styles/mains.css'
import AppShell from "./components/AppShell"
import Overview from "./pages/Overview"
import SavedProperties from "./pages/SavedProperties"
import SavedSearches from './pages/SavedSearches';
import './styles/mains.css'
import "./styles/saved_properties.css"
import "./styles/overview.css"
import "./styles/buttons.css"

function ComingSoon({ title }: { title: string}) {
  return <h1>{title}</h1>
} 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
        <Route index element={<Navigate to="/overview" replace />} />

        <Route path="overview" element={<Overview />} />
        <Route path="saved-properties" element={<SavedProperties title="Saved Properties" tag="Your collection of homes and spaces you are interested in" />} />
        <Route path="saved-searches" element={<SavedSearches title="Saved Searches" tag="Track property searches and get notified when new listings match your criteria" />} />
        <Route path="tours" element={<Tours title="Tours" tag="Manage your scheduled property tours and upcoming tours" />} />
        <Route path="bookings" element={<Bookings title="Bookings" tag="Manage your space reservations, upcoming bookings, and past bookings in one place " />} />
        <Route path="rentals" element={<ComingSoon title="rentals" />} />
        <Route path="messages" element={<ComingSoon title="Messages" />} />
        <Route path="notifications" element={<ComingSoon title="Notifications" />} />
        <Route path="settings" element={<ComingSoon title="Settings" />} />
        <Route path="help-center" element={<ComingSoon title="Help Center" />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}