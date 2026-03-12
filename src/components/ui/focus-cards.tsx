"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/components/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group relative rounded-xl overflow-hidden h-96 w-full cursor-pointer transition-all duration-500 ease-out",
        "bg-gray-100 dark:bg-neutral-900",
        hovered !== null && hovered !== index && "scale-95 opacity-60 blur-[1px]",
        hovered === index && "scale-105 shadow-2xl"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className={cn(
          "object-cover absolute inset-0 transition-all duration-500",
          "group-hover:scale-110 group-hover:brightness-110"
        )}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />

      {/* title */}
      <div
        className={cn(
          "absolute bottom-6 left-6 right-6 text-white text-xl md:text-2xl font-semibold",
          "translate-y-6 opacity-0 transition-all duration-500",
          hovered === index && "translate-y-0 opacity-100"
        )}
      >
        {card.title}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}