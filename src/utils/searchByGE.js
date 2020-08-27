const filterRequired = (courses, college, filter_selected) => {
  if (filter_selected != "GE") return courses;

  let GE_college_area = college.split("-")[0];
  console.log("Courses", courses);
  console.log("ge", GE_college_area);
  courses = courses.map((course, index) => {
    for (let i = 0; i < course.generalEducation.length; i++) {
      if (GE_college_area === course.generalEducation[i].geCollege) {
        console.log(GE_college_area, course.generalEducation[i].geCollege);
      }
      console.log(course);
    }
  });
  return courses;
};

export default filterRequired;
