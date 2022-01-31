import { Layout } from "../Layout";
import { Sidebar } from "../Sidebar";
import { Title } from "../Title";
import { Products } from "../Products";
import { CreateProduct } from "../Products/CreateProduct";
import { Intro } from "../Intro";

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
            path="/products" 
            component={Products} 
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export { AppUI };
