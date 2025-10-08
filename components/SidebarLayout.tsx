"use client";

import { useState } from "react";
import { FaRegFileAlt, FaUser, FaCog } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen transition-all duration-300">
      {/* Sidebar */}
      <aside
        className={`bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ${
          collapsed ? "w-[80px]" : "w-[260px]"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <FaRegFileAlt className="text-2xl text-primary" />
            {!collapsed && <h1 className="font-bold text-xl">InstaCV</h1>}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-xl text-muted-foreground hover:text-primary transition"
          >
            {collapsed ? <IoMenu /> : <IoClose />}
          </button>
        </div>

        <nav className="flex-1 flex flex-col mt-4 space-y-1">
          <SidebarItem icon={<FaRegFileAlt />} label="My Resumes" collapsed={collapsed} />
          <SidebarItem icon={<FaUser />} label="Profile" collapsed={collapsed} />
          <SidebarItem icon={<FaCog />} label="Settings" collapsed={collapsed} />
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 p-8 ${
          collapsed ? "ml-[80px]" : "ml-[260px]"
        }`}
      >
        {children || <DummyContent />}
      </main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 cursor-pointer text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
      <div className="text-lg">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </div>
  );
}

function DummyContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-muted-foreground max-w-prose">
        Welcome to InstaCV. This is your workspace to create, edit, and manage professional resumes with smart templates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <div
            key={card}
            className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-medium mb-2">Resume {card}</h3>
            <p className="text-sm text-muted-foreground">
              This is a placeholder card for resume previews or quick actions.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
