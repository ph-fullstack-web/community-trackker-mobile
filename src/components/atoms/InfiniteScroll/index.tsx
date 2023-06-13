import {useCallback} from 'react';
import {FlatListProps} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Spinner} from 'components/molecules';

import styles from './InfiniteScroll.styles';

type InfiniteScrollProps<T> = FlatListProps<T> & {
  id: string;
  currentPage: number;
  lastPage: number;
  limit?: number;
  handleEndReached: () => void;
};

export const InfiniteScroll = <T,>({
  id,
  data,
  keyExtractor,
  currentPage,
  lastPage,
  limit = 10,
  renderItem,
  handleEndReached,
  ...otherProps
}: InfiniteScrollProps<T>) => {
  const ListSpinner = useCallback(
    () =>
      currentPage < lastPage ? (
        <Spinner size={35} viewStyle={styles.spinnerContainer} />
      ) : null,
    [lastPage, currentPage]
  );

  const onEndList = async (distanceFromEnd: number) => {
    if (distanceFromEnd === 0 && currentPage < lastPage) {
      handleEndReached();
    }
  };

  return (
    <FlatList<T>
      id={id}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      initialNumToRender={limit}
      ListFooterComponent={ListSpinner}
      onEndReachedThreshold={0}
      onEndReached={({distanceFromEnd}) => onEndList(distanceFromEnd)}
      windowSize={limit}
      {...otherProps}
    />
  );
};
