<template>
  <div class="hello">
    <p>Enter some text below and have NestJS answer with the same text.</p>
    <div class="input-container">
      <textarea
        class="text-container"
        v-model="input"
        placeholder="write something here"
      ></textarea>
    </div>
    <div class="send-container">
      <button class="send-button" @click="send()">Send</button>
    </div>
    <p v-if="response.length > 0">
      {{ response }}
    </p>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'HelloWorld',
  mounted() {
    const _this = this;
    const socket = new io('api.example.local.dev', {
      withCredentials: true,
      transports: ['websocket'],
    });
    this.socket = socket;
    this.socket.on('response', function (response) {
      _this.response = response;
    });
  },
  data() {
    return {
      socket: null,
      input: '',
      response: '',
    };
  },
  methods: {
    send() {
      const message = this.input;
      this.socket.emit('message', message);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.form-container {
  display: inline-block;
}

.text-container {
  height: 100px;
  width: 400px;
}
.send-button {
  width: 400px;
}
</style>
