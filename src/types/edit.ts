export type EditLook = {
  id: string;
  title: string;
  description: string;
  image: string;

  mood: string;
  editorNote: string;
  keyPieces: string[];
};

export type Edit = {
  slug: string;

  volume: string;

  title: string;
  subtitle: string;

  cover: string;

  story: string;

  creativeDirection: string;
  focus: string;
  year: string;

  looks: EditLook[];
};