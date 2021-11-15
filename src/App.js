// pages
import {Home} from './Pages'

// Components
import { Header, Footer } from './Components';

export default function App() {
  return (
    <div className="container">
      <Header/>
        <Home/>
      <Footer/>
    </div>
  );
}

