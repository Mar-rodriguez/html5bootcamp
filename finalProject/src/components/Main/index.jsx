import Main from "./main";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

  return {
    sectionLoaded: state.mainReducer.title
  };

};

export default connect(mapStateToProps)(Main);
