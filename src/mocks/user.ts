import {User} from 'models/business';

//TODO: remove after people API integration
export const mockUser: User = {
  userId: '000001',
  username: 'Eren Yeager',
  csvEmail: 'eren.yeager@gmail.com',
  fullname: 'Eren Yeager',
  cecPoints: 30,
  skills: [
    {
      peopleskills_id: 1,
      peopleskills_desc: 'Angular',
      is_active: true,
    },
    {
      peopleskills_id: 2,
      peopleskills_desc: 'React',
      is_active: true,
    },
    {
      peopleskills_id: 3,
      peopleskills_desc: 'Vue',
      is_active: true,
    },
    {
      peopleskills_id: 4,
      peopleskills_desc: 'Javascript',
      is_active: true,
    },
    {
      peopleskills_id: 5,
      peopleskills_desc: 'Java',
      is_active: true,
    },
  ],
  communityId: 2,
};
