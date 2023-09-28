function Events1(){
    function getdata(e){
        console.log(e.target.name + "valus is :"+ e.target.value);
    }
    return(
        <div>
            <h1>Event1</h1>
            <input type="text" name="firstname" onChange={getdata}/>
        </div>
    )
}
export default Events1;