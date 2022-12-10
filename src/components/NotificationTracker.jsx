function NotificationTracker (props) {
    if(props.numberOfNotis){
    return (
        
    <p className="notifications fs-4 mt-5 px-5">Number of notifications: {props.children}</p>
        
    ) } else {
        return (
            <p className="notifications fs-4 mt-5 px-5">You don't have any new notifications.</p> 
        )
    }
}

export default NotificationTracker