import React from "react";

import { Container, Text, Spacer, Input, Textarea, Button } from "../../atoms";

const Contact = () => {
  return (
    <Container width="80%" margin="100px auto" id="contact">
      <Text textAlign="center" textType="h4" bold color="#1F6AF7">
        CONTACT US
      </Text>
      <Spacer size={36} />
      <Container width="60%" margin="auto">
        <Input placeholder="Nama" display="block" width="100%" />
        <Spacer size={16} />
        <Input type="email" placeholder="Email" display="block" width="100%" />
        <Spacer size={16} />
        <Textarea
          placeholder="Isi pesan anda"
          display="block"
          width="100%"
          rows={10}
        />
        <Spacer size={24} />
        <Container width="100%" display="flex" justifyContent="center">
          <Button onClick={() => alert("Pesan Terkirim!")}>Kirim</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
