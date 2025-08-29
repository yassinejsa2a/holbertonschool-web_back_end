const updateStudentGradeByCity = (ListStudents, city, newGrades) => {
  const studentsInCity = ListStudents.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
};

export default updateStudentGradeByCity;