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

export const postStatus = (object) => {
  addDoc(dbRef, object)
    .then(() => {
      toast.success("Document has been added successfully");
    })
    .catch((err) => {
      console.log("We have found some error");
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
