import { useRef } from 'react';
import Layout from '../layout/Layout';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function sumbitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAdress,
      description: enteredDescription,
    };

props.onAddMeetup(meetupData)

    console.log(meetupData);
  }

  return (
    <Layout>
      <Card>
        <form className={classes.form} onSubmit={sumbitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type='text' id='title' required ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>Meetup Image</label>
            <input type='url' id='image' required ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Meetup Address</label>
            <input type='text' id='address' required ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>Description</label>
            <textarea
              id='descrtiption'
              rows='5'
              required
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default NewMeetupForm;
