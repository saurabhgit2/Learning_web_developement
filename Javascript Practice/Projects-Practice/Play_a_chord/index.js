const playCchord=document.getElementById("btnforC");
const playDchord=document.getElementById("btnforD");
const cChord =document.getElementById("cChord");
const dChord =document.getElementById("dChord");
const strumDC=document.getElementById("strumDC");
function playboth(){
    const cChord =document.getElementById("cChord");
    const dChord =document.getElementById("dChord");
    cChord.play();
    cChord.addEventListener('ended', function(){dChord.play()});
};
function playChord(){
    cChord.play();
};
function play_chord(){
    dChord.play();
};
playCchord.addEventListener('click',playChord);
playDchord.addEventListener('click',play_chord);

strumDC.addEventListener('click',playboth);