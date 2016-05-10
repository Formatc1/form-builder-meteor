import React from 'react';

import { Card,
         CardTitle,
         CardText,
         CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

import styles from './HomeStyles';

const Home = () => (
  <div className={styles.centered}>
    <Card className={styles.card}>
      <CardTitle title='Create new form'/>
      <CardText className={styles.cardText}>
        Build new form from scratch or edit existing one.
      </CardText>
      <CardActions>
        <Button className={styles.button} href='edit' label='Create' />
        <Button className={styles.button} href='edit' label='Edit' />
      </CardActions>
    </Card>
    <Card className={styles.card}>
      <CardTitle title='View form'/>
      <CardText className={styles.cardText}>
        View and fill existing form.
      </CardText>
      <CardActions>
        <Button className={styles.button} href='view' label='View' />
      </CardActions>
    </Card>
  </div>
);

export default Home;
