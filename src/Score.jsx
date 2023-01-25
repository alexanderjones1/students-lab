const Score = (props) => {
  console.log(props.score);
  return (
    <>
      <h3>{props.score.score} - {props.score.date}</h3>
    </>
  )
}

export default Score