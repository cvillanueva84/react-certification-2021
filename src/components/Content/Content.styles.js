import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
`;

export const CardContainer = styled.section`
    display: block;    

    @media (max-width: 485px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media (max-width: 768px) {
        display: flex; 
        flex-direction: column;
        justify-content: center;
    }
`;

export const Card = styled.div`  
  float: left;
  width: 280px;
  margin-left: 60px;
  margin-top: 20px;
  background: white;  
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  cursor: pointer;

  :hover {
      background-color: #f7f7f7;
  }

  @media (max-width: 485px) {
    margin: 0px;
    
  }
  @media (max-width: 768px) {
    margin-top: 20px;        
  }
`;

export const CardThumbnail = styled.div`    
  height: 150px;
  border-radius: 6px 6px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
`;

export const CardContent = styled.div`
    margin: 20px;
    text-align: left;

    h2 {
        font-weight: 300;
        font-size: 1.2em;
    }

    p {
        color: rgba(0, 0, 0, 0.54);
        font-size: 1em;
    }
`;