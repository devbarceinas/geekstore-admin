import { Layout } from "../Layout";
import { Sidebar } from "../Sidebar";
import { Title } from "../Title";
import { Products } from "../Products";
import { Intro } from "../Intro";
import { Modal } from "../Modal";

import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from "react-router-dom"; 

const AppUI = () => {
  return (
    <>
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
              path="/products" 
              component={Products} 
            />
          </Switch>
        </Layout>
      </Router>
      <Modal>
        <h2>Hola</h2>
      </Modal>
    </>
  );
};

export { AppUI };
