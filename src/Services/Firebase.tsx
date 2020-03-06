import { firebase } from "../Services/Configs/FirebaseConfig";
import User from "../Models/User";

const select = async () => {
  const ref = firebase.database().ref("/root/contacts/");
  let users: User[] = new Array();
  await ref.once("value", snapshot => {
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
    .then(async snapshot => {
      user.id = snapshot.key;
      await update(user);
      console.log("User saved on firebase succesfully!");
    })
    .catch(() => {
      console.log("User could not be saved on firebase!");
    });
  return user;
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
    })
    .catch(() => {
      console.log("User could not be updated on firebase!");
    });
  return user;
};
const remove = async (user: User) => {
  if (user.id === null || user.id === undefined) {
    console.log("Contact could not be deleted.");
    return;
  }
  const ref = firebase.database().ref("/root/contacts/" + user.id);
  await ref
    .remove()
    .then(() => {
      console.log("Contact deleted successfully.");
    })
    .catch(error => {
      console.log("Contact could not be deleted.");
    });
  return user;
};
const getChildrenCount = async () => {
  const ref = firebase.database().ref("/root/contacts/");
  let childrenCount: number;
  await ref.once("value").then(snapshot => {
    childrenCount = snapshot.numChildren();
  });
  return childrenCount;
};

export { select, add, remove, update, getChildrenCount };
