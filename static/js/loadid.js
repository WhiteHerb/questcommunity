var submiter = document.getElementById('submiter')
var id = document.getElementById('id')
change = () => {
  submiter.href = `/q/${id.value}`
}
id.addEventListener('change',change)
