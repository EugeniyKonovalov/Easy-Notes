export interface INotification {
  status: string;
  title: string;
  message: string;
}

export interface IUiState {
  showModal: boolean;
  isFolderReplace: boolean;
  isNoteReplace: boolean;
  notification: INotification;
}
