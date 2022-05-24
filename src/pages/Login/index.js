import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { LogoCenter, Logo, Input, Botao, Entrar, LinkLogin } from "./style.js";



export default function Login({ token, setToken }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    console.log(email)
    function EnviarUser() {
        const object = {
            email,
            password: senha
        }
        const config = {
            Headers:{
                Authorization: `Bearer ${token}`
            }

        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", object , config)
        promise.then(response => {
            console.log(response.data)
            setToken(response.data.token)
            navigate('/hoje');
        
        });
        promise.catch((erro) => {
            console.log(erro)
            alert(erro)
        })
    }

    return (
        <>
            <LogoCenter>
                <Logo src="assets/imgs/logo.png" alt="logo trackit" />
                <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <Botao onClick={EnviarUser}><Entrar>Entrar</Entrar></Botao>
                <Link to={"/cadastro"}>
                    <LinkLogin>Não tem uma conta? Cadastre-se!</LinkLogin>
                </Link>
            </LogoCenter>


        </>
    )


}