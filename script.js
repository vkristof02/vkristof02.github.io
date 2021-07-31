console.log("Hello World")


let imagesData = [
    {   
        number:0,
        photo: "images/bike.jpg",
        title: 'Bike',
        description: 'A bicycle, also called a bike or cycle, is a human-powered or motor-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.',
    },
    { 
      number:1,
        photo: "images/box.jpg",
        title: 'Box',
        description: "Boxing is a combat sport in which two people, usually wearing protective gloves and other protective equipment such as hand wraps and mouthguards, throw punches at each other for a predetermined amount of time in a boxing ring.",
    },
        {   
      number:2,
        photo: "images/football.jpg",
        title: 'Football',
        description: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used.",
    },
    {   
      number:3,
        photo: "images/golf.jpg",
        title: 'Golf',
        description: "Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.",
    },
    
    {   
      number:4,
        photo: "images/swim.jpg",
        title: 'Swim',
        description: "Swimming is the self-propulsion of a person through water, or a liquid substance, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs and the body.",
    },
    {   
      number:5,
        photo: "images/tenis.jpg",
        title: 'Tennis',
        description: "Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. ",
    },
    
    {   
      number:6,
        photo: "images/handball.jpg",
        title: 'Handball',
        description: "Handball (also known as team handball, European handball or Olympic handball)[3] is a team sport in which two teams of seven players each (six outcourt players and a goalkeeper) pass a ball using their hands with the aim of throwing it into the goal of the other team.",
      },

    
]
console.log(imagesData.length);
/*
$('#photo').attr('src', imagesData[currentPhoto].photo);
  $('#photo-title').text(imagesData[currentPhoto].title);
  $('#photo-description').text(imagesData[currentPhoto].description);
 */
  
let currentPhoto = 0;


let loadPhoto = (photoNumber) => {
    
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description); 
  $(`.box-${currentPhoto}`).css("box-shadow"," 0 8px 8px -4px black");  
  $(` #box-${currentPhoto} > .triangle`).css("display","block");  
 
  }

  loadPhoto(currentPhoto);

  $('#right').click(() => {
    if(currentPhoto==(imagesData.length-1)){
      $(`.box-${currentPhoto}`).css("box-shadow","  0 8px 8px -8px black"); 
      $(`#box-${currentPhoto} > .triangle`).css("display","none");  
 
      currentPhoto=-1;
    }
    if(currentPhoto < (imagesData.length-1)) { 
      $(`.box-${currentPhoto}`).css("box-shadow","  0 8px 8px -8px black"); 
      $(`#box-${currentPhoto} > .triangle`).css("display","none");  

        currentPhoto++;
      }    
    loadPhoto(currentPhoto);  
   $('#clicked').text(currentPhoto);
  });


  $('#left').click((evt) => {    
    if(currentPhoto==0){
      $(`.box-${currentPhoto}`).css("box-shadow","  0 8px 8px -8px black"); 
      $(`#box-${currentPhoto} > .triangle`).css("display","none");  
 
      currentPhoto=imagesData.length;
    }
    
    if(currentPhoto > 0 ) {
      $(`.box-${currentPhoto}`).css("box-shadow","  0 8px 8px -8px black"); 
      $(` #box-${currentPhoto} > .triangle`).css("display","none");  
 
      currentPhoto--;       
      }     
     
    loadPhoto(currentPhoto);
    $('#clicked').text(currentPhoto);

  });

  
//console.log(imagesData[1].photo);
  
/*
  $("#thumbnail").append("<div><img id='photo-current'src='images/bike.jpg'></div>");
  $("#thumbnail").append("<div><img id='photo-else'src='images/box.jpg'></div>");
*/

Object.entries(imagesData).forEach(([item,index]) => {

    $('#thumbnail').append(`<div class="thumbnail-boxes" id=box-${(imagesData[item].number)}>
    <img class="square box-${(imagesData[item].number)}" data-index="${(imagesData[item].number)}"
     id='photo-else'src="${imagesData[item].photo}"><span class="triangle"></span>
     <div class="title-over">${(imagesData[item].title)}</div>
     <div class="title-triangle"></div>
     </div>`);
     
    
  });
/*

<div class="thumbnail-flex"><div class="thumbnail-title" id="title-${(imagesData[item].number)}">
<div class="title-over">${imagesData[item].title}</div><div class="thumbnail-triangle"></div></div>

  $(`.box-${currentPhoto}`).hover(
    
    $(`#title-${(imagesData[item].number)}`).css("display","block")
    );

    $(`.box-0`).hover((event) =>{
    $(`#title-0`).show();
});
*/


    


  $('.square').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    $(`.box-${currentPhoto}`).css("box-shadow","  0 8px 8px -8px black"); 
    $(`#box-${currentPhoto} > .triangle`).css("display","none");  
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    //$('#clicked').text([indexClicked]);
    console.log(indexClicked)
    currentPhoto=indexClicked;
    loadPhoto(currentPhoto);
    $('#clicked').text(currentPhoto);

  });

  $('.box-0').css("box-shadow"," 0 8px 8px -4px black"); 
  $(`#box-0 > .triangle`).css("display","block");  
  
  
/*
$(`.thumbnail-flex`).hover(    
  $(this).css("display","block")
  );
*/

/*
$(`.box-${imagesData.number}`).hover(    
  $(`#title-${imagesData.number}`).css("display","block")
  );
*/
  /*

  $(".box-0").hover(
    function() {
      $(`.thumbnail-title`).css("display","block")
    });
    */
    //$('.triangle').hide();

  
    