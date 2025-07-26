<template>
  <div style="margin-bottom: 30px;">
    
    <div class="row">
      <div class="column1">
        <h1>Hello! </h1> <h2>It's</h2><br>
        <h1 class="animate-charcter">Antonio Priego Raya <small><small><small><small>he/him</small></small></small></small></h1>

        <div class="paragraph">
          <div>
            As a computer lover, I enjoy almost anything is done using a screen.
            But the most is coding, I feel like an artist giving shape the things that exist only in <pre class="spacer" id="change-text"></pre> head.
          </div>

          <div style="margin-top: 40px;">
            I'm <strong>currently looking to make the jump into the video game industry</strong>.
            <p style="margin-top: 0;">You can find out more about me <router-link to="/resume">here</router-link> and reach me at <a href="mailto:antoniopriego98@outlook.com">antoniopriego98@outlook.com</a> or <router-link to="/contact">through here</router-link>.</p>
          </div>
        </div>

        <div style="clear:both"></div>

        <div>
          <!--<img sizes="" src="img/ue-icon.png" alt="Unreal Engine" /> -->
        </div>

      </div>

      <div class="column2 photo">
        <img src="img/avatarGradient2.png" alt="It's me" />
        <div class="whatami">Computer Engineer</div>    
        <div class="currentPos">Currently : <strong>Mid Salesforce Developer</strong></div>    
        <div class="currentPos"> <img style="vertical-align: middle;" src="img/andalucia.png"> Córdoba, <small> Andalucía | Spain </small> </div>    
      </div>
    </div>
  
    <div class="thingsILove">
      <h2>Things I Love</h2>
      <div class="loveList">
        <div class="loveItem">
          <i class="fa fa-users fa-2x"></i>
          <p>My people</p>
        </div>
        <div class="loveItem">
          <i class="fa fa fa-bug fa-2x"></i>
          <p>Animals</p>
        </div>
        <div class="loveItem">
          <i class="fa fa-gamepad fa-2x"></i>
          <p>Video Games</p>
        </div>
        <div class="loveItem">
          <i class="fa fa-code fa-2x"></i>
          <p>Computing</p>
        </div>
        <div class="loveItem">
          <i class="fa fa-music fa-2x"></i>
          <p>Music</p>
        </div>
        <div class="loveItem">
          <i class="fa fa-book fa-2x"></i>
          <p>Read & Write</p>
        </div>
        <!-- ... puedes añadir más íconos y textos aquí ... -->
      </div>
    </div>

    <div class="thingsILove">
      <h2>Techie I Love</h2>
      <div class="loveList">
        <div class="loveItem">
          <img src="img/ue-icon-dark.png"/>
          <p style="font-size: 90%;">Unreal Engine</p>
        </div>
        <div class="loveItem">
          <img src="img/cpp-icon-dark.png"/>
          <p>Coding</p>
        </div>
        <div class="loveItem">
          <img src="img/linux-icon-dark.png"/>
          <p>Linux</p>
          <p><small><small>& OSs</small></small></p>
        </div>
        <div class="loveItem">
          <img src="img/uiux-icon-dark.png"/>
          <p>UX/UI</p>
        </div>
        <div class="loveItem">
          <img src="img/hw-icon-dark.png"/>
          <p>Hardware</p>
          <p><small><small>& tinkering</small></small></p>
        </div>
        <div class="loveItem">
          <img src="img/git-icon-dark.png"/>
          <p>Git</p>
          <p><small><small>& Open Source</small></small></p>
        </div>
        <div class="loveItem">
          <img src="img/notion-icon-dark.png"/>
          <p>Notion</p>
          <p><small><small>& Obsidian</small></small></p>
        </div>
      </div>
    </div>
  </div>
  
</template>



<script lang="ts">
  // eslint-disable-next-line
  import Vue from "vue";
  
  const texts = ["her", "his"];
  let index = 0;
  setInterval(() => { 
    index %=  2;
    document.getElementById("change-text")!.innerText = texts[index];
    index++;
  }, 1000);
</script>


<style scoped>
.thingsILove {
  margin-top: 20px;
  max-width: 800px;
}

.loveList {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-left: -60px;
  scale: 85%;
}

.loveItem {
  text-align: center;
  text-shadow: 2px 2px 1px #ff00bb;
}

.loveItem i {
  color: #e2e2e2;
}

.loveItem img {
  filter:invert(1);
  max-width: 60px;
  max-height: 60px;
  min-width: 60px;
  min-height: 60px;
}

.loveItem p {
  line-height: auto;
  margin-top: 0px;
  margin-bottom: 0px;
}

#show_button{
  visibility: hidden;
}

.paragraph {
  text-justify: justify;
  max-width: 1100px;
  margin-bottom: 20px;
}

.photo {
  float:inline-end !important;
  margin-top: 10px;
  text-align: center;
  padding-right: 0 !important;
}

.column1 {
  float: left;
  width: 70%;
  padding: 10px;
}

.column2 {
  float: right;
  width: 22.5%;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}


h1 {
  display: inline;
  margin-top: 0;
  margin-bottom: 40px;
}
h2 {
  display: inline;
  padding-right : 10px;
}


.whatami {  
  font-size: 22.8px;  
  text-decoration-line: overline;
  text-decoration-color: #FFD369;
}

.currentPos {  
  font-size: 15px;  
  letter-spacing: -1.5px;
}

.spacer {
  width:200px;
  overflow:auto;
  display: inline;
  margin: 0;
}

.animate-charcter
{
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #0096ff 0%,
    #ff3179 35%,
    #FFD369 50%,
    #ff8a4d 65%,
    #4dffe1 75%,
    #0096ff 100%
  );
  filter: blur(0.55px);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 9s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

@media only screen and (max-width: 954px) {
  h1 {
    font-size: 2em;
  }

  .column1 {
    float: center;
    width: 95%;
    padding: 10px;
  }

  .column2 {
    float: center;
    width: 95%;
  }

  .whatami {
    float: center;
    font-size: 17.8px;  
    text-decoration-line: overline;
    text-decoration-color: #FFD369;
  }

  .currentPos {  
    float: center;
    font-size: 12.5px;  
    letter-spacing: -1.5px;
  }

  .loveList {
    margin-left: 0px;
  }

  .loveItem img {
    max-width: 43px;
    max-height: 43px;
    min-width: 40px;
    min-height: 40px;
  }

  .loveItem p {
    font-size: 50% !important;
  }
}

</style>
