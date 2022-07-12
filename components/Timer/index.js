import CountdownTimer from "../countdownTimer";
const Timer = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>Countdown Timer</h1>
      <p>Timer</p>
      <button onClick={handleClick} type="button" className="btn btn-primary">
        start
      </button>
    </>
  );
};

export default Timer;
