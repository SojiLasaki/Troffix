import { Outlet } from "react-router";
import SideNav from "./SideNav"
import { useState } from "react";
import TopNavbar from "./TopNavbar";

export default function AppShell() {
    const [isSideBarCollapsed, setSideBarCollapsed] = useState(false)
    
    return (
        <div className={`app-layout${isSideBarCollapsed ? " is-collapsed" : ""}`}>
            <SideNav 
            collapsed={isSideBarCollapsed}
            onToggle={() => setSideBarCollapsed((current) => !current)}/>
            <div className="main-area">
                <TopNavbar />
                <main className="page-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}