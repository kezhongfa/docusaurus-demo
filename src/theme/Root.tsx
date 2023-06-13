// import "../public-path";
import React from "react";
// import ReactDOM from "react-dom";

// export async function bootstrap() {
//   console.log("react1 app bootstraped");
// }

const App = ({ children }) => {
  return (
    <>
      kkkk
      {children}
    </>
  );
};
// Default implementation, that you can customize
export default App;

// export async function mount(props) {
//   console.log("mount:", props);
//   ReactDOM.render(
//     //@ts-ignore
//     <App />,
//     props.container
//       ? props.container.querySelector("#__docusaurus")
//       : document.getElementById("__docusaurus")
//   );
// }

// export async function unmount(props) {
//   console.log("unmount:", props);
//   ReactDOM.unmountComponentAtNode(
//     props.container
//       ? props.container.querySelector("#__docusaurus")
//       : document.getElementById("__docusaurus")
//   );
// }
