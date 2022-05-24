import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { CadastroLogo, LogoCadastro, Input, Botao, Cadastrar, LinkCadastro , Form } from "./style.js";


export default function Cadastro() {
    const [info, setInfo] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })
    const navigate = useNavigate()
  
    console.log(info)

    function Resgistrar(e){
        e.preventDefault();        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up" , info)
        promise.then(()=>{
            navigate('/', {state: {password: info.password, email: info.email }});
        });
        promise.catch(error => {
            alert(error + "deu xabu");
         
        });

    }
    return (
        <>
            <CadastroLogo>
                <LogoCadastro src="assets/imgs/logo.png" alt="logo trackit" />
               <Form>
                    <Input type="text"
                        placeholder="email"
                        value={info.email}
                        onChange={e => { setInfo({ ...info, email: e.target.value }) }} 
                        required
                    />
                    <Input
                        type="text"
                        placeholder="senha"
                        value={info.password}
                        onChange={e => { setInfo({ ...info, password: e.target.value }) }}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="nome"
                        value={info.name}
                        onChange={e => { setInfo({ ...info, name: e.target.value }) }}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="foto"
                        value={info.image}
                        onChange={e => { setInfo({ ...info, image: e.target.value }) }}
                        required
                    />
              </Form>
                <Botao onClick={Resgistrar}><Cadastrar>Cadastrar</Cadastrar></Botao>
                <Link to={"/"}>
                    <LinkCadastro>Não tem uma conta? Cadastre-se!</LinkCadastro>
                </Link>
            </CadastroLogo>
           

        </>
    )
}