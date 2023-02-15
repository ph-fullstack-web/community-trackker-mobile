import {ReactNode, useEffect, useState} from 'react';
import {Animated} from 'react-native';

interface ExpandableViewProps {
  expanded: boolean;
  form?: ReactNode;
  height: number;
  bgcolor: string;
}

export const ExpandableView = (props: ExpandableViewProps) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: props.expanded ? props.height : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [height, props.expanded, props.height]);

  return (
    <Animated.View style={{height, backgroundColor: props.bgcolor}}>
      {props.form}
    </Animated.View>
  );
};
