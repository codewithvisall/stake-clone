"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  title?: string;
  icon?: React.ReactNode;
};

export function Carousel({
  children,
  className,
  itemClassName,
  title,
  icon,
}: CarouselProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {(title || icon) && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {icon && <span className="text-gray-400">{icon}</span>}
            {title && <h2 className="text-xl font-medium">{title}</h2>}
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-[#15232D] text-gray-400 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 snap-x w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {React.Children.map(children, (child) => (
          <div className={cn("flex-shrink-0 snap-start", itemClassName)}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
