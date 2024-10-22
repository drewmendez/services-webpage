import Marquee from "react-fast-marquee";

const marqueeItems = [
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/olcvsnzpdrd5tov8dbci/image-057",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/olcvsnzpdrd5tov8dbci/image-057",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/olcvsnzpdrd5tov8dbci/image-057",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa",
  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo",
];

export default function MarqueeContainer() {
  return (
    <section className="pt-28">
      <Marquee>
        <div className="flex h-[40px] gap-14">
          {marqueeItems.map((marqueeItem, index) => (
            <div className="first:ml-10" key={index}>
              <img className="h-full" src={marqueeItem} />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
