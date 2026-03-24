"use client";

import Link from "next/link";
import type { GameListItem } from "../lib/types";

export default function GameCard({
  game,
  className = "",
}: {
  game: GameListItem;
  className?: string;
}) {
  const orig =
    game.discount_percent > 0
      ? Math.round(game.price_lkr / (1 - game.discount_percent / 100))
      : null;

  return (
    <Link
      href={`/catalog/${game.slug}`}
      className={`game-card group block rounded-xl overflow-hidden border ${className}`}
      style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)" }}
    >
      {/* Cover — aspect-video so landscape art fills correctly */}
      <div className="relative overflow-hidden aspect-video">
        {game.cover_img_url ? (
          <img
            src={game.cover_img_url}
            alt={game.title}
            className="game-card-img h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center text-4xl"
            style={{ background: "#12121e" }}
          >
            🎮
          </div>
        )}
        {game.discount_percent > 0 && (
          <span
            className="absolute top-0 left-0 rounded-br-lg px-2 py-1 text-xs font-black text-black"
            style={{ background: "#fbbf24" }}
          >
            -{game.discount_percent}%
          </span>
        )}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "60px",
            background: "linear-gradient(to top, rgba(8,8,16,0.95), transparent)",
          }}
        />
      </div>

      {/* Info panel */}
      <div className="px-3 pt-2 pb-3" style={{ background: "rgba(10,10,20,0.95)" }}>
        <h3
          className="text-xs font-semibold text-white leading-tight line-clamp-2 mb-2"
          style={{ minHeight: "30px" }}
        >
          {game.title}
        </h3>
        {game.price_lkr === 0 ? (
          <span
            className="inline-block rounded px-2 py-0.5 text-xs font-bold"
            style={{ background: "rgba(34,197,94,0.2)", color: "#4ade80" }}
          >
            FREE
          </span>
        ) : (
          <div className="flex flex-col gap-0.5">
            {orig && (
              <span className="text-xs line-through" style={{ color: "rgba(255,255,255,0.3)" }}>
                LKR {orig.toLocaleString()}
              </span>
            )}
            <span className="text-sm font-black text-white">
              LKR {Math.round(game.price_lkr).toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
