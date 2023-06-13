import {Modal, View} from 'react-native';

import {useThemeProvider} from 'providers';
import {Button, Text} from 'components/atoms';

import styles from './CommunityDetailsModal.styles';

interface CommunityDetailsModalProps {
  id: string;
  communityDescription: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommunityDetailsModal = ({
  id,
  communityDescription,
  modalVisible,
  setModalVisible,
}: CommunityDetailsModalProps) => {
  const {mode} = useThemeProvider();

  return (
    <View style={styles.centeredView}>
      <Modal
        id={id}
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
              id={`btn_${id}`}
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
              gradient
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
