(function(){
      var app = angular.module('store',[]);    

      app.controller('StoreController',function(){
          this.products = gems;
      });

       app.controller('PanelController',function(){
          this.tab = 1;
          
          this.setTab = function(tabNumber){
              this.tab=tabNumber;
          };

          this.isSet = function(checkTab){
              return this.tab === checkTab;
          };
      });

      var gems = [ 
          {
          name:'Dodecahedron Gem',
          price:2.95,
          description:'. . . ', 
          images:[
              {
                  full:'dodecahedron-01-full.jpg',
                  thumb:'dodecahedron-01-thumb.jpg'
              },    
              {
                  full:'dodecahedron-02-full.jpg',
                  thumb:'dodecahedron-02-thumb.jpg'
              }
          ],
          reviews:[
              {
                  stars:5,
                  body:"I Love Thid Product",
                  author: "joe@thomas.com"
              },
              {
                  stars:3,
                  body:"Can't Do It Moses?",
                  authos:"moses@cantdoit.com"
              }
          ],
          canPurchase:true,
          }, 
      {
          name:'Polygn',
          price:3.56,
          description:'. . .',
          canPurchase:true
      }];
})();
