import { FC } from "react";
import { Container } from "./TestFooter.styled";

interface TestFooterProps {
  testProp: string;
}

const TestFooter: FC<TestFooterProps> = ({ testProp }) => {
  return <Container>{testProp}</Container>;
};

export default TestFooter;
