import './App.css';
import UserCard from './components/UserCard';

import shirt from './assets/shirt.jpg';
import shoes from './assets/shoes.jpg';
import watch from './assets/watch.jpg';
import bag from './assets/bag.jpg';
import cap from './assets/cap.jpg';
import sunglasses from './assets/sunglasses.jpg';

function App() {
  return (
    <div className="app">
      <h1>Fashion Store</h1>

      <div className="grid-container">

        <UserCard
          name="Stylish Shirt"
          desc="Comfortable cotton shirt"
          image={shirt}
        />

        <UserCard
          name="Sneakers"
          desc="Trendy everyday shoes"
          image={shoes}
        />

        <UserCard
          name="Wrist Watch"
          desc="Elegant classic watch"
          image={watch}
        />

        <UserCard
          name="Hand Bag"
          desc="Stylish women's bag"
          image={bag}
        />

        <UserCard
          name="Cap"
          desc="Cool casual cap"
          image={cap}
        />

        <UserCard
          name="Sunglasses"
          desc="Modern sunglasses"
          image={sunglasses}
        />

      </div>
    </div>
  );
}

export default App;