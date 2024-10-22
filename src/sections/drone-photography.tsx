const services = [
  {
    image:
      "	https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007",
    title: "Responsive",
    description:
      "I am always available via phone, text, or email to answer your questions in a timely manner.",
  },
  {
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011",
    title: "Syndication",
    description:
      "I market your property locally, nationally, and internationally",
  },
  {
    image:
      "	https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009",
    title: "Virtual Tour",
    description:
      "Let's make your home stand out with a high quality virtual tour.",
  },
  {
    image:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qljffx423kswkhh1oyc3/image-081",
    title: "Drone Photography",
    description:
      "Beautiful photography is a central part of our marketing plan for your property.",
  },
];

export default function DronePhotography() {
  return (
    <section className="pt-28">
      <div className="container 2xl:max-w-[1200px]">
        <div className="flex items-center md:flex-col-reverse">
          <div className="grid w-[65%] grid-cols-2 grid-rows-2 md:w-full md:grid-cols-none md:grid-rows-none md:justify-center">
            {services.map((service) => (
              <Service key={service.title} {...service} />
            ))}
          </div>
          <div className="w-[35%] md:w-full">
            <img
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25"
              alt="drone"
            />
          </div>
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
      <div className="w-[150px]">
        <img src={image} alt={title} />
      </div>
      <p className="mb-5 text-2xl font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
