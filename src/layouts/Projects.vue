<template>
  <div id="projects">
    <div id="projects__container">
      <Topic
        title="Projects"
        title_color="#fff"
      />
      <Project />
    </div>
  </div>
</template>

<script>
import Topic from "../components/Topic";
import Project from "../components/Projects/Project";

export default {
  components: {
    Topic,
    Project
  },
};
</script>

<style scoped>
#projects {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #111;
}
#projects__container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 2% 0;
}
</style>
