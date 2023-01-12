import { useState } from "react";

export default function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log(data);
    alert("User logged in");
    setShowModal(false);
    setData({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <button
        className="hover:text-slate-500"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 cursor-default">
            <div className=" my-10 mx-auto max-w-3xl">
              {/*content*/}
              <div className="rounded-lg max-w-3xl relative flex bg-slate-300">
                <form className="w-68 md:w-96" onSubmit={handleLogin}>
                  <h1 className="text-xl text-center my-6">
                    login into your account
                  </h1>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="E-mail"
                      required
                      type="email"
                      className="bg-slate-200 w-full py-2 px-4 mb-2 border border-slate-800 rounded shadow-sm"
                      name="email"
                      onChange={handleInput}
                      value={data.email}
                    />
                  </div>
                  <div className="mb-1 px-4 sm:mb-2">
                    <input
                      placeholder="Password"
                      required
                      type="password"
                      className="bg-slate-200 w-full py-2 px-4 mb-2 border border-slate-800 rounded shadow-sm"
                      name="password"
                      onChange={handleInput}
                      value={data.password}
                    />
                  </div>
                  <div className="mt-4 px-1 mb-2 sm:mb-4 flex justify-between">
                    <button
                      className="bg-slate-200 border-2 border-slate-800 rounded items-center justify-center hover:bg-slate-300 px-6 mx-3 mb-5 py-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-slate-200 border-2 border-slate-800 rounded items-center justify-center hover:bg-slate-300 mx-3 mb-5 px-6 py-1 w-full"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
