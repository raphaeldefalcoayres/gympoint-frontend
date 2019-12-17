import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: middle;
    img {
      margin-right: 20px;
      padding-right: 25px;
      border-right: 1px solid #eee;
      width: 150px;
    }
    a {
      font-weight: bold;
      color: #999999;
      font-size: 14px;
      padding: 0 10px;
      display: block;
      margin-top: 3px;

      &:hover {
        color: #444444;
      }

      &.active {
        color: #444444;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666666;
      font-size: 14px;
    }
    a {
      display: block;
      color: #999;
      font-size: 12px;
      margin-top: 2px;
    }
    button {
      border: none;
      background: none;
      color: #de3b3b;
      font-size: 14px;
    }
  }
  .box-img {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    object-fit: cover;
    width: auto;
    height: 100%;
  }
`;
