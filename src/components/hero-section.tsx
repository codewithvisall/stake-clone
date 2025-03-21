import type React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Mail, Twitch } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">
          The world&apos;s largest online casino and sportsbook
        </h1>
        <Button className="bg-blue-500 hover:bg-blue-600 w-fit mt-4 mb-8">
          Sign up
        </Button>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400 mb-2">Or join us next</p>
          <div className="flex gap-2">
            <SocialButton icon={<Facebook size={18} />} color="bg-[#1877F2]" />
            <SocialButton icon={<Mail size={18} />} color="bg-[#4285F4]" />
            <SocialButton
              icon={<span className="text-xl">L</span>}
              color="bg-[#25D366]"
            />
            <SocialButton icon={<Twitch size={18} />} color="bg-[#6441A4]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CategoryCard
          title="casino"
          icon="🎲"
          imageUrl="https://mediumrare.imgix.net/explore-casino-ko.png?w=700&h=460&fit=min&auto=format"
          bgColor="bg-blue-900"
        />
        <CategoryCard
          title="Sportsbook"
          icon="🏆"
          imageUrl="https://mediumrare.imgix.net/explore-sports-ko.png?w=700&h=460&fit=min&auto=format"
          bgColor="bg-green-900"
        />
      </div>
    </section>
  );
}

function SocialButton({
  icon,
  color,
}: {
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <button
      className={`${color} w-10 h-10 rounded-md flex items-center justify-center`}
    >
      {icon}
    </button>
  );
}

function CategoryCard({
  title,
  icon,
  imageUrl,
  bgColor,
}: {
  title: string;
  icon: string;
  imageUrl: string;
  bgColor: string;
}) {
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden relative`}>
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{title}</span>
      </div>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
