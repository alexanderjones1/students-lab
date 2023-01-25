import Scores from "./Scores";

const Student = (props) => {
  console.log(props.student.name);
  return (
    <>
      <h1>{props.student.name}</h1>
      <h3>{props.student.bio}</h3>
      <Scores/>
      
    </>
  )
} 

export default Student