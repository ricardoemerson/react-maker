import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) => (
`${ creatReactImport(useReactImport) }import { Text } from 'react-native';

import { Container } from './styles';

${useExportDefault ? '' : 'export '}function ${ pascalCase(componentName) }() {
  return (
    <Container>
      <Text>${ pascalCase(componentName) }</Text>
    </Container>
  );
};
${useExportDefault ? `

export default ${ pascalCase(componentName) };
` : ''}
`
);
