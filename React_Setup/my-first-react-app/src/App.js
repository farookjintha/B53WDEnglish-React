import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/header";

function App() {
  console.log("consoling app component");

  // JS logic
  let username = "Priya";
  // let productName = "IPhone 14 Pro";
  // let productName2 = "IPhone 15 Pro";
  // let productName3 = "IPhone 15 Plus";

  let productsList = [
    {
      id: 1,
      productName: "IPhone 14 Pro",
      price: "129999",
      quantity: 10,
      imgUrl:
        "https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__WWEN_ff032d19-463d-4927-84bf-08b8dfb88208.jpg?v=1692350142",
    },
    {
      id: 2,
      productName: "IPhone 15 Pro",
      price: "149999",
      quantity: 5,
      imgUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81+GIkwqLIL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 3,
      productName: "IPhone 15 Plus",
      price: "89999",
      quantity: 100,
      imgUrl:
        "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-iphone-15-plus-blue-256gb-back-view.png",
    },
  ];

  let products = [
    "IPhone 14 Pro",
    "IPhone 15 Pro",
    "IPhone 15 Plus",
    "Samsung S23",
    "OnePlus Open",
  ];

  return (
    <div className="App">
      <Header />
      <h1>Welcome {username}! Happy Shopping</h1>
      <div className="products-container">
        {productsList.map((product, index) => {
          return (
            <Card
              product={product}
              // key={index}
              key={product.id}
              name={"John"}
              email={"john@gmail.com"}
            />
          );
        })}
      </div>
      {/* <Card productName={productName} />
      <Card productName={productName2} />
      <Card productName={productName3} /> */}
    </div>
  );
}

export default App;

// App - Parent Component
// Card - Child Component
