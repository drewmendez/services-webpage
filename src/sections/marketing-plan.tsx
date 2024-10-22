const services = [
  {
    image:
      "	https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007",
    title: "Responsive",
    description: "I am always available via phone, text, or email.",
  },
  {
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011",
    title: "Syndication",
    description:
      "I market your property locally, nationally, and internationally",
  },
];

const services2 = [
  {
    image:
      "	https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009",
    title: "Virtual Tour",
    description:
      "Let's make your home stand out with a high quality virtual tour.",
  },
  {
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013",
    title: "Photography",
    description:
      "Beatiful, high-end photography is a central part of our marketing plan for your property.",
  },
];

export default function MarketingPlan() {
  return (
    <section className="pt-28">
      <div className="container 2xl:max-w-[1200px]">
        <h2 className="mb-1 text-center text-4xl md:text-3xl">
          Comprehensive Marketing Plan
        </h2>

        <div className="mb-9 flex flex-1 items-center justify-around md:flex-col">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>

        <div className="w-full flex-1">
          <img
            className="w-full"
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hqguvxyyi5jciyrzy35v/page-3"
            alt="marketing"
          />
        </div>

        <div className="flex flex-1 items-center justify-around md:flex-col">
          {services2.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceProp {
  image: string;
  title: string;
  description: string;
}

function Service({ image, title, description }: ServiceProp) {
  return (
    <div className="flex max-w-[300px] flex-col items-center text-center">
      <div className="w-full max-w-[200px]">
        <img className="w-full" src={image} alt={title} />
      </div>
      <p className="mb-5 text-2xl font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
