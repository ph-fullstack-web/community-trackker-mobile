import {useEffect, useState} from 'react';
import {Modal, View} from 'react-native';

import {Button, Icon, Switch, Text, TextInput} from 'components/atoms';
import {Spinner} from 'components/molecules';
import {COLORS} from 'constants/colors';
import {UpdateSkillRequest} from 'models/requests';
import {useThemeProvider, useMutationProvider} from 'providers';

import styles from './SkillModal.styles';
import {SkillModalProps} from './SkillModal.types';

export const SkillModal = ({data, onEdit}: SkillModalProps) => {
  const {mode} = useThemeProvider();
  const {isLoading} = useMutationProvider();
  const [visible, setVisible] = useState<boolean>(false);
  const [form, setForm] = useState<UpdateSkillRequest>({
    peopleskills_id: data.peopleskills_id,
    description: data.peopleskills_desc,
    is_active: data.is_active,
  });

  useEffect(() => {
    setForm({
      peopleskills_id: data.peopleskills_id,
      description: data.peopleskills_desc,
      is_active: data.is_active,
    });
  }, [data]);

  return (
    <>
      <Icon
        type="material"
        name="edit"
        color={mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY}
        size={25}
        onPress={() => setVisible(true)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              styles[`modalView_${mode}` as keyof typeof undefined],
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                styles[`modalTitle_${mode}` as keyof typeof undefined],
              ]}
            >
              Update Skill
            </Text>
            {isLoading ? (
              <Spinner viewStyle={styles.spinnerContainer} size={50} />
            ) : (
              <>
                <TextInput
                  style={styles.modelTextInput}
                  value={form.description}
                  onChangeText={value =>
                    setForm(prevState => {
                      return {...prevState, description: value};
                    })
                  }
                />
                <View style={styles.switchContainer}>
                  <Switch
                    trackColor={{
                      false: COLORS.DARK_GRAY,
                      true: COLORS.LIGHT_GRAY,
                    }}
                    thumbColor={
                      mode === 'light'
                        ? COLORS.MIDNIGHT_BLUE
                        : COLORS.LIGHT_GRAY
                    }
                    value={form.is_active}
                    onValueChange={value =>
                      setForm(prevState => {
                        return {...prevState, is_active: value};
                      })
                    }
                  />
                  <Text style={styles.modalText}>Active</Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="Close"
                    titleStyle={[
                      styles.textStyle,
                      styles[`textStyle_${mode}` as keyof typeof styles],
                    ]}
                    buttonStyle={[
                      styles.button,
                      styles[`button_${mode}` as keyof typeof undefined],
                    ]}
                    gradient
                    onPress={() => setVisible(!visible)}
                  />
                  <Button
                    title="Update"
                    titleStyle={[
                      styles.textStyle,
                      styles[`textStyle_${mode}` as keyof typeof styles],
                    ]}
                    buttonStyle={[
                      styles.button,
                      styles[`button_${mode}` as keyof typeof undefined],
                    ]}
                    gradient
                    onPress={() => onEdit(form)}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};
