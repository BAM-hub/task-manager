import Layout from "./components/layout/index";
import Slot from "./components/layout/solt";
import Card from "./components/card";

function App() {
  return (
    <Layout>
      <Slot slot="header">
        <Card>header</Card>
      </Slot>
      <Slot slot="side">
        <Card fullHeight>side</Card>
      </Slot>
      <Slot slot="main">
        <Card>main</Card>
      </Slot>
    </Layout>
  );
}

export default App;
