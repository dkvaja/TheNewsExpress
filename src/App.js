import React from 'react';
import NewsCard from './NewsCard';

const App = () => {
    return(
      <>
      <h1 id='main-heading'>Today's News</h1>
      <div id="container">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      </div>
      </>
    );
}


export default App;