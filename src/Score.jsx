const Score = (props) => {
  console.log(props.score);
  return (
    <>
      <h3>{props.score.score}</h3>
    </>
  )
}

export default Score