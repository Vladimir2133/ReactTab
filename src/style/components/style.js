import styled from "styled-components";

const Tabs = styled.div`
  border: 1px solid #000;
  width: 550px;
  height: 50px;
  margin-left: 50px;
  margin-top: 20px;
  bdius: 10%;
  background-color: #A9A9A9;
`;

const ButtonStyle = styled.button`
  margin-left: 20px;
  margin-top: 10px;
  font-size: 17px;
  text-decoration: none;
  color: #fff;
  background-color: #A9A9A9;
`;

const TabContent = styled.div`
  width: 510px;
  height: 40px;
  color: #000;
  font-size: 18px;
  margin-left:  50px;
  border: 1px solid #000;
  padding: 20px;
`;
export {Tabs, ButtonStyle, TabContent};
