/*---------Navigation link active style underline on when clicking----------*/

 const navLinks = document.querySelectorAll('#nav-link');
 
 const currentUrl = window.location.pathname;


 navLinks.forEach(link => {
   
   if (link.href.includes(`${currentUrl}`)) {
     link.classList.add('active');
   }
 });



/*--------for the single product when clicking on an image the big image change----*/


 let smalling = document.getElementsByClassName('small-img')
 let MainImg=document.getElementById('MainImg');
 for (let indice = 0 ; indice<smalling.length;indice++){ 
 smalling[indice].addEventListener('click',function(){
  
     MainImg.src= smalling[indice].src

 })
 }









/**------------------------------------------------add to cart (number increase) --------------------------- */
    function addCartdCounter(){

        let counter = document.getElementById('cart-after');
        const currentCount = parseInt(counter.getAttribute('data-text'));
        counter.setAttribute('data-text', currentCount + 1);

  }

/*----------------on click image to single product page------------------- */



let proClicked = document.querySelectorAll('.pro')



for (let indiceProduct = 0;indiceProduct<proClicked.length;indiceProduct++){

  proClicked[indiceProduct].addEventListener('click',function(){
    

    let otherWindow = window.open('sproduct.html')

    otherWindow.addEventListener('load',function(){
    let children = proClicked[indiceProduct].children
    
    let imge = children[0]
    let des = children[1]
    let desChild = des.children
    let productName= desChild[1].innerHTML
    let productPrice = desChild[3].innerHTML
    let priceDetails = otherWindow.document.getElementById('priceDetails')
    let htmlProductDetails = otherWindow.document.getElementById('htmlProductDetails')
    let img = otherWindow.document.getElementById('MainImg');
    let smallImg1 = otherWindow.document.getElementById('small-img1')
    let smallImg2 = otherWindow.document.getElementById('small-img2')
    let smallImg3 = otherWindow.document.getElementById('small-img3')
    let smallImg4 = otherWindow.document.getElementById('small-img4')


    let srcT = imge.src
    let fileName = srcT.split('/').pop();
    let newsrcT1 = fileName.split('');
    let newsrcT2 = fileName.split('');
    let newsrcT3 = fileName.split('');
    let newsrcT4 = fileName.split('');

  
     newsrcT1.splice(newsrcT1.length-5,0,'1','-','s')
     let newsrcTadd1= newsrcT1.join('')
     newsrcT2.splice(newsrcT2.length-5,0,'2','-','s')
     let newsrcTadd2= newsrcT2.join('')
     newsrcT3.splice(newsrcT3.length-5,0,'3','-','s')
     let newsrcTadd3= newsrcT3.join('')
     newsrcT4.splice(newsrcT4.length-5,0,'4','-','s')
     let newsrcTadd4= newsrcT4.join('')

     img.src = srcT
     smallImg1.src = `../images/all product/${newsrcTadd1}`
     smallImg2.src = `../images/all product/${newsrcTadd2}`
     smallImg3.src = `../images/all product/${newsrcTadd3}`
     smallImg4.src = `../images/all product/${newsrcTadd4}`
     priceDetails.innerHTML= productPrice
     htmlProductDetails.innerHTML =productName
  })
    
  })

}
