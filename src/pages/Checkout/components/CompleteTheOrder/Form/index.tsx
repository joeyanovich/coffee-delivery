import { useState } from "react";
import { FormContainer } from "./styles";

export function Form() {


  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");


  return (
    <FormContainer >
        <input
          className={cep ? "filled" : ""}
          type="text"
          name="cep"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          className={rua ? "filled" : ""}
          type="text"
          name="rua"
          placeholder="Rua"
          onChange={(e) => setRua(e.target.value)}
        />
        <input
          className={numero ? "filled" : ""}
          type="text"
          name="numero"
          placeholder="Número"
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          className={complemento ? "filled" : ""}
          type="text"
          name="complemento"
          placeholder="Complemento"
          onChange={(e) => setComplemento(e.target.value)}
        />
        <input
          className={bairro ? "filled" : ""}
          type="text"
          name="bairro"
          placeholder="Bairro"
          onChange={(e) => setBairro(e.target.value)}
        />
        <input
          className={cidade ? "filled" : ""}
          type="text"
          name="cidade"
          placeholder="Cidade"
          onChange={(e) => setCidade(e.target.value)}
        />
        <input
          className={uf ? "filled" : ""}
          type="text"
          name="uf"
          placeholder="UF"
          onChange={(e) => setUf(e.target.value)}
        />
    </FormContainer>
  )
}