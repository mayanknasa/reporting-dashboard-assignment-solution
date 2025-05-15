import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;