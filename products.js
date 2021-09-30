window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


  let productdata = [
    {
      name: "Henley Shirt",
      price: "M.R.P. ₹2790.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v334622535619501789/products/10702336BU.f.230921.JPG&height=475&width=475",
      category:"men",
      cost :2790

    },
    {
      name: "Cotton trouser",
      price: "M.R.P. ₹2190.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8534366497497831468/products/10679252BU.b.020421.jpg&height=475&width=475",
      category:"men",
      cost:2190
    },
    {
      name: "Nehru jacket",
      price: "M.R.P. ₹1490.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8235932954286286566/products/10675304BK.f.20.02.21.jpg&height=475&width=475",
      category:"men",
      cost:1490
    },
    {
      name: "Cotton regular salwar",
      price: "M.R.P. ₹490.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5979244302314366052/products/10584859WH.f.14032019.jpg&height=475&width=475",
      category:"men",
      cost:490
    },
    {
      name: "Viscose slimfit kurta",
      price: "M.R.P. ₹790.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8213431944360027281/products/10697663GD.f.230921.JPG&height=475&width=475",
      category:"men",
      cost:790
    },

    {
      name: "Cotton silk kurta",
      price: "M.R.P. ₹3490.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1337066270086581501/products/10701109BU.f.25.09.21.jpg&height=475&width=475",
      category:"women",
      cost:3490
    },
    {
      name: "Silk Dupta",
      price: "M.R.P. ₹1490.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6052351309828903515/products/10700958BU.f.23.09.21.JPG&height=475&width=475",
      category:"women",
      cost:1490
    },
    {
      name: "Cotton silk kurta red",
      price: "M.R.P. ₹3790.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6311478562554356972/products/10668524WN.f.041020.jpg&height=475&width=475",
      category:"women",
      cost:3790
    },
    {
      name: "Cotton silk printed kurta",
      price: "M.R.P. ₹2900.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5068411366971496723/products/10634946BG.f.080212.jpg&height=475&width=475",
      category:"women",
      cost:2900
    },
    {
      name: " Woven jamdani sari",
      price: "M.R.P. ₹5900.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8581662257803837945/products/10702075GR.f.23.09.21.JPG&height=475&width=475",
      category:"women",
      cost:5900
    },
    {
      name: "Global Bosho coffee-mug",
      price: "M.R.P. ₹490.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6328376165428136595/products/10693032BU.f.270721.jpg&height=475&width=475",
      category:"Decorative",
      cost:490
    },
    {
      name: "Jeev cane wood Tripod",
      price: "M.R.P. ₹9490.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v9114850615711217690/products/10674238NT.f.240321.jpg&height=475&width=475",
      category:"Decorative",
      cost:9490
    },
    {
      name: "Livna Dinner Plate",
      price: "M.R.P. ₹690.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4599708017191526556/products/10694014WH.f.270721.jpg&height=475&width=475",
      category:"Decorative",
      cost:690
    },
    {
      name: "Patram platter Large",
      price: "M.R.P. ₹5690.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8540065389620526911/products/10676348GR.f.290421.jpg&height=475&width=475",
      category:"Decorative",
      cost:5690
    },
    {
      name: "Kapish T-lite holder",
      price: "M.R.P. ₹590.00",
      img: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7959643868958455864/products/10674200BR.f.220221.jpg&height=475&width=475",
      category:"Decorative",
      cost:590
    },


  ];


  if(localStorage.getItem('productinfo') === null){
    localStorage.setItem('productinfo',JSON.stringify([]));
  }

 function save(){
  let arr = JSON.parse(localStorage.getItem("productinfo"));
  arr = [];
   for(var i=0;i<productdata.length;i++){

   
    arr.push(productdata[i]);

}
   localStorage.setItem("productinfo",  JSON.stringify(arr));
 }
 save();




 let parent = document.getElementById("products");
 function showProducts(){
 
 parent.innerHTML = null; 
  productdata.forEach(function (product){
  
   
    
        let div = document.createElement('div');
      
        let img = document.createElement('img');
        
        img.src = product.img;
        
        let product_price = document.createElement('p');
        product_price.setAttribute('class','mrpred');
        product_price.textContent = product.price;
    
        let product_name = document.createElement('p');
    
        product_name.textContent = product.name;
    
        let wishlist = document.createElement('img');
  
        wishlist.src ="file:///C:/Users/hgaut/Documents/GitHub/FW12_Fabindia_Project/image/icon-heart-black.png" ;
  
        wishlist.setAttribute('id','wishlist');
  
        div.onclick = function(){
          visible(product);
        }
        
        div.append(wishlist,img, product_name, product_price);
    
        parent.append(div);
     
       
    
    
   });
         
     }
     showProducts();
    
     
function sort1(){

  parent.innerHTML = null; 
  productdata.forEach(function (product){
  
   if(Number(product.cost <= 1500)){
     
    
        let div = document.createElement('div');
        
        let img = document.createElement('img');
        
        img.src = product.img;
        
        let product_price = document.createElement('p');
    
        product_price.textContent = product.price;
    
        let product_name = document.createElement('p');
    
        product_name.textContent = product.name;
        
    
        let wishlist = document.createElement('img');
  
        wishlist.src ="file:///C:/Users/hgaut/Documents/GitHub/FW12_Fabindia_Project/image/icon-heart-black.png" ;
  
        wishlist.setAttribute('id','wishlist');

        div.onclick = function(){
          visible(product);
        }
  

        div.append(wishlist,img, product_name, product_price);
    
        parent.append(div);
     
       
    
    
  }});
 
   

}

function sort2(){

  parent.innerHTML = null; 
  productdata.forEach(function (product){
  
   if(Number(product.cost > 1500 )){
    
    
        let div = document.createElement('div');
        
        let img = document.createElement('img');
        
        img.src = product.img;
        
        let product_price = document.createElement('p');
    
        product_price.textContent = product.price;
    
        let product_name = document.createElement('p');
    
        product_name.textContent = product.name;
    
        let wishlist = document.createElement('img');
  
        wishlist.src ="file:///C:/Users/hgaut/Documents/GitHub/FW12_Fabindia_Project/image/icon-heart-black.png" ;
  
        wishlist.setAttribute('id','wishlist');

        div.onclick = function(){
          visible(product);
        }
  
       div.append(wishlist,img, product_name, product_price);
    
        parent.append(div);
     
     }});
 
   }

if(localStorage.getItem('visible') === null){
  localStorage.setItem('visible',JSON.stringify([]));
}
   
  function visible(pro){
    let take = JSON.parse(localStorage.getItem('visible'));

   take=[];

   take.push(pro);
   localStorage.setItem('visible',JSON.stringify(take));
   
   window.location.href = "bigview.html";

  }
