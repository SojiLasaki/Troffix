import './App.css'
import './styles/app.css'
import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import AppShell from "./components/AppShell"


function ComingSoon({ title }: { title: string}) {
  return <h1>{title}</h1>
} 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
        <Route index element={<Navigate to="/rentals" replace />} />

        <Route path="overview" element={<ComingSoon title="Overview" />} />
        <Route path="saved-properties" element={<ComingSoon title="Saved Properties" />} />
        <Route path="saved-searches" element={<ComingSoon title="Saved Searches" />} />
        <Route path="tours" element={<ComingSoon title="Tours" />} />
        <Route path="bookings" element={<ComingSoon title="Bookings" />} />
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