"use client";

export default function CourseCard({ course }) {
  return (
    <article
      className="
        w-full
        overflow-hidden
        rounded-[24px]
        border
        border-[#D9DCE2]
        bg-white
      "
    >
      {/* Image */}
      <div className="relative mx-[10px] mt-[10px] overflow-hidden rounded-[16px]">
        <img
          src={course.image}
          alt={course.title}
          className="
            block
            aspect-[341/195]
            w-full
            object-cover
          "
        />

        {/* Image information */}
        <div
          className="
            absolute
            bottom-[10px]
            left-[10px]
            right-[10px]
            flex
            items-center
            justify-between
            gap-[6px]
          "
        >
          <span
            className="
              rounded-full
              bg-white/75
              px-[10px]
              py-[5px]
              text-[11px]
              leading-none
              text-[#4D525C]
              backdrop-blur-[4px]
            "
          >
            {course.lessons} Lessons
          </span>

          <span
            className="
              rounded-full
              bg-white/75
              px-[10px]
              py-[5px]
              text-[11px]
              leading-none
              text-[#4D525C]
              backdrop-blur-[4px]
            "
          >
            {course.duration}
          </span>

          <span
            className="
              rounded-full
              bg-white/75
              px-[10px]
              py-[5px]
              text-[11px]
              leading-none
              text-[#4D525C]
              backdrop-blur-[4px]
            "
          >
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-[10px] pb-[14px] pt-[13px]">
        {/* Title + rating */}
        <div className="flex items-start justify-between gap-[8px]">
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-[17px]
                font-semibold
                leading-[24px]
                tracking-[-0.35px]
                text-[#080D21]
              "
            >
              {course.title}
            </h3>

            <p
              className="
                mt-[1px]
                text-[10px]
                leading-[14px]
                text-[#080D21]
              "
            >
              by{" "}
              <span className="text-[#155EEF]">
                {course.instructor}
              </span>
            </p>
          </div>

          <div
            className="
              flex
              shrink-0
              items-center
              gap-[3px]
              pt-[1px]
              text-[14px]
              text-[#6B707A]
            "
          >
            <span>{course.rating}</span>
            <span className="text-[#C7CAD0]">★</span>
          </div>
        </div>

        {/* Level + Students */}
        <div className="mt-[13px] flex items-center justify-between">
          {/* Level */}
          <div
            className="
              flex
              h-[29px]
              items-center
              gap-[6px]
              rounded-full
              bg-[#F4F4F5]
              px-[11px]
            "
          >
            <span className="text-[13px] leading-none text-[#4E535D]">
              ▮
            </span>

            <span
              className="
                text-[11px]
                leading-none
                text-[#4E535D]
              "
            >
              {course.level}
            </span>
          </div>

          {/* Students */}
          <div className="flex items-center">
            {course.students.map((student, index) => (
              <img
                key={`${student}-${index}`}
                src={student}
                alt=""
                className={`
                  h-[28px]
                  w-[28px]
                  rounded-full
                  border-[2px]
                  border-white
                  object-cover
                  ${index !== 0 ? "-ml-[7px]" : ""}
                `}
              />
            ))}

            <span
              className="
                -ml-[7px]
                flex
                h-[28px]
                w-[28px]
                items-center
                justify-center
                rounded-full
                border-[2px]
                border-white
                bg-[#C7FF00]
                text-[10px]
                font-medium
                text-[#111111]
              "
            >
              {course.studentCount}+
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-[12px] flex items-baseline gap-[2px]">
          <span
            className="
              text-[17px]
              font-semibold
              leading-none
              text-[#0057FF]
            "
          >
            ${course.price}
          </span>

          <span
            className="
              text-[10px]
              leading-none
              text-[#858A94]
            "
          >
            /{course.priceType}
          </span>
        </div>
      </div>
    </article>
  );
}