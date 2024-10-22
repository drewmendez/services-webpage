export default function WorkWithUs() {
  return (
    <section className="relative mt-32 h-[689px] bg-[url('https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/skkve0aqzhkkyiytn92d/work-with-us')] bg-cover bg-center after:absolute after:inset-0 after:bg-black after:bg-opacity-60">
      <div className="container grid h-full place-content-center 2xl:max-w-[1200px]">
        <div className="z-10 max-w-[650px] text-center text-white">
          <h2 className="text-5xl tracking-widest md:text-3xl">Work With Us</h2>
          <div className="mx-auto my-7 h-px w-[120px] bg-white"></div>
          <p className="mb-12 leading-8">
            With decades of experience in luxurious Tri Valley real estate, our
            team is here to ensure that your dreams are a reality. Let us guide
            you through your home buying journey, contact us today!
          </p>
          <button className="border-2 px-10 py-4 text-sm font-semibold transition duration-300 hover:bg-white hover:text-black">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}
