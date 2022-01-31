import { RequestProvider } from "../../hooks/RequestProvider";
import { AppUI } from "./AppUI";

const App = () => {
  return (
    <RequestProvider>
      <AppUI/>
    </RequestProvider>
  );
};

export { App };
