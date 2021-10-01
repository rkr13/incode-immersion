function sortWords(arr) {
    //creating the object
    let obj = {
        odd: [], even: []
    }

    //getting each item inside the array and checking if its length is odd or even. 
    //If odd ad to odd and so for even
    arr.forEach(str => {
        (str.length % 2 === 0 ) ? obj.even.push(str) : obj.odd.push(str)
    })

    //printing the object
    const prt = JSON.stringify(obj)
    console.log(prt)
}

sortWords([])
sortWords(["work", "hard", "mommy"])
sortWords(["oh!", "ah!", "hi", "my"])
