import { Web3ModalProvider } from "./components/web3modal";
import OnBoarding from "./pages/OnBoarding";

function App() {
  return (
    <Web3ModalProvider>
      <OnBoarding />
    </Web3ModalProvider>
  );
}

export default App;
