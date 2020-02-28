import { firebase } from "../Services/Configs/FirebaseConfig";
import User from "../Models/User";

const ref = firebase.database().ref("/contacts/");
function select(user: User) {
  let users: User[] = new Array();
  ref.on("value", snapshot => {
    users.push(snapshot.val());
  });
  return users;
}
function add(user: User) {
  ref
    .set({
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email
    })
    .then(() => console.log("User saved on firebase succesfully!"))
    .catch(() => console.log("User could not be saved on firebase!"));
}
function update(user: User) {
  ref
    .set({
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email
    })
    .then(() => console.log("User updated on firebase succesfully!"))
    .catch(() => console.log("User could not be updated on firebase!"));
}
function remove(user: User) {}
