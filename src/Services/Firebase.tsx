import { firebase } from "../Services/Configs/FirebaseConfig";
import User from "../Models/User";

const ref = firebase.database().ref("/root/contacts/");
function select(user: User) {
  let users: User[] = new Array();
  ref.on("value", snapshot => {
    users.push(snapshot.val());
  });
  return users;
}
function add(user: User) {
  ref
    .push(user)
    .then(snapshot => {
      console.log("User saved on firebase succesfully!");
      this.user.id = snapshot.key;
      update(user);
      return true;
    })
    .catch(() => {
      console.log("User could not be saved on firebase!");
      return false;
    });
}
function update(user: User) {
  ref
    .set({
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email
    })
    .then(() => {
      console.log("User updated on firebase succesfully!");
      return true;
    })
    .catch(() => {
      console.log("User could not be updated on firebase!");
      return false;
    });
}
function remove(id: string) {
  ref
    .child("")
    .orderByChild("id")
    .equalTo(id)
    .on("value", snapshot => {
      ref.child(Object.keys(snapshot.val())[0]).remove();
    });
  this.select();
}
function getChildrenCount() {
  let childrenCount: number;
  ref.once("value").then(snapshot => {
    childrenCount = snapshot.numChildren();
  });
  return childrenCount;
}

export { select, add, remove, update, getChildrenCount };
