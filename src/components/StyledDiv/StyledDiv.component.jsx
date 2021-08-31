import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${(props) => props.toggleStatus && '#333'};
`;

export default StyledDiv;
