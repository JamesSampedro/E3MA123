import Header from './components/Header'
import NavItem from './components/NavItem'
import Footer from './components/Footer'
import Main from './components/Main'
import Photos from './components/Photos';

function App() {
  return (
    <div className = "container">
      
      <Header title = "Eclair's Playground" />
      
      <NavItem navText = "Home" navItem="1" />
      <NavItem navText = "Get Started" navItem="2" />
      <NavItem navText = "Photos" navItem="3" />
      <NavItem navText = "Gear" navItem="4" />
      <NavItem navText = "Forum" navItem="5" />
      
      <Main title = "WELCOME"
      paragraph1 = "Top 4 Laguna Restaurants you should check out!"
      list1 = "The Morning After Restaurant"
      list2 = "Kamayan sa Palaisdaan"
      list3 = "Nonna's Pasta and Pizzeria"
      list4 = "Kanin Club"
      />

      <Photos title1 = "Top 4 Restaurant Photos"/>

      <Footer text = "©Eclair 2021" />
    </div>
  );
}

export default App;
