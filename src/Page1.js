import { useState } from 'react';
import './App.css';
import Logo from './Images/Eden_icon.png';

function Page1() {

  const [name, setName] = useState();
  const [displayName, setDisplayName] = useState();
  
  const inputText = (e) => {
    setName(e.target.value);
  }

  const onSubmit = () => {
    setDisplayName(name);
  }
    return (
        <>
        <div className='contaier'>
          <div className='heading'>
            <ul>
              <li>
                <img src={Logo} alt="Logo" />
              </li>
              <li>
                <h2>Eden</h2>
              </li>
            </ul>
        </div>
          <div class="pindicator">
            <div class="bullet current">
              <span class="icon">1</span>
            </div>
            <div class="bullet next future">
              <span class="icon">2</span>
            </div>
            <div class="bullet future">
              <span class="icon">3</span>
            </div>
            <div class="bullet future">
              <span class="icon">4</span>
            </div>
          </div>
        </div>
        <div className='detail'>
          <h2>Welcome! First things first...</h2>
          <p>You can always change them later.</p>
        </div>
        <form action="/second">
        <label for="fullname">Full Name</label>
        <input 
            type="text" 
            id="fullname" 
            placeholder="Steve Jobs" 
        />
        
        <label for="displayname">Display Name</label>
        <input 
            type="text" 
            id="displayname" 
            placeholder="Steve"
            onChange={inputText} 
            value={name}
        />

          <button 
            type='submit' 
            value="submit"
            onClick={onSubmit}>
            Create Workspace
          </button>
        </form>
        </>
    );
}

export default Page1;