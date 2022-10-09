import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const action = (e) => {
  e.preventDefault();
  console.log(process.env);
};

function App() {
  return (
    <div className="App">
      <Header title="Image Gallery App" />
      <Search action={action} />
    </div>
  );
}

export default App;
