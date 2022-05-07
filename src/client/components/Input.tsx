import styled from 'astroturf/react';
import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  error?: boolean;
}
export const Input = forwardRef<HTMLInputElement, IProps>(({ label, ...props }, ref) => (
  <Container>
    <span>{label}</span>
    <InputEl {...props} ref={ref} />
  </Container>
));

const Container = styled.label`
  display: flex;
  flex-flow: column;
  margin: 4px 0;
`;

const InputEl = styled.input<{ error?: boolean }>`
  border: 1px solid #bbbbbb;
  outline: 0;
  border-radius: 4px;
  line-height: 36px;
  padding: 0 10px;
  &.error {
    border-color: red;
  }
`;
