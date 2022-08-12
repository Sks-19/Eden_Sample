import './Page3.css';
import Logo from './Images/Eden_icon.png';
import Icon1 from './Images/myself.png';
import Icon2 from './Images/team.png';


function Page3() {
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
            <div class="bullet current">
              <span class="icon">3</span>
            </div>
            <div class="bullet next future">
              <span class="icon">4</span>
            </div>
          </div>
        </div>
        <div className='detail'>
          <h2>How are you planning to use Eden?</h2>
          <p>We'll streamline your setup experience accordingly.</p>
        </div>
        <form action='/fourth'>
        <div className='option'>
            <label>
                <input type="radio" name="radio" checked="checked" />
                <div className='box'>
                    <img src={Icon1} alt="Icon1" />
                    <h4>For myself</h4>
                    <p>Write better. Think more clearly. Stay organized.</p>
                </div>
            </label>

            <label>
                <input type="radio" name="radio" />
                <div className='box'>
                    <img src={Icon2} alt="Icon2" />
                    <h4>With my team</h4>
                    <p>Wikis, docs, tasks & projects, all in one place.</p>
                </div>
            </label>
        </div>
          <button>Create Workspace</button>
        
        </form>
        </>
    );
}

export default Page3;