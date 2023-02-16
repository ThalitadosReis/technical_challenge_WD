import phone from "../assets/phone.svg"
export default function Homepage(){

    return(
        <div className="homepage">
            <h1>
                Welcome, <br />
                We are ENTER <img src={phone} alt="" className="App-logo"/>
            </h1>
        </div>
    )
}