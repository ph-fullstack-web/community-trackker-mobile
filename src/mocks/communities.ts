import {Community} from 'models/business';

import {employeeSet100} from './employeeSet100';
import {employeeSet200} from './employeeSet200';

export const mockCommunities: Community[] = [
  {
    communityId: 1,
    name: 'Community AAA',
    description: 'Community AAA Description',
    managerName: 'Manager AAA',
    totalMembers: 10,
    percentage: 11,
    members: employeeSet200,
  },
  {
    communityId: 2,
    name: 'Community BBB',
    description: 'Community BBB Description',
    managerName: 'Manager BBB',
    totalMembers: 20,
    percentage: 22,
    members: employeeSet100,
  },
  {
    communityId: 3,
    name: 'Community CCC',
    description: 'Community CCC Description',
    managerName: 'Manager CCC',
    totalMembers: 30,
    percentage: 33,
    members: employeeSet100,
  },
  {
    communityId: 4,
    name: 'Community DDD',
    description: 'Community DDD Description',
    managerName: 'Manager DDD',
    totalMembers: 40,
    percentage: 44,
    members: [],
  },
  {
    communityId: 5,
    name: 'Community EEE',
    description: 'Community EEE Description',
    managerName: 'Manager EEE',
    totalMembers: 50,
    percentage: 55,
    members: [],
  },
  {
    communityId: 6,
    name: 'Community FFF',
    description: 'Community FFF Description',
    managerName: 'Manager FFF',
    totalMembers: 60,
    percentage: 66,
    members: [],
  },
  {
    communityId: 7,
    name: 'Community GGG',
    description: 'Community GGG Description',
    managerName: 'Manager GGG',
    totalMembers: 70,
    percentage: 77,
    members: [],
  },
];
