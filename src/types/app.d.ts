export interface PropsChildren {
  children: JSX.Element | JSX.Element[];
}

export interface DataProps {
  id: string;
  name: string;
  isVoting: boolean;
  description: string;
  likeActive: boolean;
  dislikeActive: boolean;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
}
