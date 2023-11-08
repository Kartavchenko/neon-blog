export default function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="login">login</label>
        <input className="input input-primary" type="text" id="login" />
        <label htmlFor="password">password</label>
        <input className="input input-primary" type="text" id="password" />
        <button className="btn btn-outline-secondary" type="submit">Login</button>
      </form>
    </>
  );
}
