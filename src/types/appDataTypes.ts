export interface IFolder {
  id: number;
  parentId?: number;
  name: string;
}

export interface IState {
  folders: IFolder[];
  notes: INote[];
  directoryParentId: number;
  selectedFolder: null;
  seletedNote: null;
}

export interface INote {
  id: number;
  directoryId: number;
  position: number;
  title: string;
  description: string;
  tags: string[];
}
