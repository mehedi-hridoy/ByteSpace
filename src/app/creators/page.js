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

function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-5 text-white sm:px-8 xl:h-[120px] xl:px-[122px]">
      <Link href="/" className="flex shrink-0 items-center gap-1.5">
        <Image src="/logo.png" alt="" width={29} height={32} className="h-7 w-auto" />
        <span className="font-display text-[20px] font-bold leading-none xl:text-[24px]">
          ByteSpace
        </span>
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[12px] md:flex">
        <Link href="/">Home</Link>
        <Link href="/search">Courses</Link>
        <Link href="/creators" aria-current="page">Creators</Link>
      </nav>

      <div className="flex items-center gap-3 text-[11px] sm:gap-5 xl:gap-6 xl:text-[12px]">
        <Link href="/login">Sign In</Link>
        <Link href="/register">Join Us</Link>
        <Image src="/cart_logo.png" alt="Cart" width={24} height={24} className="h-5 w-5 object-contain xl:h-6 xl:w-6" />
      </div>
    </header>
  );
}

function StaticControl({ children, active = false, iconSrc, icon }) {
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
        <Image src={iconSrc} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
      ) : icon ? (
        <span aria-hidden="true" className="text-[14px]">{icon}</span>
      ) : null}
      {children}
    </button>
  );
}

function CreatorProfile() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 pt-7 text-white sm:px-8 sm:pb-14 xl:min-h-[375px] xl:px-0 xl:pb-[68px]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-5">
        <Image
          src="/creator.png"
          alt="PurePearl Studio"
          width={96}
          height={96}
          className="h-20 w-20 rounded-[18px] object-cover"
          priority
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[28px] font-semibold leading-tight sm:text-[32px]">
              PurePearl Studio
            </h1>
            <span className="inline-flex h-[30px] min-w-[86px] items-center justify-center rounded-full bg-brand-lime px-4 text-[12px] font-medium text-neutral-950">
              Creator
            </span>
          </div>
          <p className="mt-1 text-[14px] leading-5 text-white/85">
            Passionate UI/UX, Web designer
          </p>
        </div>
      </div>

      <div className="mt-7 max-w-[1120px] space-y-1 text-[14px] leading-6 text-white/90 sm:mt-8">
        <p>
          Welcome to the creative world of PurePearl Studio. Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!
        </p>
        <p>
          Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
        <div className="inline-flex h-[40px] items-center gap-2 rounded-full bg-white px-5 text-[14px] text-neutral-800">
          <span className="font-medium text-brand-blue">3</span> Products
        </div>
        <div className="inline-flex h-[40px] items-center gap-2 rounded-full bg-white px-5 text-[14px] text-neutral-800">
          <span className="font-medium text-brand-blue">12</span> Followers
        </div>
        <button
          type="button"
          className="ml-auto inline-flex h-[40px] min-w-[84px] items-center justify-center rounded-full bg-brand-lime px-5 text-[14px] font-medium text-neutral-950 transition-colors hover:bg-[#b8eb00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Follow
        </button>
      </div>
    </section>
  );
}

export default function CreatorsPage() {
  return (
    <>
      <GridBackground>
        <SiteHeader />
        <CreatorProfile />
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

          <section aria-label="Creator courses" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}