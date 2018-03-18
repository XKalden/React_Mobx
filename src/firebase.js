import { initializeApp } from "firebase";

// configure the firebase app
const app = initializeApp({
  // apiKey: "AIzaSyCvBuiA7eSnkZkU7wSTgG77rgwSgR92MVY",
  // databaseURL: "https://abnormal-weather.firebaseio.com",
  // projectId: "abnormal-weather"
  apiKey: "AIzaSyDgoy7IdPx3K4sWpzwpGqEVOProbTmajrk",
  authDomain: "test-93fe7.firebaseapp.com",
  databaseURL: "https://test-93fe7.firebaseio.com",
  projectId: "test-93fe7",
  storageBucket: "",
  messagingSenderId: "106158318602"
});

// get reference to the firebase database
const database = app.database();

// export reference to database
export default database;
