<link rel="stylesheet" href="../../styles/md.css">
<div id="title">shreepa parthaje</div>
<a id="return" href="../../index.html">&#8592; return home</a>
<img id="profile" src="../../img/landing/profile.png"/>
<script>
const jumpto = (element) => {
  document.getElementById(element.dataset.jumpto).scrollIntoView();
}
</script>
<br/><br/><br/><br/>

# MigosNET - LSTM Network to Write Lyrics

[MigosNET DEMO](https://sparthaje.github.io/MigosNet)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Migos_Veld_festival_2017.jpg/424px-Migos_Veld_festival_2017.jpg)

Coming off the new [Migos](https://en.wikipedia.org/wiki/Migos) Culture II album, I wanted to use Tensorflow / Keras to build a model that generates Migos lyrics. 

## Goals

I was curious if I split the lyrics from the three artists as data for three models what patterns would emerge pertain to each individual. One idea I wanted to explore in particular was using lyric generation, character by character, so I could use spelling as a proxy. If one word was spelled correctly frequently it would imply the word was frequent in an artists vocabulary. If certain phrases were repeatedly spelled correctly it would imply these phrases are common. If certain sections of schemes were spelled correctly it would imply the artists style. 

## Network

The network I went with was an recurrent neural network, specifically an [Long short-term memory network](https://en.wikipedia.org/wiki/Long_short-term_memory). I collected the data by scraping Genius lyrics, sanitizing the data, and splitting the data into the artists' specific category. The network was fairly simple with two key LSTM layers. For training the characters were just converted into a number, and when generating data a random sample would be fed in from the training data set.

## Results

Some examples of outputs can be found at: https://sparthaje.github.io/MigosNet

Some key successes were I noticed is while the lyrics were for the most part meaningless, the essence of the artists could be observed through some lyrics. Some excerpts being:
```
Offset: onds mad flawless hey we got mad calling mad mansion
Takeoff: i dont know i kust aint got none right now then we tretved its a lous goae crop
Offset: bus offgnt perky going cown the dlub with me balling the soow mobmeans we dont huck with the stars
```

The biggest failure was the model for Quavo was heavily overfit to the training data with most of the output being non-coherent. One example being:
```
take one time one time only take one only take one time only take one only take one time only take one only take one time only take one only take one time only take one time one time only take one only take one time only take one only take one time only take one only take one time only take one only take one time only take one 
``` 
The other two models were still slightly overfit with the model "plagiarizing" existing work in sections of the output. The models still have significant room for improvement with a more complicated architecture. If the goal is changed for making good lyrics, generating word by word might produce better results (but it might be even more prone to overfitting).
