import styled from 'styled-components';

const StrongModal = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;
const InputModal = styled.input`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.1);
`;
const ButtonModal = styled.button`
  width: 5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
`;
const Tittle = styled.h2`
  margin-top: 0rem;
`;
const Error = styled.p`
  background-color: rgb(253, 139, 139);
  font-size: 0.8rem;
  text-align: center;
  border-radius: 3px;
  margin-top: 0rem;
`;

export { StrongModal, InputModal, ButtonModal, Tittle, Error };
