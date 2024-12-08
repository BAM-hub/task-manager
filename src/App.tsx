import Layout from "./components/layout/index";
import Slot from "./components/layout/solt";

function App() {
  return (
    <Layout>
      <Slot solt="header">header</Slot>
      <Slot solt="side">side</Slot>
      <Slot solt="main">main</Slot>
    </Layout>
  );
}

export default App;
