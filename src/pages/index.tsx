import type { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>Welcome</h1>

        <Title>Testeando</Title>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
