import { notFound } from "next/navigation";
import CourseDetail from "@/components/course/CourseDetail";
import courses from "@/data/courses";
import courseDetails from "@/data/courseDetails.json";

export function generateStaticParams() {
  return courses.map((course) => ({ id: String(course.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = courses.find((item) => String(item.id) === id);

  return {
    title: course ? `${course.title} | ByteSpace` : "Course | ByteSpace",
  };
}

export default async function CoursePage({ params }) {
  const { id } = await params;
  const course = courses.find((item) => String(item.id) === id);
  const detail = courseDetails.find((item) => String(item.id) === id);

  if (!course || !detail) {
    notFound();
  }

  return <CourseDetail course={course} detail={detail} />;
}