import React, { Suspense } from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Loading from './components/Loading/Loading.jsx'
import './App.scss';

function App() {
  const element = useRoutes(routes)
  return (
    <div className='app'>
      <Header />
        <Suspense fallback={<Loading />}>
          { element }
        </Suspense>
      <Footer />
    </div>
  );
}

export default App;
