import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";

function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex h-[80px] w-full max-w-[1440px] items-center justify-between px-4 text-white sm:px-6 xl:h-[120px] xl:px-[122px]">
      <Link href="/" className="flex shrink-0 items-center gap-1.5">
        <Image src="/logo.png" alt="" width={29} height={32} className="h-7 w-auto" />
        <span className="font-display text-[20px] font-bold leading-none xl:text-[24px]">
          ByteSpace
        </span>
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[12px] md:flex">
        <Link href="/">Home</Link>
        <Link href="/search">Courses</Link>
        <Link href="#creators">Creators</Link>
      </nav>

      <div className="flex items-center gap-2 text-[11px] sm:gap-4 xl:gap-6 xl:text-[12px]">
        <Link href="#sign-in">Sign In</Link>
        <Link href="#join-us">Join Us</Link>
        <Image src="/cart_logo.png" alt="Cart" width={24} height={24} className="h-5 w-5 object-contain xl:h-6 xl:w-6" />
      </div>
    </header>
  );
}

export default function NotFoundPage() {
  return (
    <>
      <GridBackground className="min-h-[620px] xl:min-h-[957px]">
        <SiteHeader />

        <main className="relative mx-auto mt-8 h-[430px] w-full max-w-[936px] px-4 text-center sm:mt-10 sm:h-[470px] xl:mt-[40px] xl:h-[480px] xl:px-0">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 select-none font-display text-[220px] font-semibold leading-[0.95] sm:text-[300px] xl:text-[480px]"
            style={{
              backgroundImage: "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.62) 58%, rgba(212, 251, 32, 0) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </span>

          <div className="absolute inset-x-4 top-[112px] sm:top-[150px] xl:inset-x-0 xl:top-[378px]">
            <h1 className="mx-auto max-w-[935px] font-display text-[30px] font-semibold leading-[1.2] text-white sm:text-[48px] xl:text-[72px] xl:leading-[1.2]">
              The page you are looking
              <br />
              for doesn’t exist
            </h1>
            <p className="mx-auto mt-5 max-w-[486px] text-[12px] leading-5 text-white/75 sm:mt-6 sm:text-[14px]">
              Try a correct URL or go back to the homepage to start again.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex h-[46px] min-w-[163px] items-center justify-center rounded-full bg-brand-lime px-6 text-[13px] font-medium text-neutral-950 transition-colors hover:bg-[#b8eb00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:mt-8"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </GridBackground>

      <Footer />
    </>
  );
}