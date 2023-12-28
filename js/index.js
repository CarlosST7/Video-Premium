const $vidi = document.querySelector('#vid')
const $play = document.querySelector('.play')
const $stop = document.querySelector('.stop')
const $avan = document.querySelector('.avan')
const $retro = document.querySelector('.retro')


$play.addEventListener('click', playVid)
$stop.addEventListener('click', stopVid)
$avan.addEventListener('click', avanVid)
$retro.addEventListener('click', retroVid)

function playVid(){
  $vidi.play()
  $play.hidden = true
  $stop.hidden = false
}

function stopVid(){
  $vidi.pause()
  $play.hidden = false
  $stop.hidden = true
}

function avanVid(){
    $vidi.currentTime += 10
}

function retroVid(){
    $vidi.currentTime -=  5
}

const $progress = document.querySelector('#progress')
$vidi.addEventListener('loadedmetadata',handleLoad)
$vidi.addEventListener('timeupdate',handleTimeupdate)

function handleLoad(){
$progress.max = $vidi.duration
}

function handleTimeupdate(){
  $progress.value = $vidi.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput(){
  $vidi.currentTime = $progress.value
}
