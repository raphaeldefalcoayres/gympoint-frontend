import styled, { createGlobalStyle } from 'styled-components';

// import "react-perfect-scrollbar/dist/css/styles.css";
// import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font:14px 'Roboto', sans-serif;
  }

  input {
    border-radius: 4px;
    padding: 0 15px;
    height: 36px;
    border: 1px solid #ddd;
  }

  a{
    text-decoration:none;
  }

  .btn{
    
    font-size: 14px;
    font-weight: bold;
    padding: 0 15px;
    height: 36px;
    border-radius: 4px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  .btn-action{
    background:#EE4D64;
    color: #fff;
  }

  .btn-default{
    background:#CCCCCC;
    color: #fff;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:pointer;
  }

  .link-blue{
    font-size:15px;
    color:#4d85ee;
    text-align:right;
    background:none;
    border:none;
  }

  .link-red{
    font-size:15px;
    color:#de3b3b;
    text-align:right;
    background:none;
    border:none;
  }

  .text-center{text-align:center !important;}
  .text-right{text-align:right !important;}
  .text-left{text-align:left !important;}

`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: #999;
  margin-left: 15px;

  svg {
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: 1;
    margin-left: 10px;
  }

  input {
    padding-left: 30px;
    color: #999;
    &::placeholder {
      color: #999;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  padding: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr td,
  tr th {
    text-align: left;
    padding: 15px 0;
  }

  tr:first-child th {
    padding-top: 0;
  }

  tr:last-child td {
    padding-bottom: 0;
    border-bottom: none;
  }

  tr th {
    font-size: 16px;
    color: #444;
  }

  tr td {
    color: #666;
    font-size: 16px;
    border-bottom: 1px solid #eeeeee;
  }

  tr td button {
    margin-left: 15px;
  }
`;
