import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Code, Title, Stack } from '@mantine/core';
import React from 'react';
import axios from 'axios';

const Query = () => {
  const [submittedValues, setSubmittedValues] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const form = useForm({
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

  const handleSubmit = async (values) => {
    setSubmittedValues(JSON.stringify(values, null, 2));

    try {
      const response = await axios.post('https://formspree.io/f/mpwaaonl', values);
      if (response.status === 200) {
        setFormStatus('Form submitted successfully!');
      } else {
        setFormStatus('Failed to submit the form.');
      }
    } catch (error) {
      setFormStatus('Failed to submit the form.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Stack>
      <Title>Let us know your query</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
      {/* {submittedValues && <Code>{submittedValues}</Code>} */}
      {formStatus && <p>{formStatus}</p>}
    </Stack>
  );
};

export default Query;
