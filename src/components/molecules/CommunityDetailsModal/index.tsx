import {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';

import {ButtonWithIcon} from 'components/atoms';

import styles from './CommunityDetailsModal.styles';

interface CommunityDetailsModalProps {
  communityDescription: string;
}

export const CommunityDetailsModal = (props: CommunityDetailsModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <ButtonWithIcon
        onPress={() => setModalVisible(!modalVisible)}
        name="information"
        type="material-community"
        size={35}
        style={styles.info_button}
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
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{props.communityDescription}</Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
