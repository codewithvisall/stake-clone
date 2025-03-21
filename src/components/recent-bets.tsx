"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

type BetType = {
  game: string
  user: string
  hour: string
  amount: string
  currency: string
  multiplier: string
  payout: string
  isPositive: boolean
}

export default function RecentBets() {
  const [activeTab, setActiveTab] = useState<"casino" | "sports" | "race">("casino")

  const bets: BetType[] = [
    {
      game: "The Bandit",
      user: "Hidden",
      hour: "8:51 pm",
      amount: "23165.36638",
      currency: "ETH",
      multiplier: "0.74×",
      payout: "-5930.333793",
      isPositive: false,
    },
    {
      game: "Crazy Time A",
      user: "Hidden",
      hour: "8:51 pm",
      amount: "500.00000000",
      currency: "BTC",
      multiplier: "3.50×",
      payout: "1750.00000000",
      isPositive: true,
    },
    {
      game: "Salon Privé Blackjack",
      user: "Hidden",
      hour: "8:50 pm",
      amount: "31.77199905",
      currency: "ETH",
      multiplier: "2.13×",
      payout: "67.51549798",
      isPositive: true,
    },
    {
      game: "The Bandit",
      user: "Hidden",
      hour: "8:50 pm",
      amount: "5000.00000000",
      currency: "BTC",
      multiplier: "1.28×",
      payout: "6380.00000000",
      isPositive: true,
    },
    {
      game: "San Quentin 2: Death Row",
      user: "Hidden",
      hour: "8:50 pm",
      amount: "2500.00000000",
      currency: "BTC",
      multiplier: "0.05×",
      payout: "-2382.05000000",
      isPositive: false,
    },
    {
      game: "Baccarat",
      user: "Hidden",
      hour: "8:50 pm",
      amount: "1400.00000000",
      currency: "BTC",
      multiplier: "0.00×",
      payout: "-1400.00000000",
      isPositive: false,
    },
    {
      game: "Speed Baccarat 3",
      user: "Hidden",
      hour: "8:50 pm",
      amount: "4000.00000000",
      currency: "BTC",
      multiplier: "0.00×",
      payout: "-4000.00000000",
      isPositive: false,
    },
  ]

  return (
    <section className="py-8">
      <div className="bg-[#15232D] rounded-lg overflow-hidden">
        <div className="flex flex-wrap">
          <TabButton active={activeTab === "casino"} onClick={() => setActiveTab("casino")}>
            Casino Betting
          </TabButton>
          <TabButton active={activeTab === "sports"} onClick={() => setActiveTab("sports")}>
            Sports Betting
          </TabButton>
          <TabButton active={activeTab === "race"} onClick={() => setActiveTab("race")} hasIndicator>
            Race Rankings
          </TabButton>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left py-4 px-6">game</th>
                <th className="text-left py-4 px-6">user</th>
                <th className="text-left py-4 px-6">hour</th>
                <th className="text-left py-4 px-6">Betting amount</th>
                <th className="text-left py-4 px-6">multiplier</th>
                <th className="text-left py-4 px-6">payout</th>
              </tr>
            </thead>
            <tbody>
              {bets.map((bet, index) => (
                <tr key={index} className="border-t border-gray-800">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <span className="text-gray-400">🎮</span>
                    {bet.game}
                  </td>
                  <td className="py-4 px-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      {bet.user}
                    </div>
                  </td>
                  <td className="py-4 px-6">{bet.hour}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      {bet.amount}
                      <span className={bet.currency === "BTC" ? "text-orange-400" : "text-blue-400"}>
                        {bet.currency === "BTC" ? "₿" : "Ξ"}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">{bet.multiplier}</td>
                  <td className={cn("py-4 px-6", bet.isPositive ? "text-green-500" : "text-red-500")}>
                    <div className="flex items-center gap-1">
                      {bet.payout}
                      <span className={bet.currency === "BTC" ? "text-orange-400" : "text-blue-400"}>
                        {bet.currency === "BTC" ? "₿" : "Ξ"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function TabButton({
  children,
  active,
  onClick,
  hasIndicator = false,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
  hasIndicator?: boolean
}) {
  return (
    <button
      className={cn(
        "py-4 px-6 text-sm font-medium relative",
        active ? "bg-[#1A2C38] text-white" : "bg-transparent text-gray-400 hover:text-white",
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {children}
        {hasIndicator && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
      </div>
    </button>
  )
}

