import {useState} from 'react';
import {View} from 'react-native';

import {useGetPeopleSkills} from 'api/hooks';
import {Chip, Text} from 'components/atoms';
import {Spinner} from 'components/molecules';

import styles from './SkillsForm.styles';

type SkillsFormProps = {
  skills: string[];
};

export const SkillsForm = ({skills}: SkillsFormProps) => {
  const [skillsCopy /*, setSkillsCopy*/] = useState(skills);

  const {isLoading, isFetching /*, data = []*/} = useGetPeopleSkills();

  // const addSkill = (skill: Peopleskills) => {
  //   setSkillsCopy(prevState =>
  //     [...prevState, skill.peopleskills_desc].sort((a, b) => a.localeCompare(b))
  //   );
  // };

  // const removeSkill = (index: number) => {
  //   setSkillsCopy(prevState => prevState?.filter((_, i) => i !== index));
  // };

  return (
    <View id="skillForm" style={styles.container}>
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <>
          {/**TODO: update once community tracker mutations has been integrated */}
          {/* <Typeahead<Peopleskills>
            data={data}
            label="peopleskills_desc"
            onSelect={addSkill}
            placeholder="Add Skill"
            selected={skillsCopy}
            uniqueKey="peopleskills_id"
          /> */}
          <View style={styles.chipsContainer}>
            {skillsCopy?.map((skill, i) => (
              <Chip
                id={`skill${i}`}
                key={i}
                //onPress={() => removeSkill(i)}
                title={skill}
              />
            ))}
          </View>
          {!skillsCopy?.length && <Text>No skills found</Text>}
        </>
      )}
    </View>
  );
};
