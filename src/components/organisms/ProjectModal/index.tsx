import {useEffect, useState} from 'react';
import {Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button, Icon, Switch, Text, TextInput} from 'components/atoms';
import {Spinner} from 'components/molecules';
import {COLORS, GRADIENT} from 'constants/colors';
import {UpdateProjectRequest} from 'models/requests';
import {useThemeProvider, useMutationProvider} from 'providers';

import styles from './ProjectModal.styles';
import {ProjectModalProps} from './ProjectModal.types';

export const ProjectModal = ({data, onEdit}: ProjectModalProps) => {
  const {mode} = useThemeProvider();
  const {isLoading} = useMutationProvider();
  const [visible, setVisible] = useState<boolean>(false);
  const [form, setForm] = useState<UpdateProjectRequest>({
    id: data.id,
    project_name: data.project,
    project_code: data.project_code,
    is_active: data.is_active,
  });

  useEffect(() => {
    setForm({
      id: data.id,
      project_name: data.project,
      project_code: data.project_code,
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
                  value={form.project_name}
                  onChangeText={value =>
                    setForm(prevState => {
                      return {...prevState, project_name: value};
                    })
                  }
                />
                <TextInput
                  style={styles.modelTextInput}
                  value={form.project_code}
                  onChangeText={value =>
                    setForm(prevState => {
                      return {...prevState, project_code: value};
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
                  <Text style={styles.modalText}>{}</Text>
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
