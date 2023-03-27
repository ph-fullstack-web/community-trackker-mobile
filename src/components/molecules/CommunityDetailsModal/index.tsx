import {Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemeProvider} from 'providers';
import {Button, Text} from 'components/atoms';
import {GRADIENT} from 'constants/colors';
import styles from './CommunityDetailsModal.styles';

interface CommunityDetailsModalProps {
  communityDescription: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommunityDetailsModal = ({
  communityDescription,
  modalVisible,
  setModalVisible,
}: CommunityDetailsModalProps) => {
  const {mode} = useThemeProvider();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
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
              styles[`modalView_${mode}` as keyof typeof undefined],
            ]}
          >
            <Text style={styles.modalText}>{communityDescription}</Text>
            <Button
              title="Close Modal"
              titleStyle={[
                styles.textStyle,
                styles[`textStyle_${mode}` as keyof typeof styles],
              ]}
              buttonStyle={[
                styles.button,
                styles[`button_${mode}` as keyof typeof undefined],
              ]}
              containerStyle={styles.buttonContainer}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
