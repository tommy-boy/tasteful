<BasicForm
  isSubmitting={props.isSubmitting}
  submitAction={formState => props.doSignIn(formState)}
>
  <TextInput
    type="email"
    label="Email"
    name="email"
    placeholder="Enter email..."
    required
  />
  <TextInput
    type="password"
    label="Password"
    name="password"
    placeholder="Enter password..."
    min={6}
    max={12}
    required
  />
  <SubmitButton label="Login" />
</BasicForm>;
