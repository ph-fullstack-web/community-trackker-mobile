export const validateSkillString = (skillString: string) =>
  /^[0-9,]+$/.test(skillString);
