import styled from "styled-components";

export const RegisterContainer = styled.div`
  background-color: #daf1da;
  background-image: radial-gradient(
    at 100% 50%,
    hsl(18.14, 81%, 90%) 0,
    transparent 70%
  );
  text-align: center;
  padding: 5%;
`;

export const RegisterContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterContainerCol = styled.div`
  flex: 50%;
`;

export const RegisterImage = styled.img``;

export const RegisterCardContainer = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 45px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  padding: 5%;
  border-radius: 25px;
`;

export const RegisterCardTitle = styled.div`
  font-size: 2rem;
  padding: 2% 0;
`;

export const RegisterCardDescription = styled.div`
  font-size: 1rem;
`;

export const RegisterFormContainer = styled.div``;

export const RegisterInput = styled.input`
  width: 100%;
  font-family: "Metropolis Regular";
  padding: 20px 20px;
  margin: 8px 0;
  font-size: 1rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const RegisterSelect = styled.select`
  width: 100%;
  font-family: "Metropolis Regular";
  padding: 20px 20px;
  margin: 8px 0;
  font-size: 1rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const RegisterOption = styled.option`
  width: 100%;
  font-family: "Metropolis Regular";
  padding: 20px 20px;
  margin: 8px 0;
  font-size: 1rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const RegisterOptionDefault = styled.option`
  width: 100%;
  padding: 20px 20px;
  margin: 8px 0;
  opacity: 0.5;
  -moz-opacity: 0.5;
  -webkit-opacity: 0.5;
  color: #999999;
  font-size: 0.875rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const RegisterButtonContainer = styled.div``;
export const RegisterButton = styled.button`
  padding: 0 1.5%;
  margin: 0 1.5%;
  color: white;
  font-size: 18px;
  background: #c08d64;
  border-radius: 15px;
  text-decoration: none;
  display: inline-block;
  border: none;
  border-radius: 15px;
  width: 165px;
  height: 47px;
`;
export const RegisterPageCountContainer = styled.div`
  padding: 2.5%;
`;
