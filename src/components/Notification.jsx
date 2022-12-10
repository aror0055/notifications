function Notification (props) {

   function clickHandler () {
    console.log("pressed") 

    props.onClickHandler(props.id)
    }

    return (
        <>
    <section className="container d-flex d-inline-flex">
        <div className="container border border-dark p-5 rounded-4 m-5" style={{width: 80+'vw'}} >
        <h2 className="notification-title display-5">{props.id}. {props.name}</h2>
        <p className="message fs-2">{props.children}</p>
        <button className="btn btn-primary" style={{width: 10+'vw'}} onClick={clickHandler}>Dismiss</button>
        </div>
        </section>
        </>
    )
}

export default Notification
