export interface PropsChildren {
  children: JSX.Element | JSX.Element[];
}

export interface DataProps {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
}
