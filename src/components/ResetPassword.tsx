import CardForm from "@/components/Card";
import { useState } from 'react';
import Input from "./CustomInput";
import Model from "./Model";
import third from "../../public/third.png";
import { performApi } from '../utils/performApi';

export default function ResetPassword() {
    const [email, setEmail] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [erro, setErro] = useState<string>("");

    const handleSubmitEmail = (email: string) => {
        setEmail(email);
    }

    const sendEmail = async () => {
        if (!email) {
            setErro("Por favor, preencha o campo de email");
            setInfo("")
            return;
        }
        
        const data = await performApi.sendData("forgot-password", "POST", { email });

        if (data.statusCode === 201) {
            setInfo(data.message);
        }else{
            setErro(data.message)
        }
    }

    return (
        <Model image={{ url: third, alt: "redefinir-senha", height: 200, width: 300 }}>
            <CardForm
                title="Redefinir Senha"
                subtitle="Esqueceu sua senha?"
                buttonText="Enviar"
                onClick={sendEmail}>
                <Input
                    data={email}
                    type="email"
                    onChange={handleSubmitEmail}
                    text="Email"
                    />
                {info && <p className="text-zinc-800 font-medium text-sm">{info}</p>}
                {erro && <p className="font-black text-red-500 text-sm">{erro}</p>}
            </CardForm>
        </Model>
    )
}
