var appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}

var removeScript = (scriptToreMove) => {
  let allSuspects = document.getElementsByTagName("script");
  for (let i = allSuspects.length; i >= 0; i--) {
    if (allSuspects[i] && allSuspects[i].getAttribute("src") !== null
      && allSuspects[i].getAttribute("src").indexOf(`${scriptToreMove}`) !== -1) {
      allSuspects[i].parentNode.removeChild(allSuspects[i])
    }
  }
}

const script = {
  appendScript,
  removeScript
};

export default script;