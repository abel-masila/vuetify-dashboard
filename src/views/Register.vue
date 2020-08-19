<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Register</h1>
        <v-form>
          <v-text-field label="Email" type="email"></v-text-field>
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
          <v-checkbox label="Agree to terms and conditions"></v-checkbox>
          <v-btn type="submit" color="primary">Submit</v-btn>
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
    };
  },
};
</script>

<style></style>
