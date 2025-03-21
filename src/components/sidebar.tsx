"use client"

import type React from "react"

import { useState } from "react"
import {
  Menu,
  Trophy,
  Shield,
  ChevronRight,
  Gift,
  Users,
  Crown,
  Newspaper,
  MessageSquare,
  Headphones,
  Languages,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState("casino")

  return (
    <aside
      className={cn(
        "bg-[#15232D] border-r border-gray-800 flex flex-col h-screen fixed z-50 transition-all duration-300 overflow-y-auto overflow-x-hidden",
        expanded ? "w-72" : "w-16",
      )}
    >
      <button
        className="p-3 text-gray-400 hover:text-white mb-4 flex justify-center"
        onClick={() => setExpanded(!expanded)}
      >
        <Menu size={20} />
      </button>

      {expanded && (
        <div className="px-3 mb-4">
          <div className="grid grid-cols-2 gap-1">
            <button
              className={cn(
                "py-3 px-4 rounded-md text-center text-sm font-medium",
                activeTab === "casino" ? "bg-[#1A2C38] text-white" : "bg-[#1A2C38]/50 text-gray-400 hover:text-white",
              )}
              onClick={() => setActiveTab("casino")}
            >
              casino
            </button>
            <button
              className={cn(
                "py-3 px-4 rounded-md text-center text-sm font-medium",
                activeTab === "sports" ? "bg-[#1A2C38] text-white" : "bg-[#1A2C38]/50 text-gray-400 hover:text-white",
              )}
              onClick={() => setActiveTab("sports")}
            >
              sports
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1 px-2">
        <NavItem icon={<Gift size={20} />} label="Promotion" expanded={expanded} hasSubmenu />
        <NavItem icon={<Users size={20} />} label="coalition" expanded={expanded} />
        <NavItem icon={<Crown size={20} />} label="VIP Club" expanded={expanded} />
        <NavItem icon={<Newspaper size={20} />} label="Blog" expanded={expanded} />
        <NavItem icon={<MessageSquare size={20} />} label="Forum" expanded={expanded} />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col gap-1 px-2">
        <NavItem icon={<Trophy size={20} />} label="Sponsorship" expanded={expanded} hasSubmenu />
        <NavItem icon={<Shield size={20} />} label="Responsible Gambling" expanded={expanded} />
        <NavItem icon={<Headphones size={20} />} label="Real-time support" expanded={expanded} />
        <NavItem icon={<Languages size={20} />} label="Language: Korean" expanded={expanded} hasSubmenu />
      </div>
    </aside>
  )
}

function NavItem({
  icon,
  label,
  expanded,
  active = false,
  hasSubmenu = false,
}: {
  icon: React.ReactNode
  label?: string
  expanded: boolean
  active?: boolean
  hasSubmenu?: boolean
}) {
  return (
    <button
      className={cn(
        "flex items-center gap-3 p-3 rounded-md w-full",
        active ? "bg-[#1A2C38] text-white" : "text-gray-400 hover:text-white hover:bg-[#1A2C38]/50",
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      {expanded && (
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium">{label}</span>
          {hasSubmenu && <ChevronRight size={16} />}
        </div>
      )}
    </button>
  )
}

