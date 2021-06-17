import styled from "styled-components";

export const StyledLogoutButton = styled.button`
  background-color: orange;
  border-radius: 5px;
  width: 8vw;
  height: 40px;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 7px;
  margin-top: -10px;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 3px 36px 18px rgba(255, 150, 87, 0);
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 3px 36px 18px rgba(255, 150, 87, 0);
  }
  transition: 500ms;
`;
