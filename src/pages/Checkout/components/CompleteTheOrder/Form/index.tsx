import { useState } from "react";
import { InputContainer } from "./styles";
import { useFormContext } from "react-hook-form";

// interface FormProps {
//   error?: string
// }

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Form(/*{ error }: FormProps*/) {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");


  return (
    <InputContainer >
      <div className="cep">
        <input
          id="cep"
          className={cep ? "filled" : ""}
          type="text"
          // name="scep"
          placeholder="CEP"
          // onChange={(e) => setCep(e.target.value)}
          {...register('cep', {
            onChange:(e) => setCep(e.target.value)
          })}
        />
        <p>{errors.cep?.message}</p>
      </div>
      <div className="street">
        <input
          id="street"
          className={street ? "filled" : ""}
          type="text"
          // name="rua"
          placeholder="Rua"
          // onChange={(e) => setstreet(e.target.value)}
          {...register('street', {
            onChange:(e) => setStreet(e.target.value) 
          })}
        />
        <p>{errors.street?.message}</p>
      </div>
      <div className="number">
        <input
        id="number"
          className={number ? "filled" : ""}
          type="text"
          // name="numero"
          placeholder="Número"
          // onChange={(e) => setNumero(e.target.value)}
          {...register('number', {
            onChange:(e) => setNumber(e.target.value)
          })}
        />
        <p>{errors.number?.message}</p>
      </div>
      <div className="complement">
        <input
        id="complement"
          className={complement ? "filled" : ""}
          type="text"
          // name="complemento"
          placeholder="Complemento"
          // onChange={(e) => setComplemento(e.target.value)}
          {...register('complement', {
            onChange:(e) => setComplement(e.target.value)
          })}
        />
        <p>{errors.complement?.message}</p>
      </div>
      <div className="district">
        <input
        id="district"
          className={district ? "filled" : ""}
          type="text"
          // name="bairro"
          placeholder="Bairro"
          // onChange={(e) => setDistrict(e.target.value)}
          {...register('district', {
            onChange:(e) => setDistrict(e.target.value)
          })}
        />
        <p>{errors.district?.message}</p>
      </div>
      <div className="city">
        <input
        id="city"
          className={city ? "filled" : ""}
          type="text"
          // name="city"
          placeholder="Cidade"
          // onChange={(e) => setCity(e.target.value)}
          {...register('city', {
            onChange:(e) => setCity(e.target.value)
          })}
        />
        <p>{errors.city?.message}</p>
      </div>
      <div className="uf">
        <input
        id="uf"
          className={uf ? "filled" : ""}
          type="text"
          // name="uf"
          placeholder="UF"
          // onChange={(e) => setUf(e.target.value)}
          {...register('uf', {
            onChange:(e) => setUf(e.target.value)
          })}
        />
        <p>{errors.uf?.message}</p>
      </div>
    </InputContainer>
  )
}