import { COLORS } from "constants/colors";

const theme = {
  LIGHT: {
    GRADIENT: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
    CARD: {
      CONTAINER: {
        backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
        shadowColor: COLORS.DARK_GRAY,
      }
    },
    PROGRESS_CHART: {
      VERTICAL_LABEL:{
        color: COLORS.BLACK,
      }
    },
    TYPE_AHEAD: {
      RESULT_CONTAINER: {
        backgroundColor: COLORS.WHITE,
      },
    },
    COMMUNITY_MODAL: {
      INFO: {
        backgroundColor: COLORS.TRANSPARENT,
      },
      MODAL_VIEW: {
        backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
        shadowColor: COLORS.BLACK,
      },
      BUTTON_CLOSE: {
        backgroundColor: COLORS.DARK_BLUE,
      },
      TEXT_STYLE: {
        color: COLORS.WHITE,
      },
    },
    LABELED_INPUT: {
      TEXT_FIELD: {
        borderColor: COLORS.LIGHT_GRAY,
      },
    },
    MEMBERS_PROGRESSION_CHART: {
      PERCENTAGE: {
        color: COLORS.BLACK,
      },
    },
    SEARCH: {
      INPUT: {
        backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
        shadowColor: COLORS.DARK_GRAY,
      },
      BUTTON: {
        backgroundColor: COLORS.TRANSPARENT,
      },
    },
    COMMUNITY_CARD: {
      BUTTON: {
        backgroundColor: COLORS.TRANSPARENT,
      },
      BUTTON_TEXT: {
        color: COLORS.VERY_LIGHT_GRAY,
      },
    },
    EMPLOYEE_CARD: {
      CARD: {
        borderColor: COLORS.MEDIUM_GRAY,
      },
      PROFILE_PICTURE: {
        borderColor: COLORS.MEDIUM_GRAY
      },      
    },
    LAYOUT: {
      HEADER_LEFT: {
        BUTTON: {
          backgroundColor: COLORS.TRANSPARENT,
        },
      },
      HEADER_RIGHT: {
        BUTTON: {
          backgroundColor: COLORS.TRANSPARENT,
        },
      }
    },
    MEMBER_DETAIL_FORM: {
      ACCORDION_CONTAINER: {
        borderColor: COLORS.LIGHT_GRAY,
      },
      FORM_HEADER: {
        borderBottomColor: COLORS.LIGHT_GRAY,
        backgroundColor: COLORS.LIGHT_GRAY,
      },
      BUTTON_TEXT: {
        color: COLORS.VERY_LIGHT_GRAY,
      },
      TOGGLE_TEXT: {
        color: COLORS.WHITE,
      },
    }
  },

  DARK: {
    GRADIENT: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
    CARD: {
      CONTAINER: {
        backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
        shadowColor: COLORS.DARK_GRAY,
      }
    },
    PROGRESS_CHART: {
      VERTICAL_LABEL:{
        color: COLORS.BLACK,
      }
    },
    TYPE_AHEAD: {
      RESULT_CONTAINER: {
        backgroundColor: COLORS.WHITE,
      },
    },
    COMMUNITY_MODAL: {
      INFO: {
        backgroundColor: COLORS.TRANSPARENT,
      },
      MODAL_VIEW: {
        backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
        shadowColor: COLORS.BLACK,
      },
      BUTTON_CLOSE: {
        backgroundColor: COLORS.DARK_BLUE,
      },
      TEXT_STYLE: {
        color: COLORS.WHITE,
      },
    },
    LABELED_INPUT: {
      TEXT_FIELD: {
        borderColor: COLORS.LIGHT_GRAY,
      },
    },
    MEMBERS_PROGRESSION_CHART: {
      PERCENTAGE: {
        color: COLORS.BLACK,
      },
    },
    SEARCH: {
      INPUT: {
        backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
        shadowColor: COLORS.DARK_GRAY,
      },
      BUTTON: {
        backgroundColor: COLORS.TRANSPARENT,
      },
    },
    COMMUNITY_CARD: {
      BUTTON: {
        backgroundColor: COLORS.TRANSPARENT,
      },
      BUTTON_TEXT: {
        color: COLORS.VERY_LIGHT_GRAY,
      },
    },
    EMPLOYEE_CARD: {
      CARD: {
        borderColor: COLORS.MEDIUM_GRAY,
      },
      PROFILE_PICTURE: {
        borderColor: COLORS.MEDIUM_GRAY
      },      
    },
    LAYOUT: {
      HEADER_LEFT: {
        BUTTON: {
          backgroundColor: COLORS.TRANSPARENT,
        },
      },
      HEADER_RIGHT: {
        BUTTON: {
          backgroundColor: COLORS.TRANSPARENT,
        },
      }
    },
    MEMBER_DETAIL_FORM: {
      ACCORDION_CONTAINER: {
        borderColor: COLORS.LIGHT_GRAY,
      },
      FORM_HEADER: {
        borderBottomColor: COLORS.LIGHT_GRAY,
        backgroundColor: COLORS.LIGHT_GRAY,
      },
      BUTTON_TEXT: {
        color: COLORS.VERY_LIGHT_GRAY,
      },
      TOGGLE_TEXT: {
        color: COLORS.WHITE,
      },
    }
  },
};

export default theme;
