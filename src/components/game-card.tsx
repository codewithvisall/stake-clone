import Image from "next/image"

interface Game {
  id: number
  title: string
  provider: string
  image: string
  players: number
  exclusive: boolean
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute top-2 left-2 z-10 bg-[#15232D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
        {game.id}
      </div>

      {game.exclusive && (
        <div className="absolute top-2 right-2 z-10 bg-pink-600 text-white text-xs px-2 py-0.5 rounded">EXCLUSIVE</div>
      )}

      <div className="rounded-lg overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          width={200}
          height={200}
          className="w-full aspect-square object-cover transition-transform group-hover:scale-110"
        />
      </div>

      <div className="mt-2">
        <h3 className="font-bold text-center">{game.title}</h3>
        <p className="text-xs text-gray-400 text-center">{game.provider}</p>
      </div>

      <div className="flex items-center justify-center gap-1 mt-1">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="text-xs text-gray-400">{game.players} Playing</span>
      </div>
    </div>
  )
}

