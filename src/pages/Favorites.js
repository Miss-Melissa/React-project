import { useContext } from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorite-context';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <Layout>
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
    </Layout>
  );
}

export default FavoritesPage;
