import React from "react";

const exposures = [
  {
    type: "Local Exposure",
    description:
      "Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.",
  },
  {
    type: "National Exposure",
    description:
      "We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.",
  },
  {
    type: "International Exposure",
    description:
      "To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK",
  },
];

export default function MarketExposure() {
  return (
    <section className="pt-28">
      <div className="container space-y-10 2xl:max-w-[1200px]">
        <div className="space-y-5 text-center md:text-start">
          <h2 className="text-4xl md:text-2xl">
            We Market Your Home to The World
          </h2>
          <p className="font-semibold">Our Online Marketing Strategy</p>
          <p className="mx-auto max-w-[850px]">
            The Bay Area remains one of the world&apos;s most sought-after
            regions to live in, and when looking to sell, it is vital that your
            home be marketed online to audiences locally, nationally, and
            internationally.
          </p>
        </div>
        <div className="flex gap-10 md:flex-col">
          {exposures.map((exposure) => (
            <Exposure key={exposure.type} {...exposure} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExposureProp {
  type: string;
  description: string;
}

function Exposure({ type, description }: ExposureProp) {
  return (
    <div className="flex-1 space-y-5">
      <p className="text-center font-semibold md:text-start">{type}</p>
      <p>{description}</p>
    </div>
  );
}
