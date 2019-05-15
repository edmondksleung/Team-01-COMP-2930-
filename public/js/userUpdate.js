// Updates the status of the users (organization, email, or username)

let db = firebase.database();
db.ref('users/ybIbLUTpOFYGRuex1lLDOODpaZA3').update({ isOrg: true});