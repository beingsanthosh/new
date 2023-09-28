function Events(){
    let m = 0;
    function add(e){
        if(m<10) {
            m++;
            e.target.parentElement.querySelector('#res').textContent = m;
        }
        else alert('Value is already 10');
    }
    function dec(e){
        if(m>0) {
            m--;
            e.target.parentElement.querySelector('#res').textContent = m;
        }
        else alert('Value is already 0');
    }
    function fun(){
        let arr = ['blue', 'grey', 'red', 'rebeccapurple', 'orangered', 'slateblue'];
        console.log('Clicked');
        document.body.style.background = arr[Math.floor(Math.random()*6)];
    }
    return(
        <div align='center'>
            <h1>Events</h1>
            <button onClick={() => fun()}>Click here</button>
            <p id="res">0</p>
            <button onClick={(e)=>add(e)}>Increment</button> <br></br>
            <button onClick={(e)=>dec(e)}>Decrement</button> <br></br> <br></br>
        </div>
    )
}
export default Events;