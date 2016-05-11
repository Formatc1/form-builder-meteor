import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { push } from 'react-router-redux';

import { Card,
         CardTitle,
         CardText,
         CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import { changeFormValue } from '/imports/client/actions/home';

import styles from './HomeStyles';

const Home = (props) => {
  const handleChange = (name, value) => {
    props.dispatch(changeFormValue(name, value));
  };

  return (
    <div className={styles.centered}>
      <Card className={styles.card}>
        <CardTitle title='Create new form'/>
        <CardText className={styles.cardText}>
          Build new form from scratch or edit existing one.
        </CardText>
        <CardActions>
          <Button className={styles.button} label='Create' onClick={() => {
              props.dispatch(push('/create'));
            }} />
          <Button className={styles.button} href='edit' label='Edit' />
        </CardActions>
      </Card>
      <Card className={styles.card}>
        <CardTitle title='View form'/>
        <CardText className={styles.cardText}>
          View and fill existing form.
          <Input
            type='text'
            label='Form id'
            name='form'
            error={props.home.formErrors}
            value={props.home.form}
            onChange={handleChange.bind(this, 'username')} />
        </CardText>
        <CardActions>
          <Button className={styles.button} label='View' onClick={() => {
              props.dispatch(push('/view/1'));
            }} />
        </CardActions>
      </Card>
    </div>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
  home: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    home: state.home
  };
};

export default connect(mapStateToProps)(Home);
