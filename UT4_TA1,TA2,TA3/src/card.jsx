import './card.css'

export function Card({title, description, assignedPerson, startDate, endDate}){
    return(
        <div className='card'>
            <p>{title}</p>
            <p>{description}</p>
            <p>{assignedPerson}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    );
}

//TA2
export function CardChild({children}){
    return(
        <div className='card'>
            <div>{children}</div>
        </div>
    );
}