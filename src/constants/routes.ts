interface CommunityTrackerRoutes {
  community: {
    GetCommunities: () => string;
    GetCommunity: (communityId: number) => string;
    GetCommunityJobLevels: () => string;
    GetCommunitiesWithPercentage: () => string;
  };
  communityManagers: {
    GetManagers: () => string;
    GetCommunityManagers: () => string;
  };
  communityMembers: {
    GetCommunityWithMembers: (communityId: number) => string;
  };
  people: {
    GetPeople: () => string;
    GetPeopleWorkState: () => string;
    GetPerson: (personId: number) => string;
    GetPersonByCsvEmail: (csvEmail: string) => string;
    GetPeopleBySkills: (skills: string) => string;
  };
  peopleDetails: {
    GetPeopleDetails: () => string;
    GetPeopleDetailsDescription: () => string;
  };
  peopleSkills: {
    GetPeopleSkills: () => string;
  };
}

export const communityTrackerRoutes: CommunityTrackerRoutes = {
  community: {
    GetCommunities: () => 'community',
    GetCommunity: (communityId: number) => `community/${communityId}`,
    GetCommunityJobLevels: () => 'community/job-level',
    GetCommunitiesWithPercentage: () => 'community/percentage',
  },
  communityManagers: {
    GetManagers: () => 'managers',
    GetCommunityManagers: () => 'managers/community',
  },
  communityMembers: {
    GetCommunityWithMembers: (communityId: number) =>
      `community-members/${communityId}`,
  },
  people: {
    GetPeople: () => 'people',
    GetPeopleWorkState: () => 'people/workstate',
    GetPerson: (personId: number) => `people/${personId}`,
    GetPersonByCsvEmail: (csvEmail: string) => `people/email/${csvEmail}`,
    GetPeopleBySkills: (skills: string) => `people/skills?skills=${skills}`,
  },
  peopleDetails: {
    GetPeopleDetails: () => 'peopledetails',
    GetPeopleDetailsDescription: () => 'peopledetails/description',
  },
  peopleSkills: {
    GetPeopleSkills: () => 'peopleskills',
  },
};
