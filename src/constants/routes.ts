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
    GetCommunityWithMembersSearch: (
      communityId: number,
      page?: number,
      rows?: number,
      search?: string
    ) => string;
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
    UpdatePeopleSkill: (skillId: number) => string;
    DeletePeopleSkill: (skillId: number) => string;
  };
  projects: {
    GetProjects: () => string;
    GetProject: (projectId: number) => string;
    AddProject: () => string;
    UpdateProject: (projectId: number) => string;
    DeleteProject: (projectId: number) => string;
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
    GetCommunityWithMembersSearch: (
      communityId: number,
      page: number = 1,
      rows: number = 10,
      search: string = ''
    ) =>
      `community-members/search/${communityId}?page=${page}&rows=${rows}&full_name=${search}&csv_email=${search}`,
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
    UpdatePeopleSkill: (skillId: number) => `peopleskills/${skillId}`,
    DeletePeopleSkill: (skillId: number) => `peopleskills/${skillId}`,
  },
  projects: {
    GetProjects: () => 'projects',
    GetProject: (projectId: number) => `projects/${projectId}`,
    AddProject: () => 'projects',
    UpdateProject: (projectId: number) => `projects/${projectId}`,
    DeleteProject: (projectId: number) => `projects/${projectId}`,
  },
};
