import './Page4.css';
import Logo from './Images/Eden_icon.png';
import Icon from './Images/Icon.png';


function Page4() {
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
            <div class="bullet past">
              <span class="icon">2</span>
            </div>
            <div class="bullet past">
              <span class="icon">3</span>
            </div>
            <div class="bullet current">
              <span class="icon">4</span>
            </div>
          </div>
        </div>
        <div className='detail'>
        <img src={Icon} alt="Icon" />
          <h2>Congratuation, Eren!</h2>
          <p>You have completed onboarding, you can start using the Eden!</p>
        </div>
        <form action='#'>
          <button>Create Workspace</button>
        </form>
        </>
    );
}

export default Page4;