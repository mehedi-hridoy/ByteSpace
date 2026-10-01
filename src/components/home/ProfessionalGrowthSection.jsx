import CourseCard from "./CourseCard";
import courses from "@/data/courses";

const featuredCourse = courses[0];

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ProfessionalGrowthSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <BackgroundGlows />

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1258px]
          px-4
          py-[72px]
          sm:px-8
          xl:px-[40px]
          xl:pb-[96px]
          xl:pt-[80px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-[40px]
          "
        >
          <div className="flex flex-col lg:max-w-[580px]">
            <h2
              className="
                font-display
                text-[32px]
                font-semibold
                leading-[1.12]
                text-neutral-950
                sm:text-heading-m
              "
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p
              className="
                mt-[24px]
                max-w-[475px]
                font-sans
                text-body-m
                text-neutral-500
                sm:mt-[28px]
              "
            >
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <div className="mt-[32px] flex items-start gap-[28px] sm:mt-[38px] sm:gap-[34px]">
              <Stat value="12K" label="Students" />
              <Stat value="70+" label="Courses" />
              <Stat value="16" label="Creators" />
            </div>
          </div>

          <StudentVisual />
        </div>

        <div
          className="
            mt-[72px]
            grid
            grid-cols-1
            items-center
            gap-12
            lg:mt-[88px]
            lg:grid-cols-2
            lg:gap-[40px]
          "
        >
          <CreatorVisual />

          <div className="flex flex-col lg:max-w-[520px] lg:justify-self-end">
            <h2
              className="
                font-display
                text-[32px]
                font-semibold
                leading-[1.12]
                text-neutral-950
                sm:text-heading-m
              "
            >
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p
              className="
                mt-[22px]
                max-w-[445px]
                font-sans
                text-body-m
                text-neutral-500
              "
            >
              <span className="font-medium text-neutral-950">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="mt-[28px] flex flex-col gap-[14px]">
              {creatorBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-[12px] font-sans text-body-m text-neutral-950"
                >
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
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
      <div className="relative mx-auto h-full min-h-[1180px] w-full max-w-[1440px]">
        <div
          className="absolute left-[-152px] top-[-180px] h-[1137px] w-[1137px] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at center, #CBFC01 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
          }}
        />
        <div
          className="absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at center, #003BE2 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)",
          }}
        />
      </div>
    </div>
  );
}

function StudentVisual() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[620px] sm:h-[500px] lg:h-[540px]">
      <LimeScribble className="absolute right-[18px] top-[36px] h-[118px] w-[82px] sm:right-[8px] sm:top-[48px] sm:h-[148px] sm:w-[102px]" />

      <div
        className="
          absolute
          left-0
          top-[42px]
          z-10
          w-[min(100%,320px)]
          sm:top-[58px]
          sm:w-[335px]
        "
      >
        <div className="rounded-[24px] shadow-[0_18px_40px_rgba(8,13,33,0.10)]">
          <CourseCard course={featuredCourse} />
        </div>
      </div>

      <img
        src="/humanImage.png"
        alt="Student learning on a laptop"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-8px]
          z-20
          h-[340px]
          w-auto
          max-w-none
          object-contain
          drop-shadow-[0_28px_32px_rgba(15,23,42,0.22)]
          sm:right-0
          sm:h-[430px]
          lg:h-[455px]
        "
      />

      <div className="absolute bottom-[118px] right-0 z-30 sm:bottom-[128px] sm:right-[-6px]">
        <LearningProgressCard />
      </div>
    </div>
  );
}

function CreatorVisual() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[520px] lg:h-[560px] lg:justify-self-start">
      <div className="absolute left-0 top-[78px] z-10 flex flex-col gap-[12px] sm:top-[96px]">
        <RevenueCard
          tone="blue"
          eyebrow="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          progress={72}
        />
        <RevenueCard
          tone="lime"
          eyebrow="Year to Date"
          period="2023"
          amount="$1,200.38"
          badge="+19"
          progress={64}
        />
      </div>

      <img
        src="/girl.png"
        alt="Creator managing courses on a tablet"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[72px]
          z-20
          h-[390px]
          w-auto
          max-w-none
          object-contain
          drop-shadow-[0_28px_32px_rgba(15,23,42,0.18)]
          sm:left-[90px]
          sm:h-[470px]
          lg:h-[510px]
        "
      />

      <LimeScribble className="absolute bottom-[210px] right-[36px] z-20 h-[110px] w-[78px] rotate-[-8deg] sm:bottom-[230px] sm:right-[48px] sm:h-[140px] sm:w-[98px]" />

      <div className="absolute bottom-[28px] right-0 z-30 sm:bottom-[36px]">
        <HappyStudentsCard />
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="font-sans text-[24px] font-medium leading-none text-[#0047FF] sm:text-[25px]">
        {value}
      </span>
      <span className="mt-[7px] font-sans text-[12px] leading-none text-neutral-500">
        {label}
      </span>
    </div>
  );
}

function LearningProgressCard() {
  return (
    <div
      className="
        h-[112px]
        w-[176px]
        rounded-[16px]
        bg-white
        px-3
        pt-3
        shadow-[0_12px_32px_rgba(8,13,33,0.10)]
        sm:h-[131px]
        sm:w-[232px]
        sm:px-[16px]
        sm:pt-[12px]
      "
    >
      <div className="font-sans text-[10px] leading-[16px] text-[#151515]">
        Learning Progress
      </div>
      <div
        className="
          mt-[2px]
          font-display
          text-[28px]
          font-semibold
          leading-[34px]
          text-[#151515]
          sm:text-[32px]
          sm:leading-[38px]
        "
      >
        55%
      </div>
      <div className="mt-[5px] h-[6px] w-full overflow-hidden rounded-full bg-[#EEEEEE]">
        <div className="h-full w-[55%] rounded-full bg-brand-lime" />
      </div>
    </div>
  );
}

function RevenueCard({
  tone,
  eyebrow,
  period,
  amount,
  progress,
  badge,
}) {
  const isBlue = tone === "blue";

  return (
    <div
      className={`
        relative
        h-[92px]
        w-[168px]
        overflow-hidden
        rounded-[18px]
        px-[14px]
        pt-[12px]
        shadow-[0_10px_24px_rgba(8,13,33,0.12)]
        sm:h-[102px]
        sm:w-[186px]
        ${isBlue ? "bg-[#155EEF] text-white" : "bg-brand-lime text-[#101010]"}
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-sans text-[10px] leading-[14px]">{eyebrow}</p>
          <p
            className={`font-sans text-[8px] leading-[12px] ${
              isBlue ? "text-white/70" : "text-[#3A3B3F]/70"
            }`}
          >
            {period}
          </p>
        </div>
        {badge ? (
          <span
            className="
              flex
              h-[22px]
              min-w-[34px]
              items-center
              justify-center
              rounded-full
              bg-[#B5F000]
              px-[6px]
              font-sans
              text-[10px]
              font-medium
              text-[#101010]
            "
          >
            {badge}
          </span>
        ) : null}
      </div>

      <p className="mt-[6px] font-display text-[22px] font-semibold leading-none sm:text-[24px]">
        {amount}
      </p>

      <div
        className={`mt-[10px] h-[5px] w-full overflow-hidden rounded-full ${
          isBlue ? "bg-white/25" : "bg-black/10"
        }`}
      >
        <div
          className={`h-full rounded-full ${isBlue ? "bg-brand-lime" : "bg-[#101010]"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function HappyStudentsCard() {
  return (
    <div
      className="
        w-[226px]
        rounded-[16px]
        bg-white
        px-3
        py-3
        shadow-[0_12px_32px_rgba(8,13,33,0.10)]
        sm:w-[258px]
        sm:px-[16px]
      "
    >
      <div className="font-sans text-[10px] leading-[16px] text-[#151515]">
        Happy Students
      </div>
      <div className="font-sans text-[8px] leading-[12px] text-[#858991]">
        4.5 (240)
        <span className="ml-[2px] text-[#D4E900]">★</span>
      </div>
      <img
        src="/humans.png"
        alt=""
        className="mt-[6px] h-[43px] w-full object-contain object-left"
      />
    </div>
  );
}

function LimeScribble({ className }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-brand-lime ${className}`}
      style={{
        WebkitMaskImage: "url(/shapes/whiteSpiralShape.png)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        maskImage: "url(/shapes/whiteSpiralShape.png)",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
      }}
    />
  );
}

function CheckIcon() {
  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#155EEF]">
      <svg
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1.2 4.4 4.05 7.2 9.8 1.4"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
