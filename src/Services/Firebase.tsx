import { firebase } from "../Services/Configs/FirebaseConfig";
import User from "../Models/User";

const select = () => {
  const ref = firebase.database().ref("/root/contacts/");
  let users: User[] = new Array();
  ref.on("value", snapshot => {
    if (snapshot.val()) {
      Object.keys(snapshot.val()).map(key => {
        users.push(snapshot.val()[key]);
      });
    }
  });

  return users;
};

const add = async (user: User) => {
  const ref = firebase.database().ref("/root/contacts/");
  await ref
    .push(user)
    .then(snapshot => {
      user.id = snapshot.key;
      update(user);
      console.log("User saved on firebase succesfully!");
    })
    .catch(() => {
      console.log("User could not be saved on firebase!");
    });
};
const update = async (user: User) => {
  const ref = firebase.database().ref("/root/contacts/" + user.id);
  await ref
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
};
const remove = async (user: User) => {
  const ref = firebase.database().ref("/root/contacts/" + user.id);
  ref.remove();
};
const getChildrenCount = () => {
  const ref = firebase.database().ref("/root/contacts/");
  let childrenCount: number;
  ref.once("value").then(snapshot => {
    childrenCount = snapshot.numChildren();
  });
  return childrenCount;
};

export { select, add, remove, update, getChildrenCount };
