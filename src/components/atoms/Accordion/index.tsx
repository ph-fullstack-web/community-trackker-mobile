import {useState} from 'react';
import {ListItem} from '@rneui/themed';

import styles from './Accordion.styles';

export type AccordionProps = ComponentWithChildren & {
  expanded: boolean;
  headerLabel: string;
  headerStyle?: object;
};

export const Accordion = (props: AccordionProps) => {
  const [expanded, setExpanded] = useState(props.expanded);
  const bottomRadius = expanded === false ? styles.not_expanded_header : {};

  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title>{props.headerLabel}</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => setExpanded(!expanded)}
      containerStyle={[props.headerStyle, bottomRadius]}
    >
      {props.children}
    </ListItem.Accordion>
  );
};
