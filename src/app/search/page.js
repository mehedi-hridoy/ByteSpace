import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/home/CourseCard";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";
import courses from "@/data/courses";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const results = Array.from({ length: 18 }, (_, index) => courses[index % courses.length]);

function Header() {
  return (
    <header className="relative z-10 mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:h-[120px] xl:px-[122px]">
      <Link href="/" className="flex shrink-0 items-center gap-1.5">
        <Image src="/logo.png" alt="" width={29} height={32} className="h-7 w-auto" />
        <span className="font-display text-[20px] font-bold leading-none text-white xl:text-[24px]">
          ByteSpace
        </span>
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[12px] text-white md:flex">
        <Link href="/">Home</Link>
        <Link href="/search">Courses</Link>
        <Link href="/creators">Creators</Link>
      </nav>

      <div className="flex items-center gap-3 text-[11px] text-white sm:gap-5 xl:gap-6 xl:text-[12px]">
        <Link href="/login">Sign In</Link>
        <Link href="/register">Join Us</Link>
        <Image src="/cart_logo.png" alt="Cart" width={24} height={24} className="h-5 w-5 object-contain xl:h-6 xl:w-6" />
      </div>
    </header>
  );
}

function StaticControl({ children, active = false, icon, iconSrc }) {
  return (
    <button
      type="button"
      className={`inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border px-4 font-sans text-[13px] leading-5 transition-colors ${
        active
          ? "border-brand-lime bg-brand-lime text-neutral-950"
          : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
      }`}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
        />
      ) : icon ? (
        <span aria-hidden="true" className="text-[14px]">{icon}</span>
      ) : null}
      {children}
    </button>
  );
}

export default function SearchPage() {
  return (
    <>
      <GridBackground>
        <Header />
        <section className="relative z-10 mx-auto flex w-full flex-col items-center px-5 pb-14 pt-7 text-center sm:pb-[68px] sm:pt-8">
          <h1 className="font-display text-[30px] font-semibold leading-[1.2] text-white sm:text-[36px]">
            Find Your Next Course
          </h1>

          <form className="mt-6 flex w-full max-w-[620px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <label className="flex h-[48px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 text-neutral-500">
              <span aria-hidden="true" className="text-[18px] leading-none">⌕</span>
              <input
                type="search"
                aria-label="Search courses"
                placeholder="Search"
                className="min-w-0 flex-1 bg-transparent font-sans text-[14px] text-neutral-950 outline-none placeholder:text-neutral-400"
              />
            </label>
            <button
              type="button"
              className="inline-flex h-[46px] shrink-0 items-center justify-center gap-3 rounded-full bg-brand-lime px-6 font-sans text-[13px] font-medium text-neutral-950 sm:min-w-[144px]"
            >
              Courses <span aria-hidden="true">⌄</span>
            </button>
          </form>
        </section>
      </GridBackground>

      <main className="bg-white text-neutral-950">
        <div className="mx-auto w-full max-w-[1216px] px-5 pb-14 pt-10 sm:px-8 sm:pt-[46px] xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <StaticControl iconSrc="/icons/filter.png">Filter</StaticControl>
              <StaticControl iconSrc="/icons/image.png">Level</StaticControl>
              <StaticControl iconSrc="/icons/category.png">Category</StaticControl>
            </div>
            <StaticControl icon="≡">Most relevant <span aria-hidden="true">⌄</span></StaticControl>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Course categories">
            {categories.map((category, index) => (
              <StaticControl key={category} active={index === 0}>
                {category}
              </StaticControl>
            ))}
          </div>

          <section aria-label="Course search results" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
            {results.map((course, index) => (
              <CourseCard key={`search-result-${index}`} course={course} />
            ))}
          </section>

          <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
            <button type="button" aria-label="Previous page" disabled className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 disabled:cursor-not-allowed">
              ‹
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                type="button"
                aria-current={page === 1 ? "page" : undefined}
                className={`h-10 min-w-8 rounded-full px-2 font-sans text-[14px] font-medium ${page === 1 ? "text-brand-blue" : "text-neutral-700 hover:bg-neutral-50"}`}
              >
                {page}
              </button>
            ))}
            <button type="button" aria-label="Next page" className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
              ›
            </button>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}