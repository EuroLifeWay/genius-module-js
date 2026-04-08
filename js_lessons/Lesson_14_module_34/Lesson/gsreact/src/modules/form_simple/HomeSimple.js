import { useState } from 'react';
import '../Home.css';
import RegistrationFormSimple from './RegistrationFormSimple';
import AccountCardSimple from './AccountCardSimple';

export default function HomeSimple() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acc, setAcc] = useState(false);

  const HandleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const HandleChangePassword = e => {
    setPassword(e.target.value);
  };
  const OnSubmitForm = e => {
    setAcc(true);
  };

  return (
    <div>
      {acc ? (
        <AccountCardSimple email={email} password={password} />
      ) : (
        <RegistrationFormSimple
          handleChangeEmail={HandleChangeEmail}
          handleChangePassword={HandleChangePassword}
          onSubmitForm={OnSubmitForm}
          email={email}
          password={password}
        />
      )}
    </div>
  );
}
