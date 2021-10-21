<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevetion-12" style="background: #e8dbdb">
          <v-toolbar style="background: #734f4f; color: #dac7c7; text-align: center">
            <v-toolbar-title>РЕГИСТРАЦИЯ</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                  prepend-icon="mdi-account"
                  name="email"
                  label="Введите вашу почту"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
              >
              </v-text-field>
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Введите ваш пароль"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="confirm-password"
                  label="Повторите пароль"
                  type="password"
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                @click="onSubmit"
                :disabled="!valid"
            >
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more or equel than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Password should match'
      ]
    }
  },
  methods: {
    onSubmit(){
      if (this.$refs.form.validate()){
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>
