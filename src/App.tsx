import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  color: pink;
  font-size: 24px;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
  );
};

export default App;
