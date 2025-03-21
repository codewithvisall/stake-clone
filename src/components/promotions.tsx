import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function PromotionCard({
  title,
  description,
  image,
  link,
}: PromotionCardProps) {
  return (
    <div className="bg-[#15232D] rounded-lg overflow-hidden h-full">
      <div className="flex flex-col md:flex-row h-full">
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="inline-block bg-[#1A2C38] text-xs font-medium px-2 py-1 rounded mb-3">
              Promo
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
          </div>
          <Link href={link} className="text-blue-400 hover:underline text-sm">
            Read more
          </Link>
        </div>
        <div className="w-full md:w-1/3 h-40 md:h-auto relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Promotions() {
  const promotions = [
    {
      title: "IPL - Early Six, You Win",
      description: "Back for the 2025 Season!",
      image:
        "https://cdn.sanity.io/images/tdrhge4k/production/bdf484495447a2f837123a68174eb139c67adc12-1080x1080.png?w=440&h=440&fit=min&auto=format",
      link: "#",
    },
    {
      title: "Daily Races",
      description: "Play in our $100,000 Daily Race",
      image:
        "https://cdn.sanity.io/images/tdrhge4k/production/5fb8f7b8211dc695b4aebc6337d6ef3f0d7b6042-1080x1080.jpg?w=440&h=440&fit=min&auto=format",
      link: "#",
    },
    {
      title: "Horse Racing",
      description: "Refund for 2nd to 5th",
      image:
        "https://cdn.sanity.io/images/tdrhge4k/production/89b540811298c4f36c1ce6f2fe6fe48b36fd59a5-2160x2160.jpg?w=440&h=440&fit=min&auto=format",
      link: "#",
    },
    {
      title: "Weekly Bonus",
      description: "Get up to $1,000 bonus every week",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
  ];

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">🎁</span>
          <h2 className="text-xl font-medium">Promotion</h2>
        </div>
        <button className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promotions.slice(0, 3).map((promo, index) => (
          <PromotionCard
            key={index}
            title={promo.title}
            description={promo.description}
            image={promo.image}
            link={promo.link}
          />
        ))}
      </div>
    </section>
  );
}
