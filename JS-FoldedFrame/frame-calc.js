//input section
const $button = document.querySelector("#Enter");
const $fWidth = document.querySelector("#faceWidth");
const fHeight = document.querySelector("#faceHeight");
const brdThick = document.querySelector("#thickness");
const fDepth = document.querySelector("#depth");
const fBase = document.querySelector("#base");
const baseText = document.querySelectorAll("#text");
const scale = document.getElementById("scale");
const viewScale = document.querySelector(".viewScale");
const dims = document.querySelector(".dims");

//Fold Attribute Area where box illustration is drawn
const foldAttrib = document.querySelector(".foldAttrib");
// Blank Div Illustration top section
// @Bloom: Anything selecting an id means there is only ONE thing, no need to use
// .querySelectorAll(), use .querySelector()
const frameDepthHoriz = document.querySelectorAll("#frameDepthHoriz");
const frameBaseHoriz = document.querySelectorAll("#frameBaseHoriz");
const frameReturnHoriz = document.querySelectorAll("#frameReturnHoriz");
const frameTapeHoriz = document.querySelectorAll("#frameTapeHoriz");
// Blank Div Illustration middle section
const face = document.getElementById("face");
const frameDepth = document.querySelectorAll("#frameDepth");
const frameBase = document.querySelectorAll("#frameBase");
const frameReturn = document.querySelectorAll("#frameReturn");
const frameTape = document.querySelectorAll("#frameTape");
// Blank Div Illustration Bottom section
const frameDepthHorizBtm = document.querySelectorAll("#frameDepthHorizBtm");
const frameBaseHorizBtm = document.querySelectorAll("#frameBaseHorizBtm");
const frameReturnHorizBtm = document.querySelectorAll("#frameReturnHorizBtm");
const frameTapeHorizBtm = document.querySelectorAll("#frameTapeHorizBtm");

function calculate() {
  viewScale.innerText = `${scale.value / 10}x`;
  //top Horiz Tape
  frameTapeHoriz[0].style.height =
    fBase.value * scale.value - brdThick.value * scale.value + "px";
  frameTapeHoriz[0].style.width =
    $fWidth.value * scale.value - 2 * (fBase.value * scale.value) + "px";
  frameTapeHoriz[0].style.margin = fBase.value * scale.value;
  frameTapeHoriz[0].innerText = `${fBase.value - brdThick.value}"`;
  //Top Horiz Return
  frameReturnHoriz[0].style.height =
    fDepth.value * scale.value - brdThick.value * scale.value + "px";
  frameReturnHoriz[0].style.width =
    $fWidth.value * scale.value - 2 * (fBase.value * scale.value) + "px";
  frameReturnHoriz[0].style.margin = fBase.value * scale.value;
  frameReturnHoriz[0].innerText = `${fDepth.value - brdThick.value}"`;
  //Top Horiz Base
  frameBaseHoriz[0].style.height = 0;
  frameBaseHoriz[0].style.width = $fWidth.value * scale.value + "px";
  frameBaseHoriz[0].style.borderRight =
    fBase.value * scale.value + "px solid transparent";
  frameBaseHoriz[0].style.borderLeft =
    fBase.value * scale.value + "px solid transparent";
  frameBaseHoriz[0].style.borderBottom =
    fBase.value * scale.value + "px solid var(--secondary-color)";

  //Top Horiz Depth
  frameDepthHoriz[0].style.height = fDepth.value * scale.value + "px";
  frameDepthHoriz[0].style.width = $fWidth.value * scale.value + "px";
  frameDepthHoriz[0].innerText = `${fDepth.value}"`;
  //Face
  face.style.height = fHeight.value * scale.value + "px";
  face.style.width = $fWidth.value * scale.value + "px";
  face.innerText = `${$fWidth.value}" w x ${fHeight.value}" h`;
  //Right and Left Depth
  for (let i = 0; i < frameDepth.length; i++) {
    frameDepth[i].style.height = fHeight.value * scale.value + "px";
    frameDepth[i].style.width = fDepth.value * scale.value + "px";
    frameDepth[i].innerText = `${fDepth.value}"`;
  }
  // @Bloom: possibly something like this:
  // $frameDepth.forEach($frame => {
  //     $frame.style.height = fHeight.value * scale.value +'px';
  //     $frame.style.width = fDepth.value * scale.value +'px';
  //     $frame.innerText = `${fDepth.value}"`
  // })

  //Left Base
  // @bloom: just call this #frame-base-left
  frameBase[0].style.height = fHeight.value * scale.value + "px";
  frameBase[0].style.width = 0;
  frameBase[0].style.borderRight =
    fBase.value * scale.value + "px solid var(--secondary-color)";
  frameBase[0].style.borderTop =
    fBase.value * scale.value + "px solid transparent";
  frameBase[0].style.borderBottom =
    fBase.value * scale.value + "px solid transparent";
  baseText[2].innerText = `${fBase.value}"`;

  //Right Base
  // @bloom: just call this #frame-base-right
  frameBase[1].style.height = fHeight.value * scale.value + "px";
  frameBase[1].style.width = 0;
  frameBase[1].style.borderLeft =
    fBase.value * scale.value + "px solid var(--secondary-color)";
  frameBase[1].style.borderTop =
    fBase.value * scale.value + "px solid transparent";
  frameBase[1].style.borderBottom =
    fBase.value * scale.value + "px solid transparent";
  for (let e = 0; e < frameDepth.length; e++) {
    baseText[e].innerText = `${fBase.value}"`;
  }
  //Right and Left Return
  for (let x = 0; x < frameReturn.length; x++) {
    frameReturn[x].style.height =
      fHeight.value * scale.value - 2 * (fBase.value * scale.value) + "px";
    frameReturn[x].style.width =
      fDepth.value * scale.value - brdThick.value * scale.value + "px";
    frameReturn[x].style.margin = fBase.value * scale.value;
    frameReturn[x].innerText = `${fDepth.value - brdThick.value}"`;
  }
  //Right and Left Tape
  for (let x = 0; x < frameTape.length; x++) {
    frameTape[x].style.height =
      fHeight.value * scale.value - 2 * (fBase.value * scale.value) + "px";
    frameTape[x].style.width =
      fBase.value * scale.value - brdThick.value * scale.value + "px";
    frameTape[x].style.margin = fBase.value * scale.value;
    frameTape[x].innerText = `${fBase.value - brdThick.value}"`;
  }
  //Bottom Horiz Base
  frameBaseHorizBtm[0].style.height = 0;
  frameBaseHorizBtm[0].style.width = $fWidth.value * scale.value + "px";
  frameBaseHorizBtm[0].style.borderRight =
    fBase.value * scale.value + "px solid transparent";
  frameBaseHorizBtm[0].style.borderLeft =
    fBase.value * scale.value + "px solid transparent";
  frameBaseHorizBtm[0].style.borderTop =
    fBase.value * scale.value + "px solid var(--secondary-color)";
  baseText[3].innerText = `${fBase.value}"`;
  //Bottom Horiz Depth
  frameDepthHorizBtm[0].style.height = fDepth.value * scale.value + "px";
  frameDepthHorizBtm[0].style.width = $fWidth.value * scale.value + "px";
  frameDepthHorizBtm[0].innerText = `${fDepth.value}"`;
  //Bottom Horiz Return
  frameReturnHorizBtm[0].style.height =
    fDepth.value * scale.value - brdThick.value * scale.value + "px";
  frameReturnHorizBtm[0].style.width =
    $fWidth.value * scale.value - 2 * (fBase.value * scale.value) + "px";
  frameReturnHorizBtm[0].style.margin = fBase.value * scale.value;
  frameReturnHorizBtm[0].innerText = `${fDepth.value - brdThick.value}"`;
  //Bottom Horiz Tape
  frameTapeHorizBtm[0].style.height =
    fBase.value * scale.value - brdThick.value * scale.value + "px";
  frameTapeHorizBtm[0].style.width =
    $fWidth.value * scale.value - 2 * (fBase.value * scale.value) + "px";
  frameTapeHorizBtm[0].style.margin = fBase.value * scale.value;
  frameTapeHorizBtm[0].innerText = `${fBase.value - brdThick.value}"`;

  boardSize();
}

function boardSize() {
  const width =
    (fBase.value * 4 +
      fDepth.value * 4 -
      brdThick.value * 4 +
      parseInt($fWidth.value, 10)) *
    scale.value;
  const height =
    (fBase.value * 4 +
      fDepth.value * 4 -
      brdThick.value * 4 +
      parseInt(fHeight.value, 10) +
      0.5) *
    scale.value;

  foldAttrib.style.height = height + "px";
  foldAttrib.style.width = width + "px";
  dims.innerHTML = `The flat size of board needed is ${
    width / scale.value
  }" w x ${height / scale.value}" h`;
}

//EventListeners
$button.addEventListener("click", calculate);
scale.addEventListener("input", calculate);

calculate();
