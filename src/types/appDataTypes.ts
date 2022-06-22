export interface IFolder {
  id?: number;
  parentId?: number;
  name: string;
}

export interface IState {
  folders: IFolder[];
  notes: INote[];
  selectedNoteId: number;
  selectedFolderId: number;
  currentPosition?: number;
}

export interface INote {
  id?: number;
  directoryId: number;
  position?: number;
  title: string;
  description: string;
  tags: string[];
}

export interface ISubFolder {
  item: IFolder;
}

export interface INoteItem {
  item: INote;
  dragStartHandler?: (event: React.DragEvent, item: INote) => void;
  dragOverHandler?: (event: React.DragEvent) => void;
  dragEndHandler?: (event: React.DragEvent) => void;
  dropHandler?: (event: React.DragEvent, item: INote) => void;
}

export interface ITags {
  tags: string[];
  setTags: (value: string[]) => void;
}
