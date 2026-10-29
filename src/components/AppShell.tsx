import { Outlet } from "react-router";
import Sidebar from "./SideNav"

export default function AppShell() {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="page-content">
                <Outlet />
            </main>
        </div>
    )
}