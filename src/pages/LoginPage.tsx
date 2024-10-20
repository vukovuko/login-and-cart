import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const hardcodedEmail = "admin@example.com";
    const hardcodedPassword = "admin";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/collection");
    } else {
      setErrorMessage("Neispravni podaci za prijavu");
    }
  };

  return (
    <div className="min-h-screen flex justify-center px-4 md:px-6 lg:px-0">
      <div className="bg-white w-full max-w-[419px] mt-[80px] md:mt-[120px] lg:mt-[160px]">
        <h1 className="font-bold text-[20px] leading-[24px] tracking-[0.01em] text-black mb-[40px] md:mb-[55px] lg:mb-[65px]">
          Prijavi se na svoj nalog
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-[30px] md:space-y-[36px] lg:space-y-[42px]"
        >
          <FloatingLabelInput
            id="email"
            label="E-mail adresa"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FloatingLabelInput
            id="password"
            label="Upišite šifru"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && (
            <div className="text-red-500 text-center mt-2">{errorMessage}</div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white font-normal text-[18px] leading-[18px] tracking-[0em] py-3 px-4 md:px-5 lg:px-6 rounded-full w-full mt-[28px] md:mt-[34px] lg:mt-[38px]"
            >
              Prijavi se na nalog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
