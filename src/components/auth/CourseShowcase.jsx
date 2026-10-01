import Image from "next/image";
import CourseCard from "@/components/home/CourseCard";
import courses from "@/data/courses";

const backCourse = courses.find((course) => course.id === 2);
const frontCourse = courses.find((course) => course.id === 3);

export default function CourseShowcase({
  heading = "Sign up and come in",
  description = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
}) {
  return (
    <section className="relative mx-auto min-h-[570px] w-full max-w-[579px] overflow-hidden sm:min-h-[610px] xl:h-[784px] xl:min-h-0" aria-label="Featured courses">
      <div className="absolute left-0 top-5 z-10 max-w-[360px] text-white sm:max-w-[420px] xl:left-[54px]">
        <h1 className="font-display text-[16px] font-semibold leading-6">{heading}</h1>
        <p className="mt-2 text-[12px] leading-[19px] text-white/80">{description}</p>
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