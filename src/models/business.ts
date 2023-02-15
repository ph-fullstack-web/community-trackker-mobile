export type Employee = {
  employeeId: number;
  cognizantId: number;
  lastName: string;
  firstName: string;
  fullName: string;
  csvEmail: string;
  isActive: boolean;
  dateHired: string;
};

export type Community = {
  icon?: string;
  communityId: number;
  name: string;
  description: string;
  managerName: string;
  totalMembers: number;
  percentage: number;
  members: Employee[];
};

export type User = {
  userId: string;
  username: string;
  csvEmail: string;
};

export type PeopleSkill = {
  peopleskills_id: number;
  peopleskills_desc: string;
  is_active: boolean;
};
