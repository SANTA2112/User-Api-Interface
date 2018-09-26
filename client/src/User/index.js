import User from './User';
import { deleteUser, editUser } from './../store/actions';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

const state = withState('isEditable', 'changeEditMode', false)

const handlers = withHandlers({
  handleCancel: props => (e) => (e.preventDefault(), props.changeEditMode(false)),
  handleSave: props => (e) => {
    e.preventDefault();
    const { name: { value: name }, address: { value: address }, phone: { value: phone } } = e.target;
    props.editUser(props.id, { name, address, phone }, () => props.changeEditMode(false));
  }
})

export default compose(
  connect(null, { deleteUser, editUser }),
  state,
  handlers,
)(User);
