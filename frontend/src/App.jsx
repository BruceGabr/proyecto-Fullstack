import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
function App() {
return (
<BrowserRouter>
<Layout>
<Routes>
<Route path="/" element={<Dashboard />} />
</Routes>
</Layout>
</BrowserRouter>
);
}
export default App;