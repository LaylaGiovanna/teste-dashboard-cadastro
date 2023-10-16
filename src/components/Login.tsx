import CardForm from "./Card";
import mypic from "../../public/group-image.png";
import { useState } from "react";
import Input from "./CustomInput";
import Model from "./Model";
import { performApi } from '../utils/performApi'
import { setCookie } from "../../node_modules/cookies-next/lib/index";
import { useRouter } from "../../node_modules/next/router";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const router = useRouter()

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setErro("");
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setErro("");
  };

  const handleLogin = async () => {
    try {
      const data = await performApi.sendData("auth/signin", "POST", { email, password });
      if (data.statusCode !== 201) {
        setErro(data.message);
      } else {
        setCookie("auth",data.message)
        router.push("/")
      }
    } catch (error) {
      setErro("Ocorreu um erro durante o login.");
    }
  };

  return (
    <Model image={{ url: mypic, alt: "teste", height: 200, width: 300 }}>
      <CardForm
        title="Login"
        subtitle="Bem-vindo de volta!"
        onClick={handleLogin}
        buttonText="Login"
      >
        <Input
          data={email}
          onChange={handleEmailChange}
          text="Email"
          type="email"
        />
        <Input
          data={password}
          onChange={handlePasswordChange}
          text="Senha"
          type="password"
          forgotPassoword
        />
        {erro && (
          <p className="font-black text-red-500">{erro}</p>
        )}
      </CardForm>
    </Model>
  );
}
