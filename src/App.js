import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import AddOffer from './Pages/AddOffer/AddOffer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRouter path="/placeOrder/:placeId">
              <PlaceOrder></PlaceOrder>
            </PrivateRouter>
            <PrivateRouter path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRouter>
            <PrivateRouter path="/manageOrder">
              <ManageOrders></ManageOrders>
            </PrivateRouter>
            <PrivateRouter path="/addOffer">
              <AddOffer></AddOffer>
            </PrivateRouter>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
