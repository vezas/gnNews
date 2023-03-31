import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: ${({ theme }) => theme.layout.gapMedium};
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.layout.gapLittle};
`;
