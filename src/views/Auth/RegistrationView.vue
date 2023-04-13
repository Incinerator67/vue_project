<template>
  <v-container>
    <v-row justify="center">
    <v-col cols="12" sm="8" lg="6">
      <v-card class="elevetion-12" >
      <v-toolbar dark color="primary" class="pl-4" @click="onSubmit" :disabled="!valid">
        Registration
      </v-toolbar>
      <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          prepend-icon="mdi-account"
          name="email"
          label="Email"
          type="email"
          :rules="emailRules">
        </v-text-field>
        <v-text-field  
					prepend-icon="mdi-lock" 
					name="password" 
					label="Password" 
					type="password" 
					v-model="password"
					:rules="passwordRules" >
        </v-text-field>
        <v-text-field
          prepend-icon="mdi-lock"
          name="confirm-password" 
	        label="Confirm Password" 
          type="password"
          v-model="confirmPassword"
	        :rules="confirmPasswordRules" >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary">Registration</v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>
<script>
export default {data () {
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
      v => !!v || 'Name is required',
      v => (v && v.length >= 8) || 'Password must be more or equel than 8 characters'
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
  