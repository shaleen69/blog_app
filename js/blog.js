import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
    apiKey: "AIzaSyBJWxhPNJqNM3eGJcmMq9W-flnpKYM6UyA",
  authDomain: "fireblog-77de9.firebaseapp.com",
  databaseURL: "https://fireblog-77de9-default-rtdb.firebaseio.com",
  projectId: "fireblog-77de9",
  storageBucket: "fireblog-77de9.appspot.com",
  messagingSenderId: "347077976292",
  appId: "1:347077976292:web:cd9214795f60c68af00cf1"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app)




function getPostData (){
    const user_ref = ref(db,'post/');
    get(user_ref).then((snapshot)=>{
        const data = snapshot.val()
       
       let html = "";
       const table = document.querySelector('.main')
        for (const key in data){
          const{title,post_content} = data[key]
  
          console.log(post_content);
         
         
           html+= `
           <div class="post"> 
               <h2>${title}</h2>
               <p>
                 ${post_content}
               </p>
           </div>
          `
  
        }
  table.innerHTML =html
  
    })
  }
  
  getPostData()
  
