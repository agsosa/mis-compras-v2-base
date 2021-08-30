import type { NextPage } from "next";
import styled from "styled-components";
import TestFooter from "@components/TestFooter";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>Welcome</h1>

        <Title>Título de prueba</Title>
      </main>
      <TestFooter testProp="Testing Next.js" />{" "}
    </div>
  );
};

export default Home;
