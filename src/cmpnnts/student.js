function Student(props){
        return(
            <li>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.rollno}</li>
                </ul>
            </li>
        )
}
export default Student;