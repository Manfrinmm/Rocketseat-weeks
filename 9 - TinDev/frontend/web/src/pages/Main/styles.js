import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }

  div:nth-child(2) {
    font-size: 32px;
    color: #999;
    font-weight: bold;
    margin-top: 300px;
  }
`;

export const Itens = styled.li`
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    border-radius: 5px 5px;
  }

  footer {
    flex: 1;
    background: #fff;
    border: 1px solid #eee;
    padding: 15px 20px;
    text-align: left;
    border-radius: 0 0 5px 5px;

    strong {
      font-size: 16px;
      color: #333;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      color: #999;
      margin-top: 5px;
    }
  }

  div {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  button {
    height: 50px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
    border: 0;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;

    &:hover {
      img {
        transform: translateY(-5px);
        transition: all 0.2s;
      }
    }
  }
`;

export const Match = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.8);

  strong {
    font-size: 32px;
    color: #fff;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 30px;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.8);
  }

  button {
    border: 0;
    background: none;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 30px;
    cursor: pointer;
  }
`;

export const MatchImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #fff;
  margin: 30px 0;
`;