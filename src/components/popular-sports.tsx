import { Carousel } from "./ui/carousel";
import SportCard from "./sport-card";

export default function PopularSports() {
  const sports = [
    {
      id: 1,
      title: "SOCCER",
      image:
        "https://mediumrare.imgix.net/soccer-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 2,
      title: "TENNIS",
      image:
        "https://mediumrare.imgix.net/tennis-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 3,
      title: "BASKETBALL",
      image:
        "https://mediumrare.imgix.net/basketball-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 4,
      title: "CRICKET",
      image:
        "https://mediumrare.imgix.net/cricket-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 5,
      title: "RACING",
      image:
        "https://mediumrare.imgix.net/racing-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 6,
      title: "BASEBALL",
      image:
        "https://mediumrare.imgix.net/baseball-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 7,
      title: "ICE HOCKEY",
      image:
        "https://mediumrare.imgix.net/ice-hockey-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 8,
      title: "VOLLEYBALL",
      image:
        "https://mediumrare.imgix.net/volleyball-ko.png?w=360&h=472&fit=min&auto=format",
    },
    {
      id: 9,
      title: "BOXING",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 10,
      title: "MMA",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 11,
      title: "AMERICAN FOOTBALL",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 12,
      title: "RUGBY",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section className="py-8">
      <Carousel
        title="Popular sports"
        icon="🏆"
        itemClassName="w-[calc(100%-16px)] sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(12.5%-16px)]"
      >
        {sports.map((sport) => (
          <SportCard key={sport.id} sport={sport} />
        ))}
      </Carousel>
    </section>
  );
}
