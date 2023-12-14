import "./Button.css";

function Button() {
  // function handleClick() {
  //   console.log("Clicking the button");
  // }

  const handleClick = () => {
    console.log("Clicking the button");
  };

  return (
    <div className="button-container" onClick={handleClick}>
      View Product
    </div>
  );
}

export default Button;
