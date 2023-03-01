import {useCallback} from 'react';
import {ActivityIndicator, FlatListProps, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import styles from './InfiniteScroll.styles';

type InfiniteScrollProps<T> = FlatListProps<T> & {
  lastPageCount: number;
  limit?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const InfiniteScroll = <T,>({
  data,
  keyExtractor,
  lastPageCount,
  limit = 10,
  renderItem,
  setPage,
  ...otherProps
}: InfiniteScrollProps<T>) => {
  const ListSpinner = useCallback(
    () =>
      lastPageCount >= limit ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={35} />
        </View>
      ) : null,
    [lastPageCount, limit]
  );

  const onEndList = async () => {
    if (lastPageCount < limit) {
      return;
    }

    setPage(prevState => prevState + 1);
  };

  return (
    <FlatList<T>
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      initialNumToRender={limit}
      ListFooterComponent={ListSpinner}
      onEndReachedThreshold={0}
      onEndReached={onEndList}
      windowSize={limit}
      {...otherProps}
    />
  );
};
