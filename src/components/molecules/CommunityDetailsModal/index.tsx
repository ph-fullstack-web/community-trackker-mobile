import {useState} from 'react';
import {Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@rneui/themed';

import {Button, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import styles from './CommunityDetailsModal.styles';

interface CommunityDetailsModalProps {
  communityDescription: string;
}

export const CommunityDetailsModal = (props: CommunityDetailsModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {theme} = useTheme();

  return (
    <>
      <Button
        icon={{
          name: 'information',
          type: 'material-community',
          size: 15,
          color: theme.colors.blue2,
        }}
        buttonStyle={styles.info_button}
        onPress={() => setModalVisible(!modalVisible)}
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View
              style={[
                styles.modalView,
                {
                  backgroundColor: theme.colors.white,
                  shadowColor: theme.colors.black,
                },
              ]}
            >
              <Text style={styles.modalText}>{props.communityDescription}</Text>
              <Button
                title="Close Modal"
                titleStyle={[styles.textStyle, {color: theme.colors.grey4}]}
                buttonStyle={[
                  styles.button,
                  {backgroundColor: theme.colors.blue1},
                ]}
                containerStyle={styles.buttonContainer}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                  colors: [
                    COLORS.DARK_PLUM,
                    COLORS.DARK_BLUE,
                    COLORS.MEDIUM_BLUE,
                  ],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
