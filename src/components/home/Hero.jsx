import Image from "next/image";
import Link from "next/link";
import GridBackground from "../ui/GridBackground";

export default function Hero() {
  return (
    <GridBackground className="min-h-[680px] xl:min-h-[730px]">
      <div className="relative isolate mx-auto w-full max-w-[1440px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block"
        >
          <Image
            src="/shapes/parrotSpiralShape.png"
            alt=""
            width={266}
            height={387}
            className="absolute left-[-80px] top-[175px] h-[260px] w-[260px] object-contain lg:left-[-100px] lg:top-[195px] lg:h-[320px] lg:w-[320px] xl:left-[-118px] xl:top-[221px] xl:h-[385px] xl:w-[385px]"
          />
          <Image
            src="/shapes/parrotPiramid.png"
            alt=""
            width={426}
            height={744}
            className="absolute right-[-16px] top-[150px] h-[209px] w-[120px] object-contain lg:right-[-10px] lg:top-[185px] lg:h-[262px] lg:w-[150px] xl:left-[1274px] xl:right-auto xl:top-[207px] xl:h-[297px] xl:w-[170px]"
          />
          <Image
            src="/shapes/ring.png"
            alt=""
            width={344}
            height={343}
            className="absolute left-1 top-[560px] h-[220px] w-[220px] object-contain lg:left-3 lg:top-[620px] lg:h-[280px] lg:w-[280px] xl:left-[18px] xl:top-[682px] xl:h-[342px] xl:w-[342px]"
          />
          <Image
            src="/shapes/whitePiramid.png"
            alt=""
            width={380}
            height={378}
            className="absolute right-12 top-[340px] h-[120px] w-[120px] object-contain lg:right-20 lg:top-[400px] lg:h-[160px] lg:w-[160px] xl:left-[1130px] xl:right-auto xl:top-[438px] xl:h-[189px] xl:w-[189px]"
          />
          <Image
            src="/shapes/whiteSpiralShape.png"
            alt=""
            width={633}
            height={664}
            className="absolute left-20 top-[400px] h-[130px] w-[130px] object-contain lg:left-[168px] lg:top-[440px] lg:h-[160px] lg:w-[160px] xl:left-[218px] xl:top-[459px] xl:h-[189px] xl:w-[189px]"
          />
          <Image
            src="/shapes/whiteSpiralShape.png"
            alt=""
            width={633}
            height={664}
            className="absolute right-[-24px] top-[560px] h-[220px] w-[220px] object-contain lg:right-[-24px] lg:top-[620px] lg:h-[270px] lg:w-[270px] xl:left-[1127px] xl:right-auto xl:top-[672px] xl:h-[330px] xl:w-[330px]"
          />
        </div>

        {/* Header / Navigation */}
        <header className="relative z-10 h-[80px] px-4 sm:px-6 xl:h-[120px] xl:px-0">
          <nav className="relative mx-auto flex h-full w-full max-w-[1440px] items-center justify-between xl:block">

            {/* Logo */}
            <a
              href="#"
              className="static flex h-[31.5px] shrink-0 items-center xl:absolute xl:left-[122px] xl:top-[35px]"
            >
              <img
                src="/logo.png"
                alt=""
                className="block h-[31.5px] w-[28.88px] object-contain"
              />

              <span className="ml-[6px] font-display text-[20px] font-bold leading-[30px] text-white xl:text-[24px]">
                ByteSpace
              </span>
            </a>

            {/* Center Navigation */}
            <div
              className="
                hidden
                xl:absolute
                xl:left-1/2
                xl:top-[47px]
                xl:flex
                xl:-translate-x-1/2
                xl:items-center
                xl:gap-[24px]
              "
            >
              <Link
                href="/"
                className="text-[11px] leading-[24px] text-white xl:text-[12px]"
              >
                Home
              </Link>

              <a
                href="/search"
                className="text-[11px] leading-[24px] text-white xl:text-[12px]"
              >
                Courses
              </a>

              <a
                href="/creators"
                className="text-[11px] leading-[24px] text-white xl:text-[12px]"
              >
                Creators
              </a>
            </div>

            {/* Right Navigation */}
            <div
              className="
                static
                flex
                items-center
                gap-2
                sm:gap-3
                xl:absolute
                xl:right-[80px]
                xl:top-[47px]
                xl:gap-[24px]
              "
            >
              <a
                href="#"
                className="text-[11px] leading-[24px] text-white xl:text-[12px]"
              >
                Sign In
              </a>

              <a
                href="/register"
                className="text-[11px] leading-[24px] text-white xl:text-[12px]"
              >
                Join Us
              </a>

              <img
                src="/cart_logo.png"
                alt="Cart"
                className="h-5 w-5 object-contain xl:h-[24px] xl:w-[24px]"
              />
            </div>

          </nav>
        </header>

        {/* =========================================================
            HERO CONTENT
            ========================================================= */}
        <main className="relative z-10 flex flex-col items-center pt-8 text-center xl:pt-[48px]">

          {/* Heading */}
          <div className="w-full max-w-[935px] px-4 xl:w-[935px] xl:px-0">
            <h1
              className="
                font-display
                text-[36px]
                font-semibold
                leading-[44px]
                tracking-normal
                text-white
                sm:text-[44px]
                sm:leading-[54px]
                md:text-[56px]
                md:leading-[64px]
                xl:text-[72px]
                xl:leading-[86px]
                xl:tracking-[-1.5px]
              "
            >
              Get Access to Hundreds
              <br className="hidden xl:block" />
              Courses Available
            </h1>
          </div>

          {/* Description */}
          <div className="mt-4 w-full max-w-[819px] px-5 sm:mt-5 xl:mt-[22px] xl:w-[819px] xl:px-0">
            <p
              className="
                text-[14px]
                font-normal
                leading-[22px]
                text-white
                xl:text-[12px]
                xl:leading-[29px]
              "
            >
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          {/* Search */}
          <div
            className="
              mt-5
              flex
              h-auto
              w-full
              max-w-[581px]
              flex-col
              items-center
              gap-3
              px-4
              sm:flex-row
              sm:gap-4
              sm:px-6
              xl:mt-[22px]
              xl:h-[52px]
              xl:gap-[16px]
              xl:px-0
            "
          >
            {/* Search Input */}
            <div
              className="
                flex
                h-[52px]
                w-full
                min-w-0
                items-center
                rounded-full
                bg-white
                px-4
                sm:flex-1
                sm:px-[18px]
                xl:w-[461px]
                xl:shrink-0
              "
            >
              <span
                className="
                  mr-[10px]
                  flex
                  h-[16px]
                  w-[16px]
                  shrink-0
                  items-center
                  justify-center
                  text-[17px]
                  leading-none
                  text-[#8C929C]
                "
              >
                ⌕
              </span>

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="
                  w-full
                  bg-transparent
                  p-0
                  text-[12px]
                  leading-[24px]
                  text-[#333333]
                  outline-none
                  placeholder:text-[#8C929C]
                "
              />
            </div>

            {/* Search Button */}
            <button
              type="button"
              className="
                h-[46px]
                w-full
                shrink-0
                rounded-full
                bg-brand-lime
                px-0
                text-[12px]
                font-medium
                leading-[24px]
                text-black
                sm:w-[104px]
                xl:w-[104px]
              "
            >
              Search
            </button>
          </div>

          {/* =========================================================
              ROUND / PEOPLE COMPOSITION
              Figma composition: 578 × 541
              ========================================================= */}
          <div
            className="
              relative
              mt-8
              h-[440px]
              w-full
              max-w-[578px]
              shrink-0
              overflow-hidden
              sm:h-[480px]
              xl:mt-[40px]
              xl:h-[541px]
              xl:w-[578px]
              xl:max-w-none
              xl:overflow-visible
            "
          >

            {/* =====================================================
                LARGE GREEN ELLIPSE

                Figma:
                W = 1149
                H = 1149
                Stroke = 320
                Position centered behind composition
                ===================================================== */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[48px]
                h-[680px]
                w-[680px]
                -translate-x-1/2
                rounded-full
                border-[190px]
                border-brand-lime
                sm:top-[56px]
                sm:h-[820px]
                sm:w-[820px]
                sm:border-[240px]
                xl:top-[72px]
                xl:h-[1110px]
                xl:w-[1110px]
                xl:border-[320px]
              "
            />

            {/* =====================================================
                MAIN PERSON
                Figma composition area ≈ 578 × 541
                ===================================================== */}
            <img
              src="/humanImage.png"
              alt="Student learning"
              className="
                absolute
                bottom-0
                left-1/2
                z-[2]
                h-[380px]
                w-full
                -translate-x-1/2
                object-cover
                object-center
                sm:h-[430px]
                xl:h-[541px]
                xl:w-[578px]
              "
            />

            {/* =====================================================
                UI / UX DESIGN CARD
                Figma: 208 × 70
                ===================================================== */}
            <div
              className="
                absolute
                left-1
                top-[28px]
                z-[5]
                flex
                h-[64px]
                w-[180px]
                flex-col
                justify-center
                rounded-[12px]
                bg-white
                px-3
                text-left
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                sm:left-4
                sm:top-[44px]
                xl:left-[-28px]
                xl:top-[128px]
                xl:h-[70px]
                xl:w-[208px]
                xl:rounded-[16px]
                xl:px-[16px]
              "
            >
              <span
                className="
                  text-[11px]
                  font-normal
                  leading-[16px]
                  text-[#151515]
                  xl:text-[12px]
                "
              >
                UI/UX Design
              </span>

              <span
                className="
                  text-[8px]
                  font-normal
                  leading-[14px]
                  text-[#9A9EA6]
                "
              >
                200 Courses&nbsp; • &nbsp;1000+ Students
              </span>
            </div>

            {/* =====================================================
                LEARNING PROGRESS CARD
                Figma: 232 × 131
                ===================================================== */}
            <div
              className="
                absolute
                right-1
                top-[112px]
                z-[5]
                h-[112px]
                w-[176px]
                rounded-[14px]
                bg-white
                px-3
                pt-3
                text-left
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                sm:right-3
                sm:w-[190px]
                xl:left-[412px]
                xl:right-auto
                xl:top-[140px]
                xl:h-[131px]
                xl:w-[232px]
                xl:rounded-[16px]
                xl:px-[16px]
                xl:pt-[12px]
              "
            >
              <div
                className="
                  text-[10px]
                  font-normal
                  leading-[16px]
                  text-[#151515]
                "
              >
                Learning Progress
              </div>

              <div
                className="
                  mt-[2px]
                  text-[28px]
                  font-semibold
                  leading-[34px]
                  tracking-[-1px]
                  text-[#151515]
                  xl:text-[32px]
                  xl:leading-[38px]
                "
              >
                55%
              </div>

              {/* Progress bar */}
              <div
                className="
                  mt-[5px]
                  h-[6px]
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-[#EEEEEE]
                "
              >
                <div
                  className="
                    h-full
                    w-[55%]
                    rounded-full
                    bg-brand-lime
                  "
                />
              </div>
            </div>

            {/* =====================================================
                HAPPY STUDENTS CARD
                Figma: 258 × 121
                ===================================================== */}
            <div
              className="
                absolute
                bottom-3
                left-1
                z-[5]
                h-[108px]
                w-[226px]
                rounded-[14px]
                bg-white
                px-3
                pt-3
                text-left
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                sm:bottom-4
                sm:left-4
                xl:bottom-auto
                xl:left-[-104px]
                xl:top-[327px]
                xl:h-[121px]
                xl:w-[258px]
                xl:rounded-[16px]
                xl:px-[16px]
                xl:pt-[12px]
              "
            >
              {/* Title */}
              <div
                className="
                  text-[10px]
                  font-normal
                  leading-[16px]
                  text-[#151515]
                "
              >
                Happy Students
              </div>

              {/* Rating */}
              <div
                className="
                  text-[8px]
                  leading-[12px]
                  text-[#858991]
                "
              >
                4.5 (240)
                <span className="ml-[2px] text-[#D4E900]">★</span>
              </div>

              {/* =================================================
                  STUDENT AVATARS
                  Uses public/humans.png
                  Figma inner frame: 232 × 43
                  ================================================= */}
              <div
                className="
                  relative
                  mt-[4px]
                  h-[43px]
                  w-[194px]
                  overflow-hidden
                  xl:w-[232px]
                "
              >
                <img
                  src="/humans.png"
                  alt="Students"
                  className="
                    absolute
                    left-0
                    top-0
                    h-[43px]
                    w-full
                    object-cover
                    object-center
                    xl:w-[232px]
                  "
                />

                {/* 2K+ badge */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-[43px]
                    min-w-[43px]
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-lime
                    px-[6px]
                    text-[9px]
                    font-medium
                    text-[#151515]
                  "
                >
                  2K+
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </GridBackground>
  );
}