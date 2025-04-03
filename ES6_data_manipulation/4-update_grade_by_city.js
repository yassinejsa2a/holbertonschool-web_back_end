export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const grades = newGrades.reduce((acc, grade) => {
    acc[grade.studentId] = grade.grade;
    return acc;
  }, {});

  return studentsByCity.map((student) => {
    const studentGrade = grades[student.id] || 'N/A';
    return { ...student, grade: studentGrade };
  });
}
