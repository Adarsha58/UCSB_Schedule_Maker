//parsing the information of one class: most of them are array in order to store possible multiple instructors teaching the same class

const courseParser = (course) => {
  const timeParser = (time) => {
    let hourMinuteSplit = time.split(":");

    if (parseInt(hourMinuteSplit[0]) >= 12) {
      hourMinuteSplit[1] += "PM";
    } else {
      hourMinuteSplit[1] += "AM";
    }
    if (parseInt(hourMinuteSplit[0]) > 12) {
      hourMinuteSplit[0] = parseInt(hourMinuteSplit[0]) - 12;
    }
    return hourMinuteSplit.join(":");
  };

  let classInfo = {
    instructors: [],
    rating: "5.0",
    courseTitle: "",
    days: [],
    time: [],
    locations: [],
    enrollCode: [],
    units: "",
    openSeats: [],
    description: "",
  };
  classInfo.courseTitle = course.courseId.trim() + ": " + course.title.trim();
  classInfo.description = course.description.trim();
  classInfo.units = course.unitsFixed ? course.unitsFixed : "Varies";

  course.classSections.map((classSection) => {
    if (parseInt(classSection.section, 10) % 100 == 0) {
      classInfo.instructors.push(
        classSection.instructors[0]?.instructor || "TBA"
      );
      classInfo.days.push(classSection.timeLocations[0]?.days || "TBA");
      classInfo.time.push(
        classSection.timeLocations[0]
          ? classSection.timeLocations[0].beginTime
            ? `${timeParser(
                classSection.timeLocations[0].beginTime
              )}-${timeParser(classSection.timeLocations[0].endTime)}`
            : "TBA"
          : "TBA"
      );
      classInfo.locations.push(
        classSection.timeLocations[0]
          ? `${classSection.timeLocations[0]?.building || "TB"} ${
              classSection.timeLocations[0]?.room || "A"
            }`
          : "TBA"
      );
      classInfo.enrollCode.push(classSection.enrollCode);
      classInfo.openSeats.push(
        classSection.enrolledTotal + "/" + classSection.maxEnroll
      );
    }
  });

  classInfo.instructors.push("No Preference");

  return classInfo;
};

export default courseParser;
