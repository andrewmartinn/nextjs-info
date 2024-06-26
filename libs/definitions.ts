export interface Project {
  id: number;
  title: string;
  image: string;
  stack: string[];
  codeLink: string;
}

export interface IconMap {
  [key: string]: React.ComponentType;
}
