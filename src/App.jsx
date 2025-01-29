import { useState } from 'react';
import Category from './components/Category';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import CustomerRegistration from './components/CustomerRegistration';
import Checkout from './components/Checkout';

function App() { 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Camiseta 1', description: 'Descrição da Camiseta 1', price: 20, category: 'Camisetas' },
    { id: 2, name: 'Camiseta 2', description: 'Descrição da Camiseta 2', price: 25, category: 'Camisetas' },
    { id: 3, name: 'História em Quadrinhos 1', description: 'Descrição da HQ 1', price: 15, category: 'Histórias em Quadrinhos' },
    { id: 4, name: 'Card Game 1', description: 'Descrição do Card Game 1', price: 30, category: 'Card Games' },
    { id: 5, name: 'Jogo de Tabuleiro 1', description: 'Descrição do Jogo de Tabuleiro 1', price: 50, category: 'Jogos de Tabuleiro' },
  ]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems([...cartItems, product]);
    console.log('Current cart items:', [...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleRegister = (userData) => {
    console.log('User registered:', userData);
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory) 
    : products;

  return (
    <div>
      <h1>E-Commerce App</h1>
      <Category categories={['Camisetas', 'Histórias em Quadrinhos', 'Card Games', 'Jogos de Tabuleiro']} onSelectCategory={handleSelectCategory} />
      <ProductListing products={filteredProducts} onAddToCart={handleAddToCart} />
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <CustomerRegistration onRegister={handleRegister} />
      <Checkout cartItems={cartItems} totalPrice={cartItems.reduce((total, item) => total + item.price, 0)} />
    </div>
  );
}

export default App;
