function DismissAll (props) {

    function clickHandler () {
        console.log('dismissed')

        props.onDismissAllHandler()
    }
    if(props.numberOfNotis){
    return (
        <button className="btn btn-primary mx-5 mb-5" style={{width: 15+'vw'}} onClick={clickHandler}>Dismiss All</button>
    ) } else {
        return ('')
    }
}

export default DismissAll