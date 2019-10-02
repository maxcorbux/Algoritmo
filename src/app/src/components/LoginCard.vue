<template>
  <q-card class="my-card">
      <q-item style="padding: 10px;">
        <q-item-section avatar>
          <q-avatar>
            <q-icon name="account_circle"></q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>

      <q-input v-model="userLogin" label="login" style="padding: 10px;"/>
      <q-input v-model="password" :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="white" text-color="black" label="Logar" style="padding: 10px;"/>
    </q-card>
</template>

<script>
export default {
  name: 'LoginCard',
  data() {
    return {
      isPwd: true,
      userLogin: '',
      password: '',
    };
  },
};
</script>

<style scoped>
  .my-card {
    width: 300px;
  }
</style>
