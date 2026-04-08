import '../Home.css';

export default function AccountCardSimple({ email, password }) {
  return (
    <div className="block">
      <h2>User Account Card Simple</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}
