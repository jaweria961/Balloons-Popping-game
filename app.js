

let popped =0;

document.addEventListener('click',function(e)
{
    if(e.target.className === 'balloons')
    {
        e.target.style.backgroundColor ="white";
        e.target.textContent ='Pop ! hurah'
   
        popped++;
        checkAllPopped()
    }
});


function checkAllPopped(){
    if(popped === 20)
    {
        // alert("all popped")
        let gallery = document.getElementById('balloon-gallery')

        gallery.innerText= ' ';
        let message = document.getElementById('no-ballons-left')
        message.style.display = 'block';
        message.style.color = "green";
        message.style.marginTop= "2rem"
    }
}