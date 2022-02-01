import { Layout } from "../Layout";
import { Sidebar } from "../Sidebar";
import { Title } from "../Title";
import { Products } from "../Products";
import { Intro } from "../Intro";

import CreateProduct from "../Products/CreateProduct";
import EditProduct from "../Products/EditProduct";

import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from "react-router-dom"; 

const AppUI = () => {
  return (
    <Router>
      <Sidebar/>
      <Title/>
      <Layout>
        <Switch>
          <Route 
            exact
            path="/"
            component={Intro}
          />
          <Route
            exact
            path="/products/create" 
            component={CreateProduct} 
          />
          <Route
            exact
            path="/products/edit/:id"
            component={EditProduct}
          />
          <Route
            exact
            path="/products" 
            component={Products} 
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export { AppUI };
