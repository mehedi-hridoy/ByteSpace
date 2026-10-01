import CourseCategoryCard from "./CourseCategoryCard";
import { courseCategories } from "@/data/courseCategories";

export default function LearningCategoriesSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1276px]
          flex-col
          items-center
          px-4
          pb-[116px]
          pt-[59px]
        "
      >
        <div className="w-full max-w-[917px] text-center">
          <h2
            className="
              mx-auto
              w-full
              max-w-[792px]
              font-display
              text-[36px]
              leading-[43px]
              font-bold
              tracking-[-1.1px]
              text-[#040819]
            "
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p
            className="
              mx-auto
              mt-[10px]
              w-full
              max-w-[917px]
              text-[18px]
              leading-[28px]
              font-normal
              tracking-[-0.2px]
              text-[#9297A3]
            "
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various
            <br className="hidden md:block" />
            fields, ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        <div
          className="
            mx-auto
            mt-[50px]
            flex
            w-full
            max-w-[1202px]
            flex-wrap
            justify-center
            gap-[40px]
          "
        >
          {courseCategories.map((category) => (
            <CourseCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
