import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Mock data for products
const products = [
  { id: 1, name: 'Vintage Record Player', price: 79.99, image: 'https://images.unsplash.com/photo-1670848767161-0476ade5d1b0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Antique Writing Desk', price: 149.99, image: 'https://images.unsplash.com/photo-1640130541949-aa5d40f9635d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Retro Camera Collection', price: 99.99, image: 'https://images.unsplash.com/photo-1576261240726-b4782dfcd02e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Vintage Leather Suitcase', price: 59.99, image: 'https://images.unsplash.com/photo-1515622472995-1a06094d2224?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Typewriter', price: 129.99, image: 'https://images.unsplash.com/photo-1524668951403-d44b28200ce0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Rotary Phone', price: 45.99, image: 'https://images.unsplash.com/photo-1656106426076-069c50b8ba3f?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, name: 'Polaroid Camera', price: 89.99, image: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, name: 'Oil Lamp', price: 34.99, image: 'https://images.unsplash.com/photo-1504744373149-59d6d64c86f3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, name: 'Pocket Watch', price: 69.99, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1000&auto=format&fit=crop' },
  { id: 10, name: 'Brass Telescope', price: 159.99, image: 'https://images.unsplash.com/photo-1496158866946-4c08bf8159af?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 11, name: 'Vintage World Globe', price: 79.99, image: 'https://images.unsplash.com/photo-1648461513399-95927ce027dc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 12, name: 'Retro Jukebox', price: 299.99, image: 'https://images.unsplash.com/photo-1637472480890-ede76e753687?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 13, name: 'Antique Compass', price: 49.99, image: 'https://images.unsplash.com/photo-1516503424803-708327384b90?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 14, name: 'Gramophone', price: 189.99, image: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Buy AllOtt</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              )}
            </svg>
          </button>
        </div>
        <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex md:space-x-6">
            <li><Link to="/" className="block py-2 hover:text-yellow-300 transition duration-200">Home</Link></li>
            <li><Link to="/store" className="block py-2 hover:text-yellow-300 transition duration-200">Store</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-yellow-300 transition duration-200">Contact</Link></li>
            <li><Link to="/terms" className="block py-2 hover:text-yellow-300 transition duration-200">Terms</Link></li>
            <li><Link to="/no-return" className="block py-2 hover:text-yellow-300 transition duration-200">No Return Policy</Link></li>
            <li><Link to="/login" className="block py-2 hover:text-yellow-300 transition duration-200">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Buy AllOtt</h3>
          <p className="text-gray-400">Discover unique treasures from storage units at unbeatable prices.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li><Link to="/terms" className="text-gray-400 hover:text-white transition duration-200">Terms and Conditions</Link></li>
            <li><Link to="/no-return" className="text-gray-400 hover:text-white transition duration-200">No Return Policy</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">123 Storage Lane, Cityville, State 12345</p>
          <p className="text-gray-400">info@buyallott.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; 2024 Buy AllOtt. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Welcome to Buy AllOtt</h2>
      <p className="text-xl text-gray-600 mb-8">Discover unique treasures from storage units at unbeatable prices.</p>
      <Link to="/store" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200">
        Shop Now
      </Link>
    </div>
    <h3 className="text-2xl font-bold mb-6">Featured Items</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.slice(0, 3).map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-200 transform hover:scale-105">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-bold text-xl mb-2">{product.name}</h4>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Store = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Our Store</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-200 transform hover:scale-105">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-bold text-xl mb-2">{product.name}</h4>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductDetails = () => {
  // In a real app, you'd fetch the product details based on the ID from the URL
  const product = products[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover md:w-48" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">Experience the warm, rich sound of vinyl with this beautifully restored vintage record player. Perfect for music enthusiasts and collectors alike.</p>
            <p className="text-2xl font-bold text-indigo-600 mb-4">Price: ${product.price.toFixed(2)}</p>
            <div className="space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-200">Buy Now</button>
              <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-200">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Our Information</h3>
        <p className="text-gray-600">Address: 123 Storage Lane, Cityville, State 12345</p>
        <p className="text-gray-600">Phone: (555) 123-4567</p>
        <p className="text-gray-600">Email: info@buyallott.com</p>
      </div>
      <form className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Send us a message</h3>
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
          <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
          <textarea id="message" name="message" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 h-32"></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-200">Send Message</button>
      </form>
    </div>
  </div>
);

const Terms = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Terms and Conditions</h2>
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
      <p className="mb-4">Welcome to Buy AllOtt. By using our website, you agree to these terms and conditions.</p>
      <h3 className="text-xl font-bold mb-2">1. Acceptance of Terms</h3>
      <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      <h3 className="text-xl font-bold mb-2">2. 30-Day Claim Period</h3>
      <p className="mb-4"><strong>Important:</strong> All items purchased from Buy AllOtt are subject to a 30-day claim period. During this time, buyers may report any significant discrepancies between the item description and the actual item received. After this period, all sales are considered final.</p>
    </div>
  </div>
);

const NoReturn = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">No Return Policy</h2>
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
      <p className="mb-4">At Buy AllOtt, we have a strict no return policy on all items purchased. This policy is in place due to the unique nature of our business model and the second-hand items we sell.</p>
      <h3 className="text-xl font-bold mb-2">Key Points:</h3>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>All sales are final once the 30-day claim period has passed.</li>
        <li>We do not offer refunds or exchanges under any circumstances after the claim period.</li>
        <li>Buyers are encouraged to carefully review item descriptions and photos before making a purchase.</li>
        <li>Any issues with items must be reported within the 30-day claim period from the date of purchase.</li>
      </ul>
      <p>We appreciate your understanding and cooperation with our no return policy. If you have any questions, please contact our customer service team.</p>
    </div>
  </div>
);

const Login = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="py-4 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold">Login</h2>
      </div>
      <form className="py-4 px-6">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">Username/Email:</label>
          <input type="text" id="username" name="username" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
          <input type="password" id="password" name="password" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200">Login</button>
      </form>
      <div className="py-4 px-6 bg-gray-100 text-center">
        <p><a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a></p>
        <p className="mt-2">Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Create Account</a></p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/no-return" element={<NoReturn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;