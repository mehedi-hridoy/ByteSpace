import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function CommunitySection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <BackgroundGlows />

      <div
        className="
          relative z-10
          mx-auto
          flex
          w-full
          max-w-[1204px]
          flex-col
          gap-[48px]
          px-4
          py-[72px]
          sm:px-8
          xl:gap-[72px]
          xl:px-0
          xl:pb-[96px]
          xl:pt-[74px]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            gap-6
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-[40px]
          "
        >
          <h2
            className="
              max-w-[534px]
              font-display
              text-[32px]
              font-semibold
              leading-[1.12]
              text-neutral-950
              sm:text-heading-m
            "
          >
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p
            className="
              max-w-[560px]
              font-sans
              text-body-m
              text-neutral-500
              lg:pt-[8px]
            "
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-[24px]
            md:flex-row
            md:flex-wrap
            md:items-stretch
            md:justify-center
            xl:h-[436px]
            xl:flex-nowrap
            xl:justify-between
            xl:gap-[41px]
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundGlows() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="relative mx-auto h-full min-h-[800px] w-full max-w-[1440px]">
        <div
          className="absolute right-[-180px] top-[-220px] h-[1137px] w-[1137px] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at center, #CBFC01 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
          }}
        />
        <div
          className="absolute left-[-280px] bottom-[-420px] h-[1137px] w-[1137px] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at center, #003BE2 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)",
          }}
        />
      </div>
    </div>
  );
}
