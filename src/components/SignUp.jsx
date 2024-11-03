export default function SignUp({ currentPage, setCurrentPage }) {
  return currentPage === "signUp" ? (
    <>
      <h2>Sign Up</h2>

      <form action="GET">
        <label htmlFor="usernameSignUp">
          Username:
          <input type="text" id="usernameSignUp" />
        </label>

        <button onSubmit={() => {}}></button>
      </form>
    </>
  ) : null;
}
