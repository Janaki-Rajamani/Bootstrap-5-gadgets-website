var item=0;
var expand=0;
var home=1;
var fav=0;
function changeCss () 
{

  const section1 = document.querySelector('.navbar')
  var svalue=window.scrollY;
  console.log("in if colour"+window.scrollY);
if(svalue>350 && svalue<430)
{
	section1.style.backgroundImage='linear-gradiant(#ffffff,#ffc107)';
	
}
 else
 {if(window.scrollY > 430) 
 {
 section1.style.backgroundColor='#ffc107';
 
 }
else
{section1.style.backgroundColor='rgba(255,255,255,0)';
 } }
 if(home!=1){
//console.log("out"+window.scrollY);
console.log("scroll"+window.scrollY);
if(window.scrollY>1200&&(expand!=1))
{
		//console.log("in if"+window.scrollY);
	
	document.querySelector('.imagegallery').style.position="absolute";	
	document.querySelector('.adv').style.visibility="visible";
	console.log("in 1"+document.querySelector('.adv').style.visibility);
}
if((window.scrollY<2420&&(expand==1))||window.scrollY<1200)
	
{
document.querySelector('.imagegallery').style.position="fixed";
document.querySelector('.adv').style.visibility="hidden";
console.log("in 2"+document.querySelector('.adv').style.visibility);
}
if(window.scrollY>2100)

{document.querySelector('.imagegallery').style.position="absolute";

document.querySelector('.adv').style.visibility="visible";

}
}
}


function clearCart()
{
	document.getElementById("cartitem").style.display="none";
	sessionStorage.setItem("item",0);
	item=0;
	document.getElementById("cartlist").innerHTML="cart is empty!!";
	
	
}

function showCart()
{
	item=sessionStorage.getItem("item", this.item.toString());
	
	if(item!=null&&item!="0")
		
		{document.getElementById("cartitem").innerHTML=item;
		document.getElementById("cartitem").style.display="inline";
		}
	else
	{document.getElementById("cartitem").style.display="none";}
}


function setMax()
{
	  var x = document.getElementById("priceRange").value;
  document.getElementById("maxlimit").innerHTML = x;
}
function addCart()
{
	item++;
	document.getElementById("cartitem").innerHTML=item;
	sessionStorage.setItem("item", this.item.toString());
	document.getElementById("cartitem").style.display="inline";
	
}

function displayCart()
{
	var item=sessionStorage.getItem("item");
	if(item==0||item==null)
	{document.getElementById("cartlist").innerHTML="cart is empty!!";}
else{
document.getElementById("cartlist").innerHTML="There are "+item+" item(s)in your cart";}
}




function changeImage(event) 
        {
            event = event ;//|| window.event;
            var targetElement = event.target ;//|| event.srcElement;

            if(targetElement.tagName == "IMG")
            {
                document.getElementById("imgView").src = targetElement.getAttribute("src");    
            }
        }

function showdetails()
{
	document.querySelector('.card-body').style.height="70%";
	document.querySelector('.card-body').style.overflow="visible";
document.getElementById("readmore").innerHTML = "";
document.querySelector('.procontainer').style.minHeight="450vh";
expand=1;
//document.querySelector('.imagegallery').style.position="absolute";


}
window.addEventListener("scroll", changeCss);

function setScroll()
{
	
	//window.location.hash='nav1';
	expand=0;
	document.querySelector('.imagegallery').style.position="fixed"
	document.querySelector('.card-body').style.height="540px;";
	document.querySelector('.card-body').style.overflow="hidden";
document.getElementById("readmore").innerHTML = "Read more";

window.scrollTo(0,0);
console.log("scroll"+scrollY);
home=0;
}
function showHome()
{home=1;}

function addfav()
{
	var icon=document.getElementById(event.target.id);
	
	console.log(icon);
	
	if((icon.src).includes("fav2"))
	{icon.src="images/fav1.png";
	fav++;}
	else
	{icon.src="images/fav2.png";
	fav--;
	}
	
	document.getElementById("favitem").innerHTML=fav;
	
	sessionStorage.setItem("fav", this.fav.toString());
	
	
	
	if(fav<=0||fav==null)
	{	fav=0;
	document.getElementById("favitem").style.display="none";
	}
	else
	{document.getElementById("favitem").style.display="inline"}
	

	
}

function showFav()
{
	fav=sessionStorage.getItem("fav");
	console.log(fav);
	if(fav!=null&&fav!="0")
		
		{document.getElementById("favitem").innerHTML=fav;
		document.getElementById("favitem").style.display="inline";
		}
	else
	{document.getElementById("favitem").style.display="none";}
}



function clearFav()
{
	document.getElementById("favitem").style.display="none";
	sessionStorage.setItem("fav",0);
	fav=0;
	document.getElementById("favlist").innerHTML="list is empty!!";
	
}

function displayfav()
{
	var fav=sessionStorage.getItem("fav");
	
	if(fav==0||fav==null)
	{document.getElementById("favlist").innerHTML="list is empty!!";}
else{
document.getElementById("favlist").innerHTML="There are "+fav+" item(s)in your list";}

}