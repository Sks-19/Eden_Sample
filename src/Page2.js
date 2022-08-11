import './Page2.css';
import Logo from './Images/Eden_icon.png';


function Page2() {
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
            <div class="bullet past">
              <span class="icon">1</span>
            </div>
            <div class="bullet current">
              <span class="icon">2</span>
            </div>
            <div class="bullet next future">
              <span class="icon">3</span>
            </div>
            <div class="bullet future">
              <span class="icon">4</span>
            </div>
          </div>
        </div>
        <div className='detail'>
          <h2>Let's set up a home for all your work</h2>
          <p>You can always create another workspace later.</p>
        </div>
        <form action='/third'>
        <label for="fullname">Workspace Name</label>
        <input type="text" id="fullname" placeholder="Eden" />
        
        <label for="displayname">Workspace URL <span>(optional)</span></label>
        <div className='form-group'>
        <span className='domain'>www.eden.com/</span>
        <input className="url" type="url" id="displayname" placeholder="Example" />
        </div>
          <button>Create Workspace</button>
        
        </form>
        </>
    );
}

export default Page2;