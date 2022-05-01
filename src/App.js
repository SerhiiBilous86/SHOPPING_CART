import './App.css';
//import Canada from './instagram';
//import Perfil from './perfil';

import img01 from './img01.jpg'
import img02 from './img02.jpg'
import img03 from './img03.jpg'
import img04 from './img04.jpg'
import img05 from './img05.jpg'
import todo01 from './todo01.jpg'

import Shop, {Elem} from './shop';
import { GroceryList } from './GroceryList';

/*<Perfil img = {img01} name={'Tania BILOUS'} age = {'35'} mail = {'tbilou@gmail.com'} pais = {'UA'} />
      <Perfil img = {img02} name={'Tania BILOUS'} age = {'35'} mail = {'tbilou@gmail.com'} pais = {'UA'} />
      <Perfil img = {img03} name={'Tania BILOUS'} age = {'35'} mail = {'tbilou@gmail.com'} pais = {'UA'} />
      <Perfil img = {img04} name={'Tania BILOUS'} age = {'35'} mail = {'tbilou@gmail.com'} pais = {'UA'} />
      <Perfil img = {img05} name={'Tania BILOUS'} age = {'35'} mail = {'tbilou@gmail.com'} pais = {'UA'} />*/

      /* <Shop>
        <Elem ord = '1' img = {img01} name = 'Comics G1' price = '5$' un = '1' />
        <Elem ord = '2' img = {img02} name = 'Comics G2' price = '5$' un = '1' />
        <Elem ord = '3' img = {img03} name = 'Comics G3' price = '5$' un = '1' />
        <Elem ord = '4' img = {img04} name = 'Comics G4' price = '5$' un = '1' />
        <Elem ord = '5' img = {img05} name = 'Comics G5' price = '5$' un = '1' />
      </Shop>
      */

function App() {
  return (
    <div className='App' >
      <img src={todo01} alt={'img'} style={{width: '400px'}}/>
      <GroceryList />
      
    </div>
  );
}

export default App;
