import AddUser from './AddUser';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { addUser } from './../store/actions';

const handelers = withHandlers({
  handleSubmit: props => (e) => {
    e.preventDefault();
    const { name: { value: name }, address: { value: address }, phone: { value: phone } } = e.target;
    props.addUser({ name, address, phone });
    e.target.reset();
  }
})

export default compose(
  connect(null, { addUser }),
  handelers,
)(AddUser)
