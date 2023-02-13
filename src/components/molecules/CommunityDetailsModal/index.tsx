import { useState } from 'react'
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Icon } from '@rneui/themed';

interface CommunityDetailsModalProps {
  communityDescription: string;
}

export const CommunityDetailsModal = (props: CommunityDetailsModalProps) => {
  const [isPress, setIsPress] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: '#ddd',
    style: isPress ? styles.is_pressed : styles.not_pressed,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => setModalVisible(!modalVisible),
  };

  return(
    <View>
      <TouchableHighlight
        {...touchProps}
      >
        <Icon name='information' type='material-community' size={35} />
      </TouchableHighlight>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {props.communityDescription}
              </Text>

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
  )
}

const styles = StyleSheet.create({
  is_pressed: {
    width: 35,
    height: 35
  },
  not_pressed: {
    width: 35,
    height: 35
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  button: {
    elevation: 2,
    paddingHorizontal: 9,
    paddingVertical: 3
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})