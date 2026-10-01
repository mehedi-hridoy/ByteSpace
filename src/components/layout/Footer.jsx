import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          px-6
          pt-12
          xl:min-h-[445px]
          xl:px-0
          xl:pt-[60px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-y-12
            lg:h-[234px]
            lg:grid-cols-[minmax(0,528fr)_minmax(0,580fr)]
            lg:gap-x-[92px]
            lg:gap-y-12
            xl:grid-cols-[528px_580px]
            xl:gap-x-[92px]
          "
        >
          {/* =========================================================
              TOP FOOTER CONTENT
             ========================================================= */}
          <div
            className="
              contents
            "
          >
            {/* =======================================================
                NEWSLETTER / BRAND SECTION
               ======================================================= */}
            <div className="min-w-0 lg:h-[234px]">
              {/* Logo */}
              <div className="flex h-8 items-center gap-1.5">
                <Image
                  src="/logo.png"
                  alt=""
                  width={29}
                  height={32}
                  className="h-[28px] w-auto shrink-0"
                />
                <span className="font-display text-[22px] font-bold leading-none text-neutral-950">
                  ByteSpace
                </span>
              </div>

              {/* Description */}
              <p
                className="
                  mt-[17px]
                  w-full
                  max-w-[528px]
                  font-sans
                  text-[14px]
                  font-normal
                  leading-[20px]
                  text-[#3F3F46]
                "
              >
                Stay Up to date with our latest features and releases by
                joining our newsletter.
              </p>

              {/* Newsletter form */}
              <form
                className="
                  mt-[32px]
                  flex
                  h-[52px]
                  w-full
                  max-w-[504px]
                  items-center
                  gap-[24px]
                "
              >
                {/* Input */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="
                    box-border
                    h-[52px]
                    min-w-0
                    flex-1
                    rounded-[26px]
                    border
                    border-neutral-300
                    bg-white
                    px-[20px]
                    font-sans
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-[#27272A]
                    outline-none
                    placeholder:text-neutral-600
                    focus:border-brand-lime
                  "
                />

                {/* Search button */}
                <button
                  type="submit"
                  className="
                    box-border
                    h-[46px]
                    w-[104px]
                    shrink-0
                    rounded-[26px]
                    border-0
                    bg-brand-lime
                    px-0
                    font-sans
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-[#18181B]
                    transition-opacity
                    hover:opacity-90
                  "
                >
                  Search
                </button>
              </form>

              {/* Subscription disclaimer */}
              <p
                className="
                  mt-[15px]
                  w-full
                  max-w-[430px]
                  font-sans
                  text-[12px]
                  font-normal
                  leading-[20px]
                  text-[#52525B]
                "
              >
                By subscribing, you agree to our Privacy Policy and consent
                to receive updates from our company.
              </p>
            </div>

            {/* =======================================================
                FOOTER NAVIGATION
               ======================================================= */}
            <nav
              aria-label="Footer navigation"
              className="
                grid
                w-full
                grid-cols-3
                gap-x-3
                gap-y-6
                sm:gap-x-6
                sm:gap-y-8
                lg:h-[222px]
                lg:grid-cols-[repeat(3,minmax(0,1fr))]
                lg:pt-[40px]
                xl:w-[580px]
                xl:gap-x-[40px]
              "
            >
              {/* Column 1 */}
              <div className="min-w-0">
                <ul className="m-0 flex list-none flex-col gap-[16px] p-0">
                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Featured Courses
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Featured Categories
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Business
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      IT
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Design
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="min-w-0">
                <ul className="m-0 flex list-none flex-col gap-[16px] p-0">
                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Development
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Marketing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Photography
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Finance
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Sport
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="min-w-0">
                <ul className="m-0 flex list-none flex-col gap-[16px] p-0">
                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Become a Creator
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Affiliate Program
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      Help
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[20px]
                        text-[#3F3F46]
                        no-underline
                      "
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* =========================================================
              BOTTOM FOOTER
             ========================================================= */}
          <div
            className="
              mt-0
              w-full
              border-t
              border-neutral-200
              pt-6
              lg:col-span-2
              lg:mt-6
            "
          >
            <div
              className="
                flex
                flex-col
                w-full
                items-center
                justify-between
                gap-4
                sm:flex-row
              "
            >
              {/* Copyright */}
              <p
                className="
                  m-0
                  font-sans
                  text-[12px]
                  font-normal
                  leading-[18px]
                  text-neutral-600
                "
              >
                © 2023 ByteSpace. All rights reserved.
              </p>

              {/* Legal links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#"
                  className="
                    font-sans
                    text-[12px]
                    font-normal
                    leading-[18px]
                    text-neutral-600
                    no-underline
                  "
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="
                    font-sans
                    text-[12px]
                    font-normal
                    leading-[18px]
                    text-neutral-600
                    no-underline
                  "
                >
                  Terms of Service
                </a>

                <a
                  href="#"
                  className="
                    font-sans
                    text-[12px]
                    font-normal
                    leading-[18px]
                    text-neutral-600
                    no-underline
                  "
                >
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
