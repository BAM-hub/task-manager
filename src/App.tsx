import Layout from "./components/layout/index";
import Slot from "./components/layout/solt";

function App() {
  return (
    <Layout>
      <Slot slot="header">header</Slot>
      <Slot slot="side">side</Slot>
      <Slot slot="main">main</Slot>
    </Layout>
  );
}

export default App;
