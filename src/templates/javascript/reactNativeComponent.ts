import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) => (
`${ creatReactImport(useReactImport) }import { View, Text, StyleSheet } from 'react-native';

${useExportDefault ? '' : 'export '}function ${ pascalCase(componentName) }() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>${ pascalCase(componentName) }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});
${useExportDefault ? `

export default ${ pascalCase(componentName) };
` : ''}
`
);
