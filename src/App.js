import { BrowserRouter, Route, Routes } from 'react-router';
import store from './redux/store';
import CharacterDetails from './views/CharacterDetails/CharacterDetails';
import CharacterFilter from './views/CharacterFilter/CharacterFilter';
import { Provider } from 'react-redux'
import CharacterFav from './views/CharacterFav/CharacterFav';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CharacterFilter />} />
            <Route path="/details" element={<CharacterDetails />} />
            <Route path="/favorites" element={<CharacterFav />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
