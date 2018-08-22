import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { characterActions } from '../../actions/actions';
import { App } from '../../components/components';

const mapStateToProps = ({ characters }) => ({
  characters,
});

const mapDispatchToProps = dispatch =>
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
