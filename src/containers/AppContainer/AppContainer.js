import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { characterActions } from '../../actions/actions';
import { App } from '../../components/components';

export const mapStateToProps = ({ characters }) => ({
  characters,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...characterActions,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
