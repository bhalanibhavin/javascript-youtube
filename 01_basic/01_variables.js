const account_id = 1

let account_email = "bhavin@google.com"

var account_password = "bhavin123"

account_city = "ahm"

let account_state;

// account_id = 2 not allow

account_email = "b@google.com"

account_password = "b123"

account_city = "Bharat"


console.log(account_id)

/*
Prefer not use var
becose of issue in block scope and functional scope
*/


console.table([account_id, account_email, account_password, account_city, account_state])