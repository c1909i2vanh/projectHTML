
	var mainapp=angular.module("myApp",['ngRoute']);
		mainapp.controller("HomeCtrl",function($scope){


		})
		mainapp.config(function($routeProvider){
			$routeProvider
			.when("/",{
				templateUrl:"page/gallery.html",
				controller:'GalleryCtrl'		
			})
			.when("/menu.html",{
				templateUrl:"page/menu2.html"
			})
			.when("/about.html",{
				templateUrl:"page/about.html",
				controller:'GalleryCtrl'
			})
			.when("/detailsProduct/:id",{
				templateUrl:"page/detailsProduct.html",
				controller:"ProductCtrl"
			})
		})


	mainapp.controller("GalleryCtrl",function($scope,$http){

		if(localStorage.getItem("carts")){
			$scope.carts=JSON.parse(localStorage.getItem("carts"));
		}else{
			$scope.carts=[];
		}
		



 	

		 	$http.get("data/product.json")
		 	
		 	.then(function(res){
		 		
		 		$scope.list=res.data;
		 		console.log($routeParams.id);


		 	})
		 	.catch(function(res){

		 	})
		 	$scope.addCarts=function(i){
			 		 var CartItem={
			 		 	product:i,
			 		 	quantity:1
			 		 	
			 		 }
			 			// $scope.product=i;
			 		
			 		if($scope.carts.length>0){
			 			 var check=$scope.carts.filter(function(x){
			 				if(x.product.Id==i.Id){
			 					return x;
			 				}

			 			});
			 			 if(check.length>0){
			 			 	$scope.carts=$scope.carts.map(function(x){
			 			 		if(x.product.Id==i.Id){
			 			 			x.quantity+=1;
			 			 		}
			 			 		return x;
			 			 	})

			 			 }
			 			 else{
			 			 	$scope.carts.push(CartItem);
			 			 }
			 		}
			 		else{
			 			$scope.carts.push(CartItem);
			 			}
			 		
			 		
			 		// console.log($scope.carts);	
			 		// console.log(CartItem.product.Name);	
			 		var cartJson=JSON.stringify($scope.carts);
			 		localStorage.setItem("carts",cartJson);

			 	}
		 	$scope.remove=function(id){
		 		
		 		
		 		 $scope.carts=$scope.carts.filter(function(el){
		 		 	console.log(el.id);	
		 		 	if(el.product.Id!=id){

		 				 return el;
		 			 }

		 		 });

		 	}
		 	

		 	
		 	$scope.details=function(items){
		 		$("#modal-gallery").modal("show");
		 		$scope.Info=items;
		 	}
		 	$scope.showCart=function($scope){
		 		$("#modal-Cart").modal("show");
		 	}

	})
	mainapp.controller("ProductCtrl",function($scope,$http,$routeParams){
	 	$scope.productId=$routeParams.id;
	 	$http.get("data/product.json")
	 	.then(function(res){
	 		
	 			console.log(res);
	 		console.log($routeParams.id);
	 		$scope.product=res.data.filter(function(y){
	 			if(y.Id==$scope.productId){
	 				return y;
	 			}
	 		})[0];
	 		console.log(x.Id);
	 		

	 	})

	 	.catch(function(res){

	 	})
	})

/*[ Fixed Header ]
===========================================================*/
var header = $('header');
var logo = $(header).find('.logo img');
var linkLogo1 = $(logo).attr('src');
var linkLogo2 = $(logo).data('logofixed');

$(function(){
	$('.btn-back-to-top').hide();
	$(window).on('scroll',function(){
		if($(this).scrollTop() > 100 && $(this).width() > 992) {
			$(logo).attr('src',linkLogo2);
			 //$(header).addClass('header-fixed');
			 $('.btn-back-to-top').fadeIn('slow');
			}
			else {
			 //$(header).removeClass('header-fixed');
			 $(logo).attr('src',linkLogo1);
			 $('.btn-back-to-top').fadeOut('slow');
			}


		});
	$(".owl-index-banner").owlCarousel({
		items: 1,
		nav:true,
		autoplay:true,
		dots:false,
		loop:true,
		navText : ['<i class="fa fa-angle-left"></i> ','<i class="fa fa-angle-right"></i>']
	}

	);
	


})

//button click back to top	
$(function(){
	$('.btn-back-to-top').click(function(){
		$('body,html').animate({
			scrollTop:0
		},1000);
	});
})
 // Showside bar
 // -------------------------------------------------

 $(function(){
 	
 	var showSide=$('.btn-show-sidebar');
 	var aside=$('aside');
 	var hideSide=$('.btn-hide-sidebar');
 	var ovlaySidebar=$('.overlay');
 	$(showSide).click(function(){
 		$(aside).addClass('show-sidebar');
 		$(ovlaySidebar).addClass("show-over-lay");

 	})
 	$(hideSide).click(function(){
 		$(aside).removeClass('show-sidebar');
 		$(ovlaySidebar).removeClass("show-over-lay");

 	})
 	$(ovlaySidebar).click(function(){
 		$(aside).removeClass('show-sidebar');
 		$(ovlaySidebar).removeClass("show-over-lay");

 	})


 })
 // Validate form
 $(function(){
 	var res_Vt=$("#btn_reserVt");
 	var res_name_ip=$('#resVt_name');
 	var res_phone_ip=$('#resVt_phone');
 	var res_email_ip=$('#resVt_email');
 	var err_res_name=$('#err_res_name');
 	var err_res_phone=$('#err_res_phone');
 	var err_res_email=$('#err_res_email');
 	$(res_Vt).click(function(){
 		
 		err_res_name.val()== res_name_ip =="" ? "Bạn nhập tên" : alert('aa')
 		
 	})
 })
