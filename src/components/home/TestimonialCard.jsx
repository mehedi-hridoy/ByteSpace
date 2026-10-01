export default function TestimonialCard({ testimonial }) {
  return (
    <article
      className="
        flex
        h-auto
        w-full
        max-w-[374px]
        flex-col
        gap-[24px]
        rounded-[24px]
        bg-white
        p-[24px]
        xl:h-[432px]
        xl:w-[374px]
        xl:shrink-0
      "
    >
      <img
        src={testimonial.image}
        alt=""
        className="h-[80px] w-[80px] rounded-full object-cover"
      />

      <div className="flex flex-col gap-[4px]">
        <h3 className="font-sans text-[16px] font-semibold leading-[24px] text-neutral-950">
          {testimonial.name}
        </h3>
        <p className="font-sans text-[14px] leading-[20px] text-[#155EEF]">
          {testimonial.role}
        </p>
      </div>

      <p className="font-sans text-body-m text-neutral-500">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </article>
  );
}
