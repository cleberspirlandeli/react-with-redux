import React from "react";
import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => (
  <div>
    <strong>Módulo: {activeModule.title} - </strong>
    <span>Aula: {activeLesson.title}</span>
  </div>
);

export default connect(state => ({
  activeLesson: state.activeLesson,
  activeModule: state.activeModule
}))(Video);
