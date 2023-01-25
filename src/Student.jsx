import Scores from "./Scores";

const Student = (props) => {
  return (
    <>
      <h1>{props.student.name}</h1>
      <h3>{props.student.bio}</h3>
      <Scores scores={props.student.scores}/>
      
    </>
  )
} 

export default Student