import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/home/CourseCard";
import GridBackground from "@/components/ui/GridBackground";
import courses from "@/data/courses";

const backCourse = courses.find((course) => course.id === 2);
const frontCourse = courses.find((course) => course.id === 3);

function CourseShowcase() {
  return (
    <section className="relative mx-auto min-h-[570px] w-full max-w-[579px] overflow-hidden sm:min-h-[610px] xl:h-[784px] xl:min-h-0" aria-label="Featured courses">
      <div className="absolute left-0 top-5 z-10 max-w-[360px] text-white sm:max-w-[420px] xl:left-[54px]">
        <h1 className="font-display text-[16px] font-semibold leading-6">
          Sign up and come in
        </h1>
        <p className="mt-2 text-[12px] leading-[19px] text-white/80">
          The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image src="/shapes/ring.png" alt="" width={344} height={343} className="absolute left-[88px] top-[154px] h-[76px] w-[76px] object-contain sm:left-[108px] sm:top-[168px] sm:h-[92px] sm:w-[92px] xl:left-[112px] xl:top-[160px] xl:h-[96px] xl:w-[96px]" />
        <Image src="/shapes/parrotPiramid.png" alt="" width={426} height={744} className="absolute left-0 top-[392px] h-[150px] w-[86px] object-contain sm:left-2 sm:top-[420px] sm:h-[178px] sm:w-[102px] xl:left-[54px] xl:top-[408px] xl:h-[190px] xl:w-[110px]" />
        <Image src="/shapes/whiteSpiralShape.png" alt="" width={633} height={664} className="absolute right-0 top-[324px] h-[104px] w-[100px] object-contain sm:right-4 sm:top-[350px] sm:h-[124px] sm:w-[118px] xl:right-[4px] xl:top-[344px] xl:h-[132px] xl:w-[126px]" />
      </div>

      <div className="absolute left-0 top-[214px] z-10 w-[236px] sm:left-[12px] sm:top-[236px] sm:w-[260px] xl:left-[54px] xl:top-[228px] xl:w-[270px]">
        <CourseCard course={backCourse} />
      </div>
      <div className="absolute left-[72px] top-[150px] z-20 w-[236px] sm:left-[94px] sm:top-[174px] sm:w-[260px] xl:left-[126px] xl:top-[164px] xl:w-[270px]">
        <CourseCard course={frontCourse} />
      </div>

      <div className="absolute left-[150px] top-[442px] z-30 w-[190px] rounded-[14px] bg-brand-lime px-3 py-2.5 sm:left-[184px] sm:top-[466px] sm:w-[218px] xl:left-[202px] xl:top-[470px] xl:w-[258px] xl:rounded-[16px] xl:px-4 xl:py-3">
        <p className="text-[11px] font-medium leading-4 text-neutral-950">Happy Students</p>
        <p className="text-[9px] leading-3 text-neutral-700">4.5 (240) <span className="text-[#D4E900]">★</span></p>
        <div className="relative mt-1 h-[30px] w-full overflow-hidden rounded-full xl:h-[36px]">
          <Image src="/humans.png" alt="" width={232} height={43} className="h-full w-full object-cover" />
          <span className="absolute right-0 top-0 flex h-[30px] min-w-[30px] items-center justify-center rounded-full bg-neutral-950 px-1 text-[8px] font-medium text-white xl:h-[36px] xl:min-w-[36px] xl:text-[9px]">
            2K+
          </span>
        </div>
      </div>
    </section>
  );
}

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
        Already have an account? <Link href="#login" className="text-brand-blue">Login</Link>
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