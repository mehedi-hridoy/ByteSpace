export default function CourseCategoryCard({ category }) {
  return (
    <article
      className="
        flex
        h-[167px]
        w-[167px]
        shrink-0
        flex-col
        items-center
        justify-center
        rounded-[24px]
        border
        border-[#D9D9DE]
        bg-white
      "
    >
      <img
        src={category.icon}
        alt=""
        className="h-[60px] w-[60px] object-contain"
      />

      <h3
        className="
          mt-[16px]
          whitespace-nowrap
          text-center
          text-[16px]
          leading-[24px]
          font-normal
          tracking-[-0.2px]
          text-[#222222]
        "
      >
        {category.name}
      </h3>
    </article>
  );
}
