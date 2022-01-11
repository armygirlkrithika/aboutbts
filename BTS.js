var images=
["tenor (1).gif",
 "https://i.pinimg.com/originals/ae/01/bc/ae01bc757d8f8fe6ec3962912552c182.jpg",
 "https://i.pinimg.com/originals/e3/fa/cb/e3facb2c23c3720e73d70dc22e533174.jpg",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Park_Ji-min_at_Aladdin_fansign_in_September_2017_02.jpg/1200px-Park_Ji-min_at_Aladdin_fansign_in_September_2017_02.jpg",
 "https://th.bing.com/th/id/R.482964e2659a7e314977a8f61b995c08?rik=03W3fT9jct%2f00A&riu=http%3a%2f%2fpm1.narvii.com%2f6933%2fc401822d507a2c5f662ee1b40a21e5a05b5fe806r1-1366-1909v2_uhq.jpg&ehk=sN4utbqLoC2QA32MCL6bzP4cb24%2btgJkc8fBAgTffSo%3d&risl=&pid=ImgRaw",
 "https://th.bing.com/th/id/OIP.WUq5Wd1tsd3AgbYDmsWZnAHaKW?pid=ImgDet&rs=1",
 "https://lh3.googleusercontent.com/8v4rBUXYNHyoG_67eHpWHcrspVFYRZl_dYgeEX0q3FuO1NLXiYVB0vQXzYDtNX2P9VSW22eZyKfCLdP4HmjZgvloSPU5WUH9lw0=w960-rj-nu-e365",
 "https://th.bing.com/th/id/OIP.CHOndJZE9uAMNOlmiDrFNQDMEy?pid=ImgDet&rs=1"
];
var names=[
    "BTS",
    "Jungkook",
    "V",
    "Jimin",
    "RM",
    "j-hope",
    "Suga",
    "Jin"
]
var i = 0;
function prev(){
    i-=1;
       if(i == 0 ){
           i = 7
       }
       document.getElementById("photos").src = images[i];
       document.getElementById("Names").innerHTML = names[i];
   }
function change(){
    i++;
    
    var no_of_members = 7;
    if(i > no_of_members){
        i = 0;
    }
 
    

    
    var update_image = images[i];
    var update_name = names[i];

    document.getElementById("photos").src = update_image;
    document.getElementById("Names").innerHTML = update_name;
}
