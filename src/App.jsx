import "./index.css";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 21;

  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <header className="header">
      <h1>Electronic store</h1>
      <nav className="nav">
        <ul>
          <li>
            Home
            <a href="#Home"></a>
          </li>
          <li>
            Catalog
            <a href="#Catalog"></a>
          </li>
          <li>
            About Us
            <a href="#About Us"></a>
          </li>
          <li>
            Contact
            <a href="#Contact"></a>
          </li>
        </ul>
      </nav>
      <div className="working-hours">
        {isOpen ? (
          <p>
            We are currently open: {openHours}:00 - {closeHours}:00
          </p>
        ) : (
          <p>We a closed. Open at {openHours}:00 o'clock.</p>
        )}
      </div>
    </header>
  );
}

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((item) => (
          <Product productObj={item} />
        ))}
      </ul>
    </main>
  );
}

function Product(props) {
  return (
    <li className="product">
      <img src={props.productObj.photoName} alt={props.productObj.name} />
      <div>
        <h3>{props.productObj.name}</h3>
        <p>{props.productObj.description}</p>
        <span>{props.productObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
