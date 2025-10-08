"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegFileAlt, FaUser, FaCog } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: <FaRegFileAlt />, label: "My Resumes" },
    { href: "/profile", icon: <FaUser />, label: "Profile" },
    { href: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen transition-all duration-300">
      {/* Sidebar */}
      <aside
        className={`bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ${
          collapsed ? "w-[80px]" : "w-[260px]"
        } flex flex-col fixed h-full`}
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
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              collapsed={collapsed}
              active={pathname === item.href}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 p-8 ml-[${
          collapsed ? "80px" : "260px"
        }]`}
      >
        {children || <DummyContent />}
      </main>
    </div>
  );
}

function SidebarItem({
  href,
  icon,
  label,
  collapsed,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md transition cursor-pointer ${
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      <div className="text-lg">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </Link>
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
