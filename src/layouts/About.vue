<template>
  <div id="about">
    <div id="about__container">

      <Topic
        title="About"
        description="My name's João Victor. I am 17 years old and I am a developer with a
        focus on backend, but with full availability to act as a fullstack. I
        started to be interested in programming when I was only 13 years old and
        since then I have been dedicating myself in the area. You can click on some technologies to visit github projects."
      />

      <div class="cards">
        <Card title="Backend Technology">
          <Technology name="Golang" stars="3" />
          <Technology name="Javascript" stars="4" />
          <Technology name="PHP" stars="4" />
          <Technology name="Python" stars="3" />
        </Card>
        <Card title="Backend Technology">
          <Technology name="HTML" stars="5" />
          <Technology name="CSS" stars="5" />
        </Card>
        <Card title="Extra">
          <Technology name="Linux" stars="4" />
          <Technology name="Heroku" stars="4" />
        </Card>
      </div>

      <Arrow link="#projects" />
    </div>
  </div>
</template>

<script>
import Topic from "../components/Topic";
import Card from "../components/About/Card";
import Technology from "../components/About/Technology";
import Arrow from "../components/Arrow";

export default {
  components: {
    Arrow,
    Topic,
    Card,
    Technology
  }
};
</script>

<style scoped>
#about {
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#about__container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 2% 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0;
  align-items: stretch;
}

@media (max-width: 576px) {
  .cards {
    display: initial;
  }
}
</style>
