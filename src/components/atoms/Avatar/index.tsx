import {Avatar as DefaultAvatar, AvatarProps} from '@rneui/themed';
import styles from './Avatar.styles';

export const defaultAvatar = 'https://via.placeholder.com/30.png';

export const Avatar = (props: AvatarProps) => {
  return <DefaultAvatar {...props} avatarStyle={styles.avatar} />;
};

Avatar.defaultProps = {
  rounded: true,
  source: {uri: defaultAvatar},
};
