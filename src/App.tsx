import { useState } from 'react';

import './App.css';
import useSendVote from './hooks/useSendVote';

import {
  WrapperList,
  CardCelebrity,
  SelectField,
  Navbar,
  Header,
  TextSection,
  AddSection,
  Footer,
} from './components';

function App() {
  const [listSection, setListSection] = useState<boolean>(true);
  const { people, sendVote, onSelectLike, onSelectDislike, voteAgain } =
    useSendVote();

  return (
    <>
      <Navbar />
      <Header />
      <div className='max-centered'>
        <TextSection />
        <section className='select_section'>
          <p>Previous Rulings</p>
          <SelectField setListSection={setListSection} />
        </section>

        <WrapperList listSection={listSection}>
          {people.map(item => (
            <CardCelebrity
              id={item.id}
              key={item.name}
              name={item.name}
              picture={item.picture}
              date={item.lastUpdated}
              isVoting={item.isVoting}
              category={item.category}
              listSection={listSection}
              likes={item.votes.positive}
              activeLike={item.likeActive}
              dislikes={item.votes.negative}
              description={item.description}
              activeDislike={item.dislikeActive}
              sendVote={sendVote}
              voteAgain={voteAgain}
              onSelectLike={onSelectLike}
              onSelectDislike={onSelectDislike}
            />
          ))}
        </WrapperList>

        <AddSection />
        <hr role='separator' />
        <Footer />
      </div>
    </>
  );
}

export default App;
