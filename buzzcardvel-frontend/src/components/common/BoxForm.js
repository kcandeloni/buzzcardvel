import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 0;
  p{
    color: var(--error);
    font-size: 0.75rem;
    margin-top: 8px;
  }
  span{
    display: flex;
    flex-direction: row;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 162px;
      border-radius: 5px 0 0 5px;
      background-color: var(--button);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      label{
        font-size: 16px;
        color: var(--textButton);
      }
    }
  }
  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 0 5px 5px 0;
    outline: none;
    background-color: var(--backgroundDark);
    color: var(--textInput);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  input::placeholder {
    color: var(--placeholder);
  }
`;