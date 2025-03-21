import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#15232D] w-full sticky top-0 z-40">
      <Link
        href="/"
        className="text-2xl font-bold text-white flex items-center gap-2"
      >
        <img src="/logo.svg" alt="Stake" className="h-8" />
        <span className="text-white text-2xl font-bold">Stake</span>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/login">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white text-sm md:text-base"
          >
            log in
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="bg-blue-500 hover:bg-blue-600 text-sm md:text-base">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
}
