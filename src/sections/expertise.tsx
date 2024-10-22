export default function Expertise() {
  return (
    <section className="pt-32">
      <div className="container 2xl:max-w-[1200px]">
        <div className="flex items-center md:flex-col-reverse md:items-start md:gap-10">
          <div className="grid flex-1 place-content-center">
            <h3 className="mb-6 text-4xl md:text-3xl">My Staging Expertise</h3>
            <ul className="list-disc space-y-3 pl-5">
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              className="w-full"
              src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025"
              alt="me"
            />
          </div>
        </div>

        <div className="flex items-stretch md:mt-10 md:flex-col-reverse">
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023"
              alt="decor"
            />
          </div>
          <div className="grid flex-1 place-items-center bg-black py-5">
            <p className="text-4xl text-white md:text-2xl">Decor Guidance</p>
          </div>
        </div>

        <div className="flex items-stretch md:mt-10 md:flex-col">
          <div className="grid flex-1 place-items-center bg-black">
            <p className="py-5 text-4xl text-white md:text-2xl">
              Intentional Layout
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tvntwvzwsjyi3ndwtpux/image-022"
              alt="layout"
            />
          </div>
        </div>

        <div className="flex items-stretch md:mt-10 md:flex-col">
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024"
              alt="expertise"
            />
          </div>
          <div className="grid flex-1 place-items-center md:mt-10 md:justify-start">
            <ul className="list-disc space-y-3 pl-5">
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
