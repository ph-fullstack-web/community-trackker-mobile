import {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';

import {Button} from 'components/atoms';
import styles from './CommunityDetailsModal.styles';

interface CommunityDetailsModalProps {
  communityDescription: string;
}

export const CommunityDetailsModal = (props: CommunityDetailsModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        icon={{
          name: 'information',
          type: 'material-community',
          size: 15,
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
    </>
  );
};
