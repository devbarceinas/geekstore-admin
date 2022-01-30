import { Layout } from "../Layout";
import { Sidebar } from "../Sidebar";
import { Title } from "../Title";
import { Products } from "../Products";

import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from "react-router-dom"; 

const AppUI = () => {
  return (
    <Router>
      <>
        <Sidebar/>
        <Title/>
        <Layout>
          <Switch>
            <Route path="/products" component={Products} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
};

export { AppUI };
