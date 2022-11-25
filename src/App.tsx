import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  clickNextAction,
  clickBackAction,
  clickToStartAction,
} from "./redux/actions/PBarActions";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Forth from "./pages/Forth";
import Five from "./pages/Five";
import Six from "./pages/Six";
import Seven from "./pages/Seven";
import Final from "./pages/Final";
import Eight from "./pages/Eight";

const App: React.FC<any> = (props) => {
  const { now, nextPage, backPage, startPage } = props;
  const location = useLocation();

  return (
    <>
      <Header now={now} backPage={backPage} />
      <Routes>
        <Route path="/" element={<Home nextPage={nextPage} />} />
        <Route path="/second" element={<Second nextPage={nextPage} />} />
        <Route path="/third" element={<Third nextPage={nextPage} />} />
        <Route path="/forth" element={<Forth nextPage={nextPage} />} />
        <Route path="/five" element={<Five nextPage={nextPage} />} />
        <Route path="/six" element={<Six nextPage={nextPage} />} />
        <Route path="/seven" element={<Seven nextPage={nextPage} />} />
        <Route path="/eight" element={<Eight nextPage={nextPage} />} />
        <Route path="/final" element={<Final nextPage={startPage} />} />
      </Routes>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  now: state.pBarReducer.now,
});

export default connect(mapStateToProps, {
  nextPage: clickNextAction,
  backPage: clickBackAction,
  startPage: clickToStartAction,
})(App);
