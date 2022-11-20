import "./App.css";
import AppComponent from "./AppComponent";
import { TemplateProvider } from "./contexts/TemplateContext";

function App() {
  return (
    <TemplateProvider>
      <AppComponent />
    </TemplateProvider>
  );
}

export default App;
