// for sign up-pop up

var item = document.getElementById("removable");
var conti = document.getElementById("workspace");

function sign_up(){
 item.remove();
 document.getElementById("change_me").textContent = "Sign Up";
 conti.style.height ="700px";

 let changed_to_signup = document.createElement("div");
 changed_to_signup.style.height ="460px";

 let div1 = document.createElement("div");
 div1.textContent = "First Name:*";

 let div2 = document.createElement("div");
 let inp1 = document.createElement("input");
 inp1.setAttribute("id", "first_name");
 inp1.setAttribute("style", "width: 95%; border: 1px solid black; border-radius: 4px; padding: 8px;");
 div2.append(inp1);

 let div3 = document.createElement("div");
 div3.textContent = "Last Name:*";

 let div4 = document.createElement("div");
 let inp2 = document.createElement("input");
 inp2.setAttribute("id", "last_name");
 inp2.setAttribute("style", "width: 95%; border: 1px solid black; border-radius: 4px; padding: 8px;");
 div4.append(inp2);

 
 let div5 = document.createElement("div");
 div5.textContent = "Mobile Number:*";

 let div6 = document.createElement("div");
 let inp3 = document.createElement("input");
 inp3.setAttribute("id", "Phne_number");
 inp3.setAttribute("style", "width: 95%; border: 1px solid black; border-radius: 4px; padding: 8px;");
 div6.append(inp3);

 let div7 = document.createElement("div");
 div7.textContent = "Email Address:*";

 let div8 = document.createElement("div");
 let inp4 = document.createElement("input");
 inp4.setAttribute("id", "mail_up");
 inp4.setAttribute("style", "width: 95%; border: 1px solid black; border-radius: 4px; padding: 8px;");
 div8.append(inp4);

 let div9 = document.createElement("div");
 div9.textContent = "Password:*";

 let div10 = document.createElement("div");
 let inp5 = document.createElement("input");
 inp5.setAttribute("id", "pass_up");
 inp5.setAttribute("style", "width: 95%; border: 1px solid black; border-radius: 4px; padding: 8px;");
 div10.append(inp5);

 let div11 = document.createElement("div");
 div11.textContent = "Confirm your password:*";

 let div12 = document.createElement("div");
 let inp6 = document.createElement("input");
 inp6.setAttribute("id", "password_conf");
 inp6.setAttribute("style", "width: 95%; border: 1px solid black; border-radius: 4px; padding: 8px;");
 div12.append(inp6);


 let div13 = document.createElement("div");
 div13.setAttribute("style", " height:15px");
 let div14 = document.createElement("div");
 div14.setAttribute("style", "font-size:15px; height:15px");
 div14.textContent = "I wish to receive the newletter.";

 let div15 = document.createElement("div");
 div15.setAttribute("style", "font-size:12px; height:20px");
 let div16 = document.createElement("div");
 div16.setAttribute("style", " height:13px");
 let sub_btn = document.createElement("button");
 sub_btn.innerText = "Submit";
 sub_btn.setAttribute("id", "signup_submit");
 sub_btn.setAttribute("style", "margin: 0%; width: 100%; border: 1px solid black; border-radius: 3px; background-color:yellow; font-size:20px");
 div16.append(sub_btn);

 let div17 = document.createElement("div");
 div17.setAttribute("style", "font-size:14px; height:13px");
 let div18 = document.createElement("div");
 div18.setAttribute("style", "font-size:14px; height:13px");
 div18.setAttribute("style", "font-size:10px; padding: 0px 100px 0px 0px" );
 div18.textContent = "By creating an account, you agree to Fabindia's terms of use and privacy policy";

 changed_to_signup.append(div1,div2,div3,div4,div5,div6,div7,div8,div9,
   div10,div11,div12,div13,div14,div15,div16,div17,div18);

 let line = document.createElement("hr");

 let already_user = document.createElement("h2");
 already_user.setAttribute("style", "text-align: center; margin-top: 2%")
 already_user.textContent = "Already Have An Account?";

 let div_Signin = document.createElement("div");
 div_Signin.setAttribute("style", "width:80%; margin:auto; margin-top: 2%" );

 let already_btn = document.createElement("button");
 already_btn.setAttribute("id", "already_submit");
 already_btn.innerText = "Sign In";
 already_btn.setAttribute("style", "margin: 0%;border-radius: 0px; border: 1px solid black; background-color:white; font-size:23px");

 already_btn.onclick = function() {
   back();
 }
 div_Signin.append(already_btn);

 conti.append(changed_to_signup, line, already_user,div_Signin);

 }
 function back(){
   alert("hi");
 }