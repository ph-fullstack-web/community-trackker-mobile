import {View, ViewProps} from 'react-native';

import {Accordion, AccordionProps} from 'components/atoms';
import {useThemeProvider} from 'providers';

import styles from './AccordionContainer.styles';

type AccordionContainerProps = ViewProps &
  AccordionProps &
  ComponentWithChildren & {
    id: string;
  };

export const AccordionContainer = ({
  children,
  ...props
}: AccordionContainerProps) => {
  const {mode} = useThemeProvider();

  return (
    <View
      style={[
        styles.accordion_container,
        styles[`accordion_container_${mode}` as keyof typeof undefined],
      ]}
      {...props}
    >
      <Accordion
        id={props.id}
        headerLabel={props.headerLabel}
        headerStyle={[
          styles.form_header,
          styles[`form_header_${mode}` as keyof typeof styles],
          props.headerStyle,
        ]}
        expanded={props.expanded}
      >
        {children}
      </Accordion>
    </View>
  );
};
