app.controller('TodoController', function (){
    var tc = this;
    tc.favoriteFoods = [{
        name: "pizza",
        price: 10,
        expires: Date.now()
    }];
    tc.apple = "I love Apples";
    
    tc.addFood = function(){
        tc.favoriteFoods.push(tc.food);
        tc.food = '';
    }
    
    tc.removeFood = function(index){
        tc.favoriteFoods.splice(index, 1)
    }
    
})

