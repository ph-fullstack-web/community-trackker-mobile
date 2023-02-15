import { ReactNode, useState } from "react";
import { ListItem } from '@rneui/themed';

interface AccordionProps {
  childComponent: ReactNode;
  expanded: boolean  
  headerLabel: string;
  headerStyle: object;
}

export const Accordion = (props: AccordionProps) => {
  const [expanded, setExpanded] = useState(props.expanded);

  return(
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
      containerStyle={props.headerStyle}
    >
      {props.childComponent}
    </ListItem.Accordion>
  )
}