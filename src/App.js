import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import Logo from "../src/reservaCondo.png";


function App() {
  return (
    <div class="container">
      <img src={Logo} alt="Logo do sistema" title="Logo do sistema" style={{ width: '200px' }} />
      <br></br>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwt_decode(
            credentialResponse.credential
          );
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default App;
