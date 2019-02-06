$(document).ready(function(){
    $('.info-image-wrp').doAnim({
    'animation' : 'bounceInDown',
    'duration' : 2
     });
     $('.hello-text').doAnim({
     'animation' : 'fadeInLeft',
     'duration' : 2
      });
      $('.developer').doAnim({
      'animation' : 'fadeInRight',
      'duration' : 2
       });
       // tag canvas
       if(!$('#myCanvas').tagcanvas({
         textColour: '#08fdd8',
         outlineColour: '#12242a',
         reverse: true,
         depth: 0.8,
         maxSpeed: 0.10
       },'tags')) {
         // something went wrong, hide the canvas container
         $('#myCanvasContainer').hide();
       }
       $(".send-btn").click(function(){
        $(".success_msg").show();
      });
});
