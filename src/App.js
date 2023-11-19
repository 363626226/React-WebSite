import {Route, Routes} from 'react-router-dom';  
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import LoginPage from './pages/LoginPage';
import MemberPage from './pages/MemberPage';

function App() {
  return (
    <div>
        <Routes>
          <Route>
            <Route index element={<HomePage/>} />
            <Route path="/mall" element={<HomePage />} />
            <Route path="/mall/:categoryName" element={<ProductListPage />} />
            <Route path='/product_list' element={<ProductPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/member' element={<MemberPage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
