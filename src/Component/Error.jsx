import { useRouteError } from "react-router-dom";
import "../Component/Style/Error.css"

const Error =()=>{
    const err= useRouteError();
    console.log(err)
    return(
        <div className="container flex justify-center items-center bg-slate-100" w-auto style={{height:"768px"}}>
            <div className="center">
            <img src="https://i.gifer.com/Qw5v.gif" width={400} height={300} alt="" />
            <h1>Opps</h1>
            <h1>You went something wrong.........🚀</h1>
            <h3>{err.status}:{err.statusText}</h3>
            </div>
           
        </div>
    )
}
export default Error;