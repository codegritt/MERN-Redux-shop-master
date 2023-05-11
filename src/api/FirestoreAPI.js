import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

// let postsRef = collection(firestore, "posts");
// let userRef = collection(firestore, "users");
// let likeRef = collection(firestore, "likes");
// let commentsRef = collection(firestore, "comments");
// let connectionRef = collection(firestore, "connections");

let dbRef = collection(firestore, "posts");

export const postStatus = (status) => {
  let object = {
    status: status,
  };
  addDoc(dbRef, object)
    .then((res) => {
      console.log("Document has been added successfully");
    })
    .catch((err) => {
      console.log("We have found some error");
    });
};
