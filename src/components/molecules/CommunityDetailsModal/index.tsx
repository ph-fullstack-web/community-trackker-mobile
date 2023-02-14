import { useState } from 'react'
import {Modal, Pressable, Text,TouchableHighlight, View } from 'react-native';
import { Icon } from '@rneui/themed';

import styles from './CommunityDetailsModalStyles';

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
