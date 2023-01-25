import Student from "./Student";

const Students = (props) => {
  console.log(props.students);
  return (
    <>
      {props.students.map((student) => (
        <Student key={student.id} student={student}/>
      ))}
    </>
  )
}

export default Students