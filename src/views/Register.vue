<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Register</h1>
        <v-form ref="registerForm" v-model="formValidity">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-autocomplete
            label="Which browser do you use?"
            :items="browsers"
          ></v-autocomplete>
          <v-file-input label="Attach profile Picture"></v-file-input>
          <v-text-field
            v-model="birthday"
            label="Birthday"
            readonly=""
          ></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox
            label="Agree to terms and conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          ></v-checkbox>
          <v-btn
            type="submit"
            color="primary"
            class="mr-4"
            :disabled="!formValidity"
            >Submit</v-btn
          >
          <v-btn color="success" @click="validateForm" class="mr-4">
            Validate Form
          </v-btn>
          <v-btn color="warning" @click="resetValidation" class="mr-4"
            >Reset Validation</v-btn
          >
          <v-btn color="error" @click="resetForm">Reset Form</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      browsers: ["Chrome", "Firefox", "Safari", "Edge", "Brave"],
      birthday: "",
      agreeToTerms: false,
      agreeToTermsRules: [
        (value) =>
          !!value ||
          "You must agree to the terms and conditions to sign up for an account.",
      ],
      email: "",
      emailRules: [
        (value) => !!value || "Email is required!",
        (value) =>
          (value && value.indexOf("@") !== 0) ||
          "Email should have a username.",
        (value) =>
          (value && value.includes(".")) ||
          "Email should include a period symbol.",
        (value) =>
          (value && value.indexOf(".") - value.indexOf("@") > 1) ||
          "Email should contain a valid domain.",
        (value) =>
          (value && value.indexOf(".") <= value.length - 3) ||
          "Email should contain a valid domain extension.",
      ],
      formValidity: false,
    };
  },
  methods: {
    resetForm() {
      this.$refs.registerForm.reset();
    },
    resetValidation() {
      this.$refs.registerForm.resetValidation();
    },
    validateForm() {
      this.$refs.registerForm.validate();
    },
  },
};
</script>

<style></style>
