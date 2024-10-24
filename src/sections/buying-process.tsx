const processes = [
  "Initial Consultation & Planning",
  "Search for a Home & Get Pre-Approved",
  "Submit an Offer",
  "Complete Settlement Process",
];

export default function BuyingProcess() {
  return (
    <section className="relative bg-[url('https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/nhcjbdzbycjvfcks0nqe/image-004')] bg-cover bg-center py-24 after:absolute after:inset-0 after:bg-black after:bg-opacity-40">
      <div className="container grid h-full place-content-center 2xl:max-w-[1200px]">
        <div className="z-10 max-w-[1000px] space-y-10">
          <h3 className="text-center text-5xl font-semibold text-white md:text-3xl">
            The Buying Process
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {processes.map((process, index) => (
              <Process key={index} index={index + 1} text={process} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessProp {
  index: number;
  text: string;
}

function Process({ index, text }: ProcessProp) {
  return (
    <div className="grid size-[250px] w-full max-w-[300px] place-content-center gap-3 bg-black bg-opacity-50 p-4 text-center text-white shadow-lg md:size-[190px]">
      <p className="text-5xl font-semibold md:text-3xl">{index}</p>
      <p className="text-xl font-semibold md:text-base">{text}</p>
    </div>
  );
}
