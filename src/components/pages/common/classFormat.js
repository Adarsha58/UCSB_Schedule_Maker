import React, { Component } from "react";
import "../../../css/tmp.css";

class courseFormater extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Course ID</th>
            <th>Title</th>
            <th>Enroll Code</th>
            <th>Days</th>
            <th>Time</th>
            <th>Location</th>
            <th>Enrolled</th>
            <th>Capacity</th>
          </tr>
          {this.props.courses.map((course) => {
            return (
              <tr>
                <td>{course.courseId}</td>
                <td>{course.title}</td>
                <td>{course.classSections[0].enrollCode}</td>
                <td>
                  {course.classSections[0].timeLocations[0]?.days || "TBA"}
                </td>
                <td>
                  {course.classSections[0].timeLocations[0]
                    ? `${course.classSections[0].timeLocations[0]?.beginTime}-${course.classSections[0].timeLocations[0]?.endTime}`
                    : "TBA"}
                </td>
                <td>
                  {course.classSections[0].timeLocations[0]
                    ? `${course.classSections[0].timeLocations[0]?.building} ${course.classSections[0].timeLocations[0]?.room}`
                    : "TBA"}
                </td>
                <td>{course.classSections[0].enrolledTotal || "null"}</td>
                <td>{course.classSections[0].maxEnroll}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default courseFormater;
