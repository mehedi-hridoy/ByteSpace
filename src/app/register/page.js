import Image from "next/image";
import Link from "next/link";
import CourseShowcase from "@/components/auth/CourseShowcase";
import GridBackground from "@/components/ui/GridBackground";

function RegisterForm() {
  return (
    <section className="mx-auto flex min-h-[650px] w-full max-w-[579px] flex-col rounded-[24px] bg-white px-6 py-8 sm:px-10 sm:py-10 xl:h-[784px] xl:min-h-0 xl:px-10 xl:py-[40px]">
      <p className="text-[12px] leading-4 text-brand-blue">Create an Account</p>
      <h2 className="mt-1 font-display text-[30px] font-semibold leading-[1.2] text-neutral-950 sm:text-[34px]">
        Welcome to<br />ByteSpace
      </h2>

      <form className="mt-7">
        <label className="block text-[12px] leading-4 text-neutral-800">
          Full Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Jamie Davis"
            required
            className="mt-2 h-[48px] w-full rounded-[10px] border border-neutral-200 px-4 text-[14px] text-neutral-950 outline-none placeholder:text-neutral-400 focus:border-brand-blue"
          />
        </label>

        <label className="mt-4 block text-[12px] leading-4 text-neutral-800">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="designer@example.com"
            required
            className="mt-2 h-[48px] w-full rounded-[10px] border border-neutral-200 px-4 text-[14px] text-neutral-950 outline-none placeholder:text-neutral-400 focus:border-brand-blue"
          />
        </label>

        <label className="mt-4 block text-[12px] leading-4 text-neutral-800">
          Password
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="********"
            minLength={8}
            required
            className="mt-2 h-[48px] w-full rounded-[10px] border border-neutral-200 px-4 text-[14px] text-neutral-950 outline-none placeholder:text-neutral-400 focus:border-brand-blue"
          />
        </label>

        <button
          type="button"
          className="ml-auto mt-4 flex h-[46px] min-w-[120px] items-center justify-center rounded-full bg-brand-lime px-6 text-[13px] font-medium text-neutral-950 transition-colors hover:bg-[#b8eb00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        >
          Continue
        </button>
      </form>

      <p className="mt-auto pt-12 text-center text-[12px] text-neutral-600">
        Already have an account? <Link href="/login" className="text-brand-blue">Login</Link>
      </p>
    </section>
  );
}

export default function RegisterPage() {
  return (
    <GridBackground className="min-h-screen">
      <header className="mx-auto flex h-[100px] w-full max-w-[1200px] items-center px-5 sm:px-8 xl:h-[120px] xl:px-0">
        <Link href="/" aria-label="ByteSpace home">
          <Image src="/logo.png" alt="ByteSpace" width={29} height={32} className="h-8 w-auto" priority />
        </Link>
      </header>

      <main className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-8 px-5 pb-10 sm:px-8 xl:min-h-[784px] xl:grid-cols-[579px_579px] xl:gap-[42px] xl:px-0 xl:pb-0">
        <CourseShowcase />
        <RegisterForm />
      </main>
    </GridBackground>
  );
}