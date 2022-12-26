<link rel="stylesheet" href="../../styles/md.css">
<div id="title">shreepa parthaje</div>
<a id="return" href="../../index.html">&#8592; return home</a>
<img id="profile" src="../../img/landing/profile.png"/>

# Audio Processing Circuitry for Speaker

<div class="container">
<div style="width: 30%; padding-right: 15px;">

![](../../img/conent/../content/speaker.jpg)

<video controls="" style="width: 100%;">
    <source src="../../img/g/speaker/3.mp4" type="video/mp4">
</video>

</div>
<div style="width: 70%; padding-left: 25px;">

## Design overview
The aux port emits analog signals when playing music, and circuitry needs to be built to take this weak signal and use it to drive a large speaker. My goal with this project was to make the speaker on the left perform at high volumes without noticeable noise.


The circuit:
- First stage combines left and right channel voltage signals
- Op-amp stage amplifies the voltage from `mV` range to the `V` range
- Low-pass RC filter filters out noise added in the amplification process
- Push-pull stage pushes more current into the speakers to drive the large discs

## Designing the low-pass RC filter
The op-amp stage I used to amplify the signal had issues of adding a lot of high frequency noise to the circuit. While a variety of solutions exist, for my first analog circuit I went with a simple RC low-pass filter. Analyzing the signal after amplification in the frequency domain showed the noisy frequencies. Taking into account the frequency range I wanted to filter out along with a 10 `kΩ` resistor, I could solve for what capacitor I needed. 

</div>
</div>
