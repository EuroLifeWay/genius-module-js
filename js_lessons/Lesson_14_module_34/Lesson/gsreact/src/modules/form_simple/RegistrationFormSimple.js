import '../Home.css';

export default function RegistrationFormSimple({
  handleChangeEmail,
  handleChangePassword,
  onSubmitForm,
  email,
  password,
}) {
  const CheckEmail = email => {
    const emailValidation =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailValidation.test(email);
  };

  const CheckPassword = password => {
    return password.length > 3;
  };

  const ValidForm = () => {
    return CheckEmail(email) && CheckPassword(password);
  };

  return (
    <div className="block">
      <h2>User Registration Form Simple</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            // onChange={e => handleChangeEmail(e)}
            onChange={handleChangeEmail}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            // onChange={e => handleChangePassword(e)}
            onChange={handleChangePassword}
          ></input>
        </div>
        {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
      </form>
    </div>
  );
}
