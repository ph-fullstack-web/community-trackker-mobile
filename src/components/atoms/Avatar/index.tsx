import {AccessoryProps} from '@rneui/base';
import {
  Avatar as DefaultAvatar,
  AvatarProps as DefaultAvatarProps,
} from '@rneui/themed';

import styles from './Avatar.styles';

export const defaultAvatar = 'https://via.placeholder.com/30.png';

type AvatarProps = DefaultAvatarProps & {avatarAccessory?: AccessoryProps};

export const Avatar = (props: AvatarProps) => {
  return (
    <DefaultAvatar
      {...props}
      avatarStyle={{...styles.avatar, ...props.avatarStyle}}
    >
      {props.avatarAccessory && (
        <DefaultAvatar.Accessory {...props.avatarAccessory} />
      )}
    </DefaultAvatar>
  );
};

Avatar.defaultProps = {
  rounded: true,
  source: {uri: defaultAvatar},
};
