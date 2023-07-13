function createClassRoom(numberOfStudents){

  function studentSeats(seat){
    return function() {
      return seat;
    }
  }

  let students = [];
  for (let i = 0; i < numberOfStudents; i++) {

    students.push(studentSeats(i + 1));
  }
  return students;
}


const classRoom = createClassRoom(10);