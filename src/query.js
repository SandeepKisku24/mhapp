import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Code, Title, Stack } from '@mantine/core';
import React from 'react';

const Query= ()=>{
    const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      message: '',
    },

    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.lastName}`,
      message: `${values.message}`,
    }),
  });

  return (
    <Stack>
        <Title> Let us know your query </Title>
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
        action="mailto:mercyhospital@gmail.com" method="post" >
        <TextInput
          label="First name"
          placeholder="First name"
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
          c="white"
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
          c="white"
        />
        <TextInput
          type="text"
          label="Message"
          placeholder="Message"
          mt="md"
          key={form.key('message')}
          {...form.getInputProps('message')}
          c="white"
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      
    </Stack>
  );
}

export default Query;