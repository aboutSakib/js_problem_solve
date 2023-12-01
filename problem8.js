function removeDuplicates(studentsNames) {
  return studentsNames.filter(
    (name, index) => studentsNames.indexOf(name) === index
  );
}
const studentsNames = ["sakib", "sakib", "rakib", "raju"];
const uniqueStudent = removeDuplicates(studentsNames);

console.log(uniqueStudent);
