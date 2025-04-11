"use client"
import ReactGA from 'react-ga4'
ReactGA.initialize("G-4FV2KJCYWG");
function questionButton() {
    ReactGA.event({
        category: "buttons",
        action: "question",
      });
}
function callButton() {
    ReactGA.event({
        category: "buttons",
        action: "call",
      });
}
function applyButton() {
    ReactGA.event({
        category: "buttons",
        action: "apply",
      });
}
export {questionButton, callButton, applyButton}