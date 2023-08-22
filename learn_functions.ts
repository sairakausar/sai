// if given number is not equal to zero then print if sttement otherwise print else statement
//PURPOSE: AVOID REPETATION OF CODE, CREATE ONE TIME AND USE MANY TIME
// Function stay dead until we call them

// var given_number: number = 6
// if (given_number != 0){
//     console.log("Not equal to zero");
// }else {
//     console.log("Number is zero");
// }


function zero_checker(given_number: number, string_3: string, given_boolearn: boolean): void{
    if (given_number != 0){
        console.log("Not equal to zero", string_3, given_boolearn);
    }else {
        console.log("Number is zero");       
    }
}

zero_checker(6,"fsdaf",true)
// zero_checker(0)
// zero_checker(3)
// zero_checker(1)








 
function function_name(give_u_number: number, give_u_string: number): void{
    var r : number = give_u_number / give_u_string
    console.log(r);
    console.log(r+20);
    
}

function_name(14,5)
