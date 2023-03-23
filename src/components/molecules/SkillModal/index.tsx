import {useEffect, useState} from 'react';
import {Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button, Icon, Switch, Text, TextInput} from 'components/atoms';
import {COLORS, GRADIENT} from 'constants/colors';
import {Peopleskills} from 'models/business';
import {useThemeProvider} from 'providers';

import styles from './SkillModal.styles';
import {SkillModalProps} from './SkillModal.types';
import {Spinner} from '../Spinner';
import {useMutationProvider} from 'providers/MutationProvider';

export const SkillModal = ({data, onEdit}: SkillModalProps) => {
  const {mode} = useThemeProvider();
  const {isLoading} = useMutationProvider();
  const [visible, setVisible] = useState<boolean>(false);
  const [form, setForm] = useState<Peopleskills>(data);

  useEffect(() => {
    setForm(data);
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
                  value={form.peopleskills_desc}
                  onChangeText={value =>
                    setForm(prevState => {
                      return {...prevState, peopleskills_desc: value};
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
                  <Text style={styles.modalText}>
                    {form.is_active ? 'Active' : 'Inactive'}
                  </Text>
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
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                      colors:
                        GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
                      start: {x: 0, y: 0.5},
                      end: {x: 1, y: 0.5},
                    }}
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
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                      colors:
                        GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
                      start: {x: 0, y: 0.5},
                      end: {x: 1, y: 0.5},
                    }}
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
