import { PureComponent } from "react";

import Header from "./header";

// Pages
import Main from "../pages/main";
class App extends PureComponent {
  render(){
    return(
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
export default App;  
