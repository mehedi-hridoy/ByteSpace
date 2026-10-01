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
    <section className="w-full h-[202px] bg-[#F5F5F6] flex items-center justify-center px-6">
      <div className="w-full max-w-[1132px] flex items-center justify-between gap-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-[168px] h-[42px] object-contain shrink-0"
          />
        ))}
      </div>
    </section>
  );
}