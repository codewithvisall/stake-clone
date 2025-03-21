import Image from "next/image"

interface Sport {
  id: number
  title: string
  image: string
}

export default function SportCard({ sport }: { sport: Sport }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute top-2 left-2 z-10 bg-[#15232D] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
        {sport.id}
      </div>

      <div className="rounded-lg overflow-hidden">
        <Image
          src={sport.image || "/placeholder.svg"}
          alt={sport.title}
          width={200}
          height={200}
          className="w-full aspect-square object-cover transition-transform group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="font-bold text-xl text-white text-center">{sport.title}</h3>
      </div>
    </div>
  )
}

