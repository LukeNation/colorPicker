
import ColorPicker from "./components/ColorPicker.js";
import FooterPage from "./components/FooterPage.js";
function App() {
  return (
    <div className="container-fluid">
      <div className ="color-pícker">
        <ColorPicker/>
      </div>
      <div className="footer">
        <FooterPage/>
      </div>
    </div>
  );
}

export default App;
