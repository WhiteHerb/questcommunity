var qlist_div = document.getElementById('qlist_div')

console.log(idlist);
console.log(filelist);
var ids = idlist.split('\n')
var files = filelist.split('\n')
console.log(files);
for (var i in ids){
    qlist_div.innerHTML += `<div id="${ids[i]}">
    <a href = '/q/${ids[i]}'><small>id :${ids[i]}</small>
    <small>문제 이름: ${files[i].split('/')[0]}</small></a>
    </div>`
}
console.log(qlist_div.innerHTML);