import {useState} from 'react';
import {Text, View} from 'react-native';

import {Chip, Typeahead} from 'components/atoms';
import {peopleskills} from 'mocks/peopleskills';
import {PeopleSkill} from 'models/business';
import styles from './SkillsForm.styles';

type SkillsFormProps = {
  skills: string[];
};

const SkillsForm = ({skills}: SkillsFormProps) => {
  const [skillsCopy, setSkillsCopy] = useState(skills);

  const addSkill = (skill: PeopleSkill) => {
    setSkillsCopy(prevState =>
      [...prevState, skill.peopleskills_desc].sort((a, b) => a.localeCompare(b))
    );
  };

  const removeSkill = (index: number) => {
    setSkillsCopy(prevState => prevState?.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Typeahead<PeopleSkill>
        data={peopleskills}
        label="peopleskills_desc"
        onSelect={addSkill}
        placeholder="Add Skill"
        selected={skillsCopy}
        uniqueKey="peopleskills_id"
      />
      <View style={styles.chipsContainer}>
        {skillsCopy?.map((skill, i) => (
          <Chip key={i} onPress={() => removeSkill(i)} title={skill} />
        ))}
      </View>
      {!skillsCopy?.length && <Text>No skills found</Text>}
    </View>
  );
};

export default SkillsForm;
