import { FC, useEffect } from 'react';
import { Container } from './TestFooter.styled';
import useCounter from '@hooks/useCounter';

interface TestFooterProps {
  testProp: string;
}

const TestFooter: FC<TestFooterProps> = ({ testProp }) => {
  const { count, increment } = useCounter();

  useEffect(() => {
    setTimeout(() => increment(), 3000);
  }, [increment]);

  return (
    <Container>
      {testProp} {count}
    </Container>
  );
};

export default TestFooter;
