import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./scss/base/GlobalStyles.scss"
import Header from './components/header/Header';


const App = () => {
  return (
    <>
      <Header></Header>
      <Suspense >
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
