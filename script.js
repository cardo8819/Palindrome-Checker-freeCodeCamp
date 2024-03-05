document.addEventListener('DOMContentLoaded', () =>{
    const inputValue = document.getElementById('text-input');
    const submitBtn = document.getElementById('check-btn');
    const resultPara = document.getElementById('result');
    
    

    submitBtn.addEventListener("click", () =>{
        
        palindromeCheck(inputValue.value);
        inputValue.value = "";
    })

    const palindromeCheck = (event) => {
        
        const input = event;
        if(input.length === 0 ){
            alert("Please input a value");
            return;
        }
        resultPara.replaceChildren();
        const filteredString = input.replace(/\s/g, "").replace(/[^\w]/ig, "").replace(/_/g, "").toLowerCase();
        const backWards = filteredString.split("").reverse().join("");
        const result = backWards === filteredString ?`<strong>${input}</strong> is a palindrome.`:`<strong>${input}</strong> is not a palindrome.`

        const pTag = document.createElement('p');
        pTag.classList.add('text-center')
        pTag.innerHTML = result;
        resultPara.appendChild(pTag);
    }

    inputValue.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            palindromeCheck(inputValue.value)
        }
    })    

})