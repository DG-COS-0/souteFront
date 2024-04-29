import React, { useState } from "react";
import Btn from "../../ui/Btn";
import RowVertical from "../../ui/add/RowVertical";
import { useSignup } from "./useSignup";
import styled from "styled-components";
const Input = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid var(--color-green--5);
  }

  &:focus:invalid {
    border-bottom: 3px solid var(--color-green--8);
  }

  &::-webkit-input-placeholder {
    color: var(--color-grey--5);
  }
`;
const StyledHomeForm = styled.form`
  &::after {
    content: "";
    display: block;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-red--8);
    opacity: 0;
    transition: opacity 0.2s;
  }
`;
export default function RegisterForm() {
  const { isLoading, signup } = useSignup();
  const [email, setEmail] = useState("");
  const [surName, setSurName] = useState("");
  const [firstNames, setFirstNames] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [sexe, setSexe] = useState("M");
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    signup(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <div>
      <>
        <div className="book">
          <div className="book__form">
            <StyledHomeForm onSubmit={handleSubmit}>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary"> Inscription</h2>
              </div>
              <RowVertical>
                <div className="form__group u-margin-bottom-medium">
                  <Input
                    type="text"
                    placeholder="Nom de famille"
                    id="surName"
                    required
                    value={surName}
                    onChange={(e) => setSurName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </RowVertical>
              <RowVertical>
                <div className="form__group u-margin-bottom-medium">
                  <Input
                    type="text"
                    placeholder="Prenoms"
                    id="firstNames"
                    required
                    value={firstNames}
                    onChange={(e) => setFirstNames(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </RowVertical>
              <RowVertical>
                <div className="form__group u-margin-bottom-medium">
                  <Input
                    type="email"
                    placeholder="Email address"
                    id="email"
                    required
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </RowVertical>

              <RowVertical>
                <div className="form__group u-margin-bottom-medium">
                  <Input
                    type="password"
                    placeholder=""
                    id="password"
                    requiredù
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </RowVertical>
              <RowVertical>
                <div className="form__group u-margin-bottom-medium">
                  <Input
                    type="password"
                    placeholder=""
                    id="passwordConfirmation"
                    requiredù
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </RowVertical>
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group  u-margin-top-auto">
                <Btn variations="secondary" onClick={handleSubmit}>
                  Login &rarr;
                </Btn>
              </div>
            </StyledHomeForm>
          </div>
        </div>
      </>
    </div>
  );
}
