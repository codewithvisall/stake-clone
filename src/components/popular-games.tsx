import { Carousel } from "./ui/carousel";
import GameCard from "./game-card";
import Link from "next/link";

export default function PopularGames() {
  const games = [
    {
      id: 1,
      title: "Sweet Bonanza",
      provider: "PRAGMATIC PLAY",
      image:
        "https://mediumrare.imgix.net/a77d914f12935f85ca574c3b52989b13cb48901ab8c55bdf326e1f2a177cbd97?w=360&h=472&fit=min&auto=format",
      players: 708,
      exclusive: false,
    },
    {
      id: 2,
      title: "HOME OF THE BRAVE",
      provider: "NOLIMIT CITY",
      image:
        "https://mediumrare.imgix.net/0bc0abf755f1e81014bb1e0204d6e0339663ed88c20ef9a2228860d82bf45525?w=360&h=472&fit=min&auto=format",
      players: 144,
      exclusive: false,
    },
    {
      id: 3,
      title: "WANTED DEAD or A WILD",
      provider: "HACKSAW GAMING",
      image:
        "https://mediumrare.imgix.net/1e5b55d154f203af847f1619a073044cc327376ce0401af67125e14f89631902?w=360&h=472&fit=min&auto=format",
      players: 332,
      exclusive: false,
    },
    {
      id: 4,
      title: "JOKER JAM",
      provider: "MASCOT STUDIOS",
      image:
        "https://mediumrare.imgix.net/f09d7634c8080d2de36474ce938027caec7b7caa6afcd56cef20d76d1c924815?w=360&h=472&fit=min&auto=format",
      players: 51,
      exclusive: true,
    },
    {
      id: 5,
      title: "TRIPLE POT GOLD",
      provider: "PRAGMATIC PLAY",
      image:
        "https://mediumrare.imgix.net/e365aeb59268c5b855faa72d77feb90c08ac4ffbeb701c81448f4db96a7ecee1?w=360&h=472&fit=min&auto=format",
      players: 213,
      exclusive: false,
    },
    {
      id: 6,
      title: "PIXEL CAFE",
      provider: "NEKO GAMES",
      image:
        "https://mediumrare.imgix.net/3e1e3bf9dd732adcd0528ffa34a1145fb642a8741d1aacf456ea0a6a8f13d1ed?w=360&h=472&fit=min&auto=format",
      players: 47,
      exclusive: true,
    },
    {
      id: 7,
      title: "FLAMING CHICKEN",
      provider: "SPINPLAY",
      image:
        "https://mediumrare.imgix.net/54d7a92e87925d3250c0520460540b68064c6b1452083ee2b24c904558da2e42?w=360&h=472&fit=min&auto=format",
      players: 87,
      exclusive: true,
    },
    {
      id: 8,
      title: "DUEL HUNT",
      provider: "HACKSAW GAMING",
      image:
        "https://mediumrare.imgix.net/34ee5a63f09ad96cd4d92ba752de18ca210df5439723203c26f385bed7ee97f1?w=360&h=472&fit=min&auto=format",
      players: 202,
      exclusive: false,
    },
    {
      id: 9,
      title: "TRIPLE POT GOLD",
      provider: "PRAGMATIC PLAY",
      image:
        "https://mediumrare.imgix.net/e365aeb59268c5b855faa72d77feb90c08ac4ffbeb701c81448f4db96a7ecee1?w=360&h=472&fit=min&auto=format",
      players: 213,
      exclusive: false,
    },
    {
      id: 10,
      title: "PIXEL CAFE",
      provider: "NEKO GAMES",
      image:
        "https://mediumrare.imgix.net/3e1e3bf9dd732adcd0528ffa34a1145fb642a8741d1aacf456ea0a6a8f13d1ed?w=360&h=472&fit=min&auto=format",
      players: 47,
      exclusive: true,
    },
    {
      id: 11,
      title: "FLAMING CHICKEN",
      provider: "SPINPLAY",
      image:
        "https://mediumrare.imgix.net/54d7a92e87925d3250c0520460540b68064c6b1452083ee2b24c904558da2e42?w=360&h=472&fit=min&auto=format",
      players: 87,
      exclusive: true,
    },
    {
      id: 12,
      title: "DUEL HUNT",
      provider: "HACKSAW GAMING",
      image:
        "https://mediumrare.imgix.net/34ee5a63f09ad96cd4d92ba752de18ca210df5439723203c26f385bed7ee97f1?w=360&h=472&fit=min&auto=format",
      players: 202,
      exclusive: false,
    },
  ];

  return (
    <section className="py-8">
      <Carousel
        title="Popular games"
        icon="🎮"
        itemClassName="w-[calc(100%-16px)] sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(12.5%-16px)]"
      >
        {games.map((game) => (
          <Link href={`/game/${game.id}`} key={game.id}>
            <GameCard game={game} />
          </Link>
        ))}
      </Carousel>
    </section>
  );
}
