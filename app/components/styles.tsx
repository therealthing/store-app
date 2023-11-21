import styled from 'styled-components/native';

export const ProductListContainer = styled.View`
  flex-basis:100%;
`;

export const PageControlsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 40px;
  line-height: 40px;
`;

export const PageController = styled.Button`
  display: flex; 
  font-size: 12px;
  padding: 0 4px 0 4px;
  color: darkgray;
`;

 export const PageContainer = styled.View`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  padding: 4px;
 `;

export const SearchBarContainer = styled.TextInput`
  margin: 20px 10px 20px 10px;
  line-height: 24px;
  padding-left: 10px;
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: 14px;
  justify-content: space-around;
  background-color: white;
`;

export const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormSubmitButton = styled.Button`
  margin: 10px 10px 0px 0px;
`;

export const FormTitle = styled.Text`
  align-self: center;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const FieldContainer = styled.View`
  flex: 1 0 10%;
  width: 300px;
`;

export const LogoutContainer = styled.View`
  flex: 1 0 10%;
  margin-top: 20px;
`