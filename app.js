let demo=document.getElementById('demo')
console.log(demo)
demo.onmousemove=()=>{
    let block=document.getElementById('block')
    console.log(block);
    block.style.display='block';
}
let block=document.getElementById('block');
block.onmouseleave=()=>{
    block.style.display='none';

}


    