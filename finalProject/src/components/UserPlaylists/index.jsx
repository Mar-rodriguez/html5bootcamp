import UserPlaylists from "./userPlaylists";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlaylistsMenu } from '../../actions/playlistActions';

const mapStateToProps = (state) => {

	return {
		userId: state.userReducer.user ? state.userReducer.user.id : '',
		playlistMenu: state.playlistReducer.playlistMenu ? state.playlistReducer.playlistMenu : '',
		token: state.tokenReducer.token ? state.tokenReducer.token : ''
	};

};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		fetchPlaylistsMenu,
	}, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);