'use client';

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsSubmitForm from '@/components/meals/meals-form-submit';

import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { messag: null });
  // first argument is the actual Server Action
  // that should be triggered when the form is submitted,
  // second argument is the initial value
  // that should be returned by useActionState
  // before this action has been triggered
  // and yielded a response.

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Your image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsSubmitForm />
          </p>
        </form>
      </main>
    </>
  );
}
