// import Home from "./components/home";
// import About from "./components/About";
// import { names } from "./components/name";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Services from "./components/services";
// import Contact from "./components/contact";
// import Student from "./components/student";
// import Main from "./components/main";
// import Trainee from "./components/trainee";
// import Events from "./components/Events";
// import Events1 from "./components/Events1";
// import Product from "./components/Product";
// // import Hooks from "./components/Hooks";
// const App = () => {
//   return (
//     // <div>
//     //   <Home />
//     //   <About />
//     //   <p>list:{names}</p>
//     // </div>
//     <div className="App">
//       <BrowserRouter>
//       <Main />
//     <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/About" element={<About />}/>
//       <Route path="/Services" element={<Services />}/>
//       <Route path="/Contact" element={<Contact />}/>
//       <Route path="/Student" element={<Student />}/>
//       <Route path="/Events" element={<Events name='Santhosh' />}/>
//       <Route path="/Events1" element={<Events1 />}/>
//       <Route path="/Product" element={<Product/>}/>
//       // {/* <Route path="/Hooks" element={<Hooks/>}/> */}
//     </Routes>
//     </BrowserRouter>
    
//     </div>
//     // <Trainee></Trainee>
//     // <Events />
    
//   )
// }
// export default App
import React, { Component } from 'react';
import CityRoutes from './CityRoutes';
import logo from './Components/Images/headout.png';

class App extends Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight });

  render() {
    const { width } = this.state;
    const mobileTablet = width <= 1100;

    if (mobileTablet) {
      return (
        <div className="mobile-tablet">
          <img src={logo} alt="Headout" />
          <p>
            Currently, we're not supporting Mobile & Tablets{' '}
            <span role="img" aria-label="Warn">
              🙏
            </span>
          </p>
        </div>
      );
    } else {
      return <CityRoutes />;
    }
  }
}

export default App;
