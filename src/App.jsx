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
    <header>
      <h1>Electronic store</h1>
      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Catalog">Catalog</a>
          </li>
          <li>
            <a href="#About Us">About Us</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
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
    <main>
      <ul>
        <Product />
      </ul>
    </main>
  );
}

function Product() {
  const product = [...productData];

  return (
    <li>
      <img src={product[0].photoName} alt={product[0].name} />
      <div>
        <h3>{product[0].name}</h3>
        <p>{product[0].description}</p>
        <span>{product[0].price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}
