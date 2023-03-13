const searchWrapper = document.querySelector('.search-input')
const inputBox = searchWrapper.querySelector('input')
const suggBox = searchWrapper.querySelector('.autocom-box')


inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((element)=>{
            return element.toLowerCase().startsWith(userData.toLowerCase())
            
        })
        emptyArray = emptyArray.map((element)=>{
            return   '<li>' + element + '</li>'
        })

        console.log(emptyArray)
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray)
        let alllist = suggBox.querySelectorAll('li')
        alllist.forEach((element)=>{
            element.setAttribute('onclick','select(this)')
        })

    }else{
        searchWrapper.classList.remove("active");

    }

}

function select(element){
    let selectuserdata= element.textContent
    console.log(selectuserdata)
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        UserValue = inputBox.value;
        listData = '<li>' + UserValue + '</li>'
    }else {
        listData = list.join('')
    }
    suggBox.innerHTML = listData
}