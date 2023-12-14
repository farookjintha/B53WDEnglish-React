import "./Card.css";
import Button from "../Button/Button";

function Card(props) {
  const handleProductSelect = (selectedProduct) => {
    console.log("Selected Product: ", selectedProduct);
    // logic
  };

  return (
    <div
      className="card-container"
      onClick={() => handleProductSelect(props.product)}
    >
      <div className="image-container">
        <img src={props.product.imgUrl} width={150} />
      </div>
      <div className="details-container">
        <h1>{props.product.productName}</h1>
        <div>Price: {props.product.price}</div>
        <div>Quantity: {props.product.quantity}</div>
      </div>

      {/* {(() => {
        if (props.product.quantity <= 20) {
          return <div className="badge-container">Only few items left!</div>;
        }
      })()} */}

      {/* {props.product.quantity <= 20 && (
        <div className="badge-container">Only few items left!</div>
      )} */}

      {props.product.quantity <= 20 ? (
        <div className="badge-container">Only few items left!</div>
      ) : (
        <div className="available-container">Available</div>
      )}

      {/* <Button /> */}
    </div>
  );
}

export default Card;

// Card - Parent Component
// Button - Child Compeont
