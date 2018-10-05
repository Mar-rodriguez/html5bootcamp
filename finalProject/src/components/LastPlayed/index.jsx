import LastPlayed from "./lastPlayed";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRecentlyPlayed } from '../../actions/tracksActions';

const mapStateToProps = (state) => {
	return {
		tracksList: state.trackReducer.tracks ? state.trackReducer.tracks : '',
		token: state.tokenReducer.token ? state.tokenReducer.token : ''
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchRecentlyPlayed
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LastPlayed);
