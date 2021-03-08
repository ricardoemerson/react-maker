import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import createStylesImport from '../shared/functions/create-styles-import';
import pascalCase from '../shared/functions/pascal-case';
import { camelCase } from 'lodash';

export default ({ componentName, styleName, useReactImport, useCSSModule, usesStylesTailwindCSSParser }: CreateComponent) => (
`${ creatReactImport(useReactImport, true) }${ createStylesImport(styleName, useCSSModule, usesStylesTailwindCSSParser, componentName) }

interface ${ pascalCase(componentName) }Props {
  children: ReactNode;${ usesStylesTailwindCSSParser ? '\n  className?: string;' : '' }
}

function ${ pascalCase(componentName) }({ children${ usesStylesTailwindCSSParser ? `, className = ''` : '' } }: ${ pascalCase(componentName) }Props) {${ usesStylesTailwindCSSParser ? `\n  const stylesFor${ pascalCase(componentName) } = ${ camelCase(componentName) }Styles({ className });\n` : '' }
  return (
    ${ styleName === 'styles' && !usesStylesTailwindCSSParser ? `<Container>` : `<>` }
      <h1${ usesStylesTailwindCSSParser ? ` className={stylesFor${ pascalCase(componentName) }}` : '' }>${ componentName }</h1>
      {children}
    ${ styleName === 'styles' && !usesStylesTailwindCSSParser ? `</Container>` : `</>` }
  );
};

export default ${ componentName };
`
);
