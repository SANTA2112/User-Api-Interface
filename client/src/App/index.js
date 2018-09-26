import { hot } from 'react-hot-loader'
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getUsers } from './../store/actions';
import App from './App';

const lifecycles = lifecycle({
  componentDidMount() {
    this.props.getUsers();
  }
})

export default compose(
  hot(module),
  connect(store => ({ users: store.users }), { getUsers }),
  lifecycles,
)(App);
