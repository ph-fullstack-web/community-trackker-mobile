import {HttpStatusCode} from 'axios';

export type ErrorMessageProps = {
  status: HttpStatusCode;
  message: string;
  size: number;
  buttonTitle: string;
  showButton: boolean;
  onPress?: () => void;
};
