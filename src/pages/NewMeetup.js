import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPages() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-823a8-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Conent-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/', { replace: true })
    });
  }


  return (
    <Layout>
      <section>
        <h1>Add new Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </Layout>
  );
}

export default NewMeetupPages;
