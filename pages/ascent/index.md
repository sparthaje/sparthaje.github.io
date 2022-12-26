<link rel="stylesheet" href="../../styles/md.css">
<div id="title">shreepa parthaje</div>
<a id="return" href="../../index.html">&#8592; return home</a>
<img id="profile" src="../../img/landing/profile.png"/>

# Ascent - A Vertical-Takeoff Landing Aircraft
## What is it?
<style>
.container {
  display: flex;
}

.column {
  width: 50%;
  padding: 5px;
}

.column-fourth {
  width: 25%;
  padding: 5px;
}

.column-fourth > img {
    font-size: 30px;
    object-fit: cover;
}
</style>

<div class="container">
  <div class="column">
    Ascent is an aircraft me and two friends designed to stabilize and land itself using only a set of two counter rotating propellers. Our goal was to achieve this using cheap electronics and hardware delivering the whole product for under ~$100. It was largely inspired by the work done with BPS Space's <a href='https://www.youtube.com/watch?v=5kuLr_fbaNs' target="_blank">Sprite aircraft</a>
    <br/><br/>
    <u>Our project goals:</u>
    <li>Fly without oscillations</li>
    <li>Hover at 5m</li>
    <li>Land without tipping over</li>
  </div>
  <div class="column">
    <img src="https://www.testim.io/wp-content/uploads/2019/11/Testim-What-is-a-Test-Environment_-A-Guide-to-Managing-Your-Testing-A.png" alt="Alt text for the image" style="height: 35vh;">
  </div>
</div>

## Hardware



<div class="container" style="font-size: 14px;">
  <div class="column-fourth">
    <img src="https://www.testim.io/wp-content/uploads/2019/11/Testim-What-is-a-Test-Environment_-A-Guide-to-Managing-Your-Testing-A.png" alt="Alt text for the image" style="height: 35vh;">
    Frame: Made out of light weight cheap carbon-fiber rods
  </div>
  <div class="column-fourth">
    <img src="https://www.testim.io/wp-content/uploads/2019/11/Testim-What-is-a-Test-Environment_-A-Guide-to-Managing-Your-Testing-A.png" alt="Alt text for the image" style="height: 35vh;">
    Gimballed nozzle: Controls thrust direction
  </div>
  <div class="column-fourth">
    <img src="../../img/g/ascent/electronics.jpeg" alt="Alt text for the image" style="height: 35vh;">
    Flight Computer: Inertial Measurement Unit, Altimeter, Teensy 3.6 Microcontroller, and SD card reader
  </div>
  <div class="column-fourth">
    <img src="../../img/content/ascent.jpeg" alt="Alt text for the image" style="height: 35vh;">
    Counter-rotating propellers: Creates 2kg of thrust + helps controll roll
  </div>
</div>

<div class="container">
    <div class="column" style="width: 20%; font-size: 14px;">
        <video controls="" style="height: 30vh;">
            <source src="../../img/g/ascent/1.mp4#t=0.01" type="video/mp4">
        </video>
        <br/>
        Testing the gimbal response speed
    </div>
    <div class="column" style="width: 80%">
    Test
    </div>
</div>

<!-- <pre>
<code>
def method():
    return 4
</code>
</pre> -->

`hello`

## Software + Controls



