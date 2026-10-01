const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CourseCategories() {
  return (
    <div className="mt-[36px] flex flex-col items-center gap-[16px]">
      {/* Row 1 */}
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {categories.slice(0, 8).map((category, index) => (
          <CategoryPill
            key={category}
            label={category}
            active={index === 0}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {categories.slice(8, 14).map((category) => (
          <CategoryPill
            key={category}
            label={category}
          />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {categories.slice(14).map((category) => (
          <CategoryPill
            key={category}
            label={category}
          />
        ))}

        <button
          type="button"
          className="
            ml-[2px]
            whitespace-nowrap
            text-[14px]
            leading-[20px]
            font-medium
            text-[#0047FF]
            transition-opacity
            hover:opacity-70
          "
        >
          + More
        </button>
      </div>
    </div>
  );
}

function CategoryPill({ label, active = false }) {
  return (
    <button
      type="button"
      className={`
        flex
        h-[43px]
        items-center
        justify-center
        whitespace-nowrap
        rounded-full
        px-[16px]
        text-[14px]
        leading-[20px]
        font-normal
        transition-colors

        ${
          active
            ? "bg-[#B8FF00] text-[#101010]"
            : "bg-[#F5F5F7] text-[#555963] hover:bg-[#ECECEF]"
        }
      `}
    >
      {label}
    </button>
  );
}