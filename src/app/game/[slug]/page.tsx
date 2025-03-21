"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Expand,
  Maximize2,
  Trophy,
  PlayCircle,
  Lightbulb,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GameDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [showControls, setShowControls] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "big-win" | "lucky-win" | "challenge" | "explanation"
  >("big-win");
  const [activeBetTab, setActiveBetTab] = useState<
    "my-bet" | "all-bets" | "high-stakes" | "race-rankings"
  >("my-bet");

  // This would normally come from an API based on the slug
  const gameData = {
    id: "joker-jam",
    title: "Joker Jam",
    studio: "large studio",
    maxWin: "25,000.00x",
    image:
      "https://mediumrare.imgix.net/a77d914f12935f85ca574c3b52989b13cb48901ab8c55bdf326e1f2a177cbd97?w=360&h=472&fit=min&auto=format",
    thumbnail:
      "https://mediumrare.imgix.net/a77d914f12935f85ca574c3b52989b13cb48901ab8c55bdf326e1f2a177cbd97?w=360&h=472&fit=min&auto=format",
    description:
      "Spin the reels and match symbols to win big in this exciting slot game featuring free games and bonus rounds!",
    edge: "3.41%",
    tags: [
      "Bonus Purchase",
      "jewel",
      "large studio",
      "New Release",
      "Recommended Games",
      "slot",
      "Stake Exclusive",
      "Vegas",
      "Volatility switch",
    ],
    isExclusive: true,
    releaseDate: "2024-03-15",
    volatility: "High",
    rtp: "96.59%",
    minBet: 0.1,
    maxBet: 100.0,
    features: [
      "Free Spins",
      "Multipliers",
      "Wild Symbols",
      "Scatter Symbols",
      "Bonus Game",
    ],
    paylines: 20,
    reels: 5,
    rows: 3,
    providerInfo: {
      name: "large studio",
      license: "MGA/UKGC",
      founded: 2010,
    },
    statistics: {
      totalPlays: 150000,
      averageWinRate: "1:3.2",
      popularityRank: 4,
      averagePlayTime: "8m",
    },
  };

  const suggestedGames = [
    {
      id: "sweet-bonanza-1000",
      title: "SWEET BONANZA 1000",
      provider: "PRAGMATIC PLAY",
      image:
        "https://mediumrare.imgix.net/0bc0abf755f1e81014bb1e0204d6e0339663ed88c20ef9a2228860d82bf45525?w=360&h=472&fit=min&auto=format",
      isExclusive: false,
    },
    {
      id: "home-of-the-brave",
      title: "HOME OF THE BRAVE",
      provider: "NOLIMIT CITY",
      image:
        "https://mediumrare.imgix.net/1e5b55d154f203af847f1619a073044cc327376ce0401af67125e14f89631902?w=360&h=472&fit=min&auto=format",
      isExclusive: false,
    },
    {
      id: "wanted-dead-or-a-wild",
      title: "WANTED DEAD or A WILD",
      provider: "HACKSAW GAMING",
      image:
        "https://mediumrare.imgix.net/54d7a92e87925d3250c0520460540b68064c6b1452083ee2b24c904558da2e42?w=360&h=472&fit=min&auto=format",
      isExclusive: false,
    },
    {
      id: "joker-jam",
      title: "JOKER JAM",
      provider: "MASSIVE STUDIOS",
      image:
        "https://mediumrare.imgix.net/f09d7634c8080d2de36474ce938027caec7b7caa6afcd56cef20d76d1c924815?w=360&h=472&fit=min&auto=format",
      isExclusive: true,
    },
    {
      id: "triple-pot-gold",
      title: "TRIPLE POT GOLD",
      provider: "PRAGMATIC PLAY",
      image:
        "https://mediumrare.imgix.net/e365aeb59268c5b855faa72d77feb90c08ac4ffbeb701c81448f4db96a7ecee1?w=360&h=472&fit=min&auto=format",
      isExclusive: false,
    },
    {
      id: "pixel-cafe",
      title: "PIXEL CAFE",
      provider: "TALENT ENGINE",
      image:
        "https://mediumrare.imgix.net/3e1e3bf9dd732adcd0528ffa34a1145fb642a8741d1aacf456ea0a6a8f13d1ed?w=360&h=472&fit=min&auto=format",
      isExclusive: true,
    },
    {
      id: "flaming-chicken",
      title: "FLAMING CHICKEN",
      provider: "SPINPLAY",
      image:
        "https://mediumrare.imgix.net/54d7a92e87925d3250c0520460540b68064c6b1452083ee2b24c904558da2e42?w=360&h=472&fit=min&auto=format",
      isExclusive: true,
    },
  ];

  const providers = [
    {
      id: "pragmatic-play",
      name: "PRAGMATIC PLAY",
      logo: "https://mediumrare.imgix.net/bbe0383f83f2e71badab4b10933267b48ea655c522873a74ca22059d36b44220?w=338&h=134&fit=min&auto=format",
    },
    {
      id: "evolution",
      name: "Evolution",
      logo: "https://mediumrare.imgix.net/49a2201353bd06c3f89a9c5ff56d0efee785712e77786d4200d6fbc4ffc0e73d?w=338&h=134&fit=min&auto=format",
    },
    {
      id: "hacksaw-gaming",
      name: "HACKSAW GAMING",
      logo: "https://mediumrare.imgix.net/4e9cb40a5a7132d3958ece2a08643072097162a080a6ee07ef40dc0404ab8d3b?w=338&h=134&fit=min&auto=format",
    },
    {
      id: "nolimit-city",
      name: "NOLIMIT CITY",
      logo: "https://mediumrare.imgix.net/fffebb8ad954c1fdcaca444cf83308ef0226ea06f8aa7a8d0a4e5f50c1d433c7?w=338&h=134&fit=min&auto=format",
    },
    {
      id: "massive-studios",
      name: "MASSIVE STUDIOS",
      logo: "https://mediumrare.imgix.net/be6c453a8f450c2fbf5181abc844f080b537458061aeca3902575510acacdbea?w=338&h=134&fit=min&auto=format",
    },
    {
      id: "twist",
      name: "twist",
      logo: "https://mediumrare.imgix.net/6ca18ec1ea689aa57fc4f0bd11d3361dcb458ba4d13164e5415e203685e3355f?w=338&h=134&fit=min&auto=format",
    },
    {
      id: "push-gaming",
      name: "PUSH GAMING",
      logo: "https://mediumrare.imgix.net/cdaa15e06b980baf09639dd97db720177c9b87e5be688d7ce641f9d01fe278a0?w=338&h=134&fit=min&auto=format",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0F1923]">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4">
          <div className="relative bg-[#0A1018] rounded-lg overflow-hidden mb-6">
            {/* Game Display Area */}
            <div className="aspect-video relative">
              <img
                src={gameData.image || "/placeholder.svg"}
                alt={gameData.title}
                className="w-full h-full object-cover"
              />

              {/* Currency Selection */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#15232D]/80 px-3 py-1.5 rounded-md">
                <span className="text-sm text-gray-300">Currency notation</span>
                <div className="flex items-center gap-1 text-white">
                  <span className="text-green-500">💰</span>
                  <span>USD</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              {/* Game Controls */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex gap-2">
                  <button className="p-2 rounded-md bg-[#15232D]/80 text-gray-300 hover:text-white">
                    <Expand size={20} />
                  </button>
                  <button className="p-2 rounded-md bg-[#15232D]/80 text-gray-300 hover:text-white">
                    <Maximize2 size={20} />
                  </button>
                </div>

                <div className="flex items-center">
                  <img src="/logo.svg" alt="Stake" className="h-6" />
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                  <PlayCircle size={20} />
                  Play the trial version
                </Button>
              </div>
            </div>

            {/* Game Info */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold">{gameData.title}</h1>
                  <p className="text-gray-400">{gameData.studio}</p>
                </div>

                <div className="flex items-center gap-2 bg-[#15232D] px-3 py-2 rounded-md">
                  <Trophy className="text-yellow-500" size={18} />
                  <span>{gameData.maxWin}</span>
                  <span className="text-gray-400">Hidden</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={activeTab === "big-win" ? "default" : "outline"}
                  className={
                    activeTab === "big-win"
                      ? "bg-[#1A2C38]"
                      : "bg-[#15232D] border-gray-700 hover:bg-[#1A2C38]"
                  }
                  onClick={() => setActiveTab("big-win")}
                >
                  big win
                </Button>
                <Button
                  variant={activeTab === "lucky-win" ? "default" : "outline"}
                  className={
                    activeTab === "lucky-win"
                      ? "bg-[#1A2C38]"
                      : "bg-[#15232D] border-gray-700 hover:bg-[#1A2C38]"
                  }
                  onClick={() => setActiveTab("lucky-win")}
                >
                  lucky win
                </Button>
                <Button
                  variant={activeTab === "challenge" ? "default" : "outline"}
                  className={
                    activeTab === "challenge"
                      ? "bg-[#1A2C38]"
                      : "bg-[#15232D] border-gray-700 hover:bg-[#1A2C38]"
                  }
                  onClick={() => setActiveTab("challenge")}
                >
                  Challenge
                </Button>
                <Button
                  variant={activeTab === "explanation" ? "default" : "outline"}
                  className={
                    activeTab === "explanation"
                      ? "bg-[#1A2C38]"
                      : "bg-[#15232D] border-gray-700 hover:bg-[#1A2C38]"
                  }
                  onClick={() => setActiveTab("explanation")}
                >
                  explanation
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="bg-[#15232D] border-gray-700 hover:bg-[#1A2C38]"
                  >
                    <Lightbulb size={18} className="mr-2" />
                    Game rules
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#15232D] border-gray-700 hover:bg-[#1A2C38]"
                  >
                    <Headphones size={18} className="mr-2" />
                    Support
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Play the trial version</span>
                  <div className="w-10 h-6 bg-[#15232D] rounded-full flex items-center p-1">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <span>Actual play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Details Section */}
          <div className="bg-[#15232D] rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/5">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={gameData.thumbnail || "/placeholder.svg"}
                      alt={gameData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {gameData.isExclusive && (
                    <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded">
                      EXCLUSIVE
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-4/5">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400">Edge:</span>
                    <span>{gameData.edge}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {gameData.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#1A2C38] hover:bg-[#1A2C38]/80 text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🎮</span>
                <h2 className="text-xl font-medium">suggestion</h2>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {suggestedGames.map((game) => (
                <Link
                  href={`/games/${game.id}`}
                  key={game.id}
                  className="block"
                >
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="aspect-square">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {game.isExclusive && (
                      <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded">
                        EXCLUSIVE
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="font-bold text-sm">{game.title}</h3>
                    <p className="text-xs text-gray-400">{game.provider}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Providers Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🏢</span>
                <h2 className="text-xl font-medium">Provider</h2>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {providers.map((provider) => (
                <Link
                  href={`/providers/${provider.id}`}
                  key={provider.id}
                  className="block"
                >
                  <div className="bg-[#15232D] rounded-lg p-4 h-20 flex items-center justify-center">
                    <img
                      src={provider.logo || "/placeholder.svg"}
                      alt={provider.name}
                      className="max-h-full max-w-full"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Betting Section */}
          <div className="bg-[#15232D] rounded-lg overflow-hidden mb-6">
            <div className="flex flex-wrap">
              <TabButton
                active={activeBetTab === "my-bet"}
                onClick={() => setActiveBetTab("my-bet")}
              >
                My bet
              </TabButton>
              <TabButton
                active={activeBetTab === "all-bets"}
                onClick={() => setActiveBetTab("all-bets")}
              >
                All bets
              </TabButton>
              <TabButton
                active={activeBetTab === "high-stakes"}
                onClick={() => setActiveBetTab("high-stakes")}
              >
                High stakes betting
              </TabButton>
              <TabButton
                active={activeBetTab === "race-rankings"}
                onClick={() => setActiveBetTab("race-rankings")}
                hasIndicator
              >
                Race Rankings
              </TabButton>

              <div className="ml-auto flex items-center px-4">
                <div className="flex items-center gap-2 bg-[#1A2C38] px-3 py-1 rounded">
                  <span>10</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">💰</span>
                <span className="font-medium">$100,000 Race</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-gray-400">⏱️</span>
                <span>24 hours after the end</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  children,
  active,
  onClick,
  hasIndicator = false,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  hasIndicator?: boolean;
}) {
  return (
    <button
      className={`py-4 px-6 text-sm font-medium relative ${
        active
          ? "bg-[#1A2C38] text-white"
          : "bg-transparent text-gray-400 hover:text-white"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {children}
        {hasIndicator && (
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        )}
      </div>
    </button>
  );
}
