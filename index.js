let Array1 = [1,2,3,4,5,6,7,8,9,10,1,2,2,3,9,0,1,11,23,44,4,5,22,23,11,34]

function computed(Arr) {
    let sign_obj = {}
    for (let i = 0; i < Arr.length; i++) {
        sign_obj[Arr[i]] = 0
    }
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] in sign_obj) {
            sign_obj[Arr[i]]++
        }
    }
    console.log(sign_obj)
}
computed(Array1)

let Str = 'oh baby you should go and love yourself And if you think that Im still holdin on to somethin'
let Str2 = 'baby yougo'

function removeString (str,str2) {

}

removeString(Str,Str2)