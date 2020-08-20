const test = {
  instructors: [],
  rating: "5.0",
  courseTitle: "",
  days: "",
  time: "",
  location: "",
  enrollCode: "",
  units: "",
  openSeats: "",
  description: "",
};

const courseParser = (course) => {
  if (course.length == 0) {
    return test;
  }
  test.courseTitle = course.title.trim() + ":" + course.courseId.trim();
  test.description = course.description.trim();
  const mainSection = course.classSections[0];
  if (mainSection) {
    test.instructors = "N/A";
    test.days = mainSection.timeLocations[0]?.days || "TBA";
    test.time = mainSection.timeLocations[0]
      ? `${course.classSections[0].timeLocations[0]?.beginTime}-${course.classSections[0].timeLocations[0]?.endTime}`
      : "TBA";
    test.location = mainSection.timeLocations[0]
      ? `${course.classSections[0].timeLocations[0]?.building} ${course.classSections[0].timeLocations[0]?.room}`
      : "TBA";
    test.enrollCode = mainSection.enrollCode;
    test.openSeats = calc(
      mainSection.maxEnroll - mainSection.enrolledTotal
    ).toString();
  } else {
    test.instructor = "N/A";
    test.days = "N/A";
    test.time = "N/A";
    test.location = "N/A";
    test.enrollCode = "N/A";
    test.openSeats = "N/A";
  }

  return test;
};

export default courseParser;
