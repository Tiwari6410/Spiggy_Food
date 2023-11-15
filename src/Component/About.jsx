// import User from "./User";
// import UserClass from "../Component/UserClass.js"

// const About = () => {
//   return (
//     <div>
//       <h1>About </h1>
//       <h3>this is Namaste React About section</h3>
//       <hr />
//       <User name={"Saktiman"}/>
//       <hr />
//       <UserClass name = {"Ayushman"}/>
//     </div>
//   );
// };
// export default About;

import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor() {
    super();

    console.log("this is parent constructor")
  }
  componentDidMount(){
    console.log("this is parent component Mount")
  }
  render() {

    console.log("Parent render method called")
    return (
      <div>
        <h1>About </h1>
        <h3>this is Namaste React About section</h3>
        <hr />
        {/* <User name={"Saktiman"} /> */}
        <hr />
        <UserClass name={"Ayushman"} />
      </div>
    )
  }
}

export default About;