//create array using a loop with numbers from 1 to 100
let num_arr = [];
for(let i = 1; i <= 100; i++){
    num_arr.push(i);
}
// console.log("FULL ARRAY")
console.log("FULL ARRAY: " + num_arr);


//Takes an array and a number. Also give you the postion of the number you want to find
function executeBinarySearch(arr, num){
    checkForNumber(arr, num);
}

function checkForNumber(user_array, user_number){
    //get middle of user array
    let middle_of_full_arr = Math.round(user_array.length / 2);
    let middle_value = user_array[middle_of_full_arr];
    let middle_of_newly_form_array = 0;
    let newly_formed_array = [];
    let result;

    if(middle_value === user_number){
        result = middle_value;
    }
    else if(middle_value > user_number){
        console.log(middle_value + " was greater than " + user_number + " ,checking the left...");
        middle_of_newly_form_array = Math.round(middle_of_full_arr - 1 / 2);
        // console.log(middle_of_half_arr);
        for(let i = 0; i < middle_of_newly_form_array; i++){
            // console.log(arr[i]);
            newly_formed_array.push(user_array[i]);
        }
        console.log(newly_formed_array);
        result = newly_formed_array
    }
    else if(middle_value < user_number){
        console.log(middle_value + " was less than " + user_number + " ,checking the right...");
        middle_of_newly_form_array = Math.round(middle_of_full_arr + 1 / 2);
        // console.log(middle_of_half_arr);
        for(let i = middle_of_newly_form_array; i < user_array.length ; i++){
            // console.log(arr[i]);
            newly_formed_array.push(user_array[i]);
        }
        console.log(newly_formed_array);
        result = newly_formed_array
    }


    if(result === user_number){
        console.log(result + " is found");
    }
    else
    {
        checkForNumber(result, user_number);
    }
}


executeBinarySearch(num_arr, 2);