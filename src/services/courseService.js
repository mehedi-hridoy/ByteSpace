import courses from "@/data/courses.json";

export async function getCourses() {
  // Simulates an API/data request.
  // Later this can be replaced with a real fetch() call.
  return courses;
}

export async function getCourseById(id) {
  const course = courses.find((course) => course.id === Number(id));

  return course || null;
}

export async function getCoursesByCategory(category) {
  return courses.filter(
    (course) =>
      course.category.toLowerCase() === category.toLowerCase()
  );
}