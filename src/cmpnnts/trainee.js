import Student from "./student";
function Trainee(){
    let Students=[{
        name:'kiran',
        rollno:1234
    }
,{
    name:'raju',
    rollno:5678
},
{
    name:'kiran',
    rollno:1234
}
]
    return(
        <div>
            <h1>
                TrainessList
            </h1>
            {/* <table border={1} cellSpacing={'2px'} cellPadding={'10px'}>
            <tr><th >Name:</th>
            <th>Rollno:</th>
            </tr>
            {
                Students.map((ele,i,arr)=>{
                    return (<Student name={ele.name} rollno={ele.rollno}/>)
                })
            }
            </table> */}
            <ol>
            {/* <li>Name:</li>
            <li>Rollno:</li> */}
            {
                Students.map((ele,i,arr)=>{
                    return (<Student name={ele.name} rollno={ele.rollno}/>)
                })
            }
            </ol>
        </div>
    )
}
export default Trainee;