import styled, {css} from "styled-components";

export const PageWrapper = styled.div(({type}) =>
  css`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    min-height: 100%;
    background-color: ${type === 'error' ? 'red': 'green'};
  `
);
