const filter = (courses, college) => {
  // this means the button calls comes from search by department which is already filtered from API
  if (college === "none") return courses;

  //requires more fitler for college and area

  let GE_college_area = college.split("-")[0].trim();
  const filteredCourses = [];
  console.log("without filter:", courses);
  courses.map((course) => {
    for (let i = 0; i < course.generalEducation.length; i++) {
      if (GE_college_area === course.generalEducation[i].geCollege.trim()) {
        filteredCourses.push(JSON.parse(JSON.stringify(course)));
        break;
      }
    }
  });

  return filteredCourses;
};

export default filter;
