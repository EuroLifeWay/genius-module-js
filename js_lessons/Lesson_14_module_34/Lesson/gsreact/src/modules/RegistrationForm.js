// import react from 'react';
import './Home.css';

const RegistrationForm = ({
  name,
  city,
  email,
  password,
  handleChangeName,
  handleChangeCity,
  handleChangeEmail,
  handleChangePassword,
  onSubmitForm,
}) => {
  const CheckPass = pass => {
    return pass.length > 0;
    // const beginWithoutDigit = /^\D.*$/;
    // const withoutSpecialChars = /^[^-() /]*$/;
    // const containsLetters = /^.*[a-zA-Z]+.*$/;

    // if (
    //   beginWithoutDigit.test(pass) &&
    //   withoutSpecialChars.test(pass) &&
    //   containsLetters.test(pass)
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const CheckEmail = email => {
    const emailValidation =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailValidation.test(email);
  };

  const ValidForm = () => {
    return CheckEmail(email) && CheckPass(password);
  };

  return (
    <div className="block">
      <p>Registration Form</p>
      <form>
        <div>
          <label>Name</label>
          <input
            value={name}
            // onChange={event => handleChangeName(event)}
            onChange={handleChangeName}
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            value={city}
            onChange={event => handleChangeCity(event)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={event => handleChangeEmail(event)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={event => handleChangePassword(event)}
          ></input>
        </div>
        {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
      </form>
    </div>
  );
};

export default RegistrationForm;
