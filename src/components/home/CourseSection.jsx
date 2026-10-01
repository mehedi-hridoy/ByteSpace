"use client";

import CourseCategories from "./CourseCategories";
import CourseCard from "./CourseCard";
import courses from "@/data/courses";

export default function CourseSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1086px]
          px-4
          pt-[66px]
          pb-[62px]
        "
      >
        {/* Heading + Description */}
        <div className="mx-auto w-full max-w-[917px] text-center">
          <h2
            className="
              mx-auto
              max-w-[588px]
              text-[40px]
              leading-[1.08]
              font-bold
              tracking-[-1.2px]
              text-[#080D21]
            "
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p
            className="
              mx-auto
              mt-[18px]
              max-w-[917px]
              text-[16px]
              leading-[26px]
              font-normal
              tracking-[-0.15px]
              text-[#9297A3]
            "
          >
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            <br className="hidden md:block" />
            fields, from technology to the arts, and make a difference in
            your career and life.
          </p>
        </div>

        {/* Categories */}
        <CourseCategories />

        {/* Course Cards */}
        <div
          className="
            mt-[64px]
            grid
            grid-cols-1
            gap-x-[40px]
            gap-y-[32px]
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}