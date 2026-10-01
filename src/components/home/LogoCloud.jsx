const logos = [
  {
    src: "/logos/logo1.png",
    alt: "Partner logo 1",
  },
  {
    src: "/logos/logo2.png",
    alt: "Partner logo 2",
  },
  {
    src: "/logos/logo3.png",
    alt: "Partner logo 3",
  },
  {
    src: "/logos/logo4.png",
    alt: "Partner logo 4",
  },
  {
    src: "/logos/logo5.png",
    alt: "Partner logo 5",
  },
];

export default function LogoCloud() {
  return (
    <section className="flex h-auto w-full items-center justify-center bg-[#F5F5F6] px-6 py-8 xl:h-[202px] xl:py-0">
      <div className="grid w-full max-w-[1132px] grid-cols-2 items-center justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:flex xl:justify-between xl:gap-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-[36px] w-full max-w-[140px] shrink-0 object-contain sm:h-[42px] sm:max-w-[168px] xl:w-[168px]"
          />
        ))}
      </div>
    </section>
  );
}