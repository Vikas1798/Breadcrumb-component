import AllRoutes from "./Navigation/routes";
import './App.css';
import AppWrapper from "./Components/AppWrapper";

const App = () => {
    return (
        <main className="app">
            <AppWrapper>
                <AllRoutes />
            </AppWrapper>
        </main>
    );
}
export default App;