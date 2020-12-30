<template>
  <div id="container">
    <div>
      <h1>
        Hello, my name's <span class="highlight">João Victor</span>. I'm a
        <span class="highlight">Backend Developer</span>.
      </h1>
      <h6>and a <span class="highlight">golang</span> lover.</h6>
    </div>
    <img src="../../assets/gopher.png" style="width: 300px" id="gopher" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 2% 0;
  color: #ddd;
}

#container h1 {
  font-size: 3rem;
}

span.highlight {
  color: #ff3838;
}

@media (max-width: 768px) {
  img#gopher {
    display: none;
  }
}
</style>
