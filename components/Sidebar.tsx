"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegFileAlt, FaUser, FaCog } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: <FaRegFileAlt />, label: "My Resumes" },
    { href: "/resume", icon: <FaRegFileAlt />, label: "Resume" },
    { href: "/profile", icon: <FaUser />, label: "Profile" },
    { href: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-sm transition-all duration-300 flex flex-col z-50 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Header */}
        <div className={`px-4 py-5 border-b border-gray-200 ${collapsed ? "flex flex-col items-center gap-3" : "flex items-center justify-between"}`}>
          {collapsed ? (
            <>
              <FaRegFileAlt className="text-2xl text-orange-500 flex-shrink-0" />
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="Expand sidebar"
              >
                <IoMenu />
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 overflow-hidden">
                <FaRegFileAlt className="text-2xl text-orange-500 flex-shrink-0" />
                <h1 className="font-bold text-xl text-gray-900 whitespace-nowrap">
                  InstaCV
                </h1>
              </div>
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-2xl text-gray-600 hover:text-orange-500 transition-colors flex-shrink-0"
                aria-label="Collapse sidebar"
              >
                <IoClose />
              </button>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col px-3 py-4 space-y-1">
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

        {/* Footer */}
        <div className="px-4 py-4 border-t border-gray-200">
          <p
            className={`text-xs text-gray-500 text-center transition-all duration-300 ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            © {new Date().getFullYear()} InstaCV
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <div className="p-6 md:p-8">
          {children}
        </div>
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
      className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
        active
          ? "bg-orange-50 text-orange-600 border border-orange-200"
          : "text-gray-700 hover:bg-gray-100 hover:text-orange-600"
      } ${collapsed ? "justify-center" : ""}`}
    >
      <div className="text-xl flex-shrink-0">{icon}</div>
      <span
        className={`whitespace-nowrap transition-all duration-300 ${
          collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}