import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home'
import Second from './pages/Second'
import Third from './pages/Third'


const App: React.FC<any> = (props) => {
  const { now } = props
  const location = useLocation();

  return (
    <>
      <Header now={now} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />

      </Routes>

    </>
  );
};


const mapStateToProps = (state: any) => ({
  now: state.pBarReducer.now
});

export default connect(mapStateToProps, {

})(App)