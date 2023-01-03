import React from "react";

import { Container, Text, Spacer, Button } from "../../atoms";
import { AboutFeatureCard } from "../../molecules";

const About = () => {
  return (
    <Container id="about" width="80%" margin="100px auto">
      <Text textAlign="center" textType="h4" bold color="#1F6AF7">
        ABOUT
      </Text>
      <Spacer size={12} />
      <Container width="80%" margin="auto">
        <Text textAlign="center" textType="h6">
          Kami merupakan sekumpulan orang yang akan memberikan solusi terbaik
          untuk proses bisnis anda.
        </Text>
      </Container>
      <Spacer size={96} />
      <AboutFeatureCard
        title="Manajemen Penjualan"
        description="Kelola seluruh barang yang disediakan oleh perusahaan anda secara fleksibel."
        imageSrc="https://cdn.pixabay.com/photo/2018/02/15/14/37/paper-3155438_960_720.jpg"
      />
      <Spacer size={64} />
      <AboutFeatureCard
        title="Catatan Harian"
        description="Terima laporan harian atas segala aktivitas jual beli yang terjadi."
        imageSrc="https://cdn.pixabay.com/photo/2018/02/15/14/37/paper-3155438_960_720.jpg"
        imagePosition="right"
      />
      <Spacer size={64} />
      <AboutFeatureCard
        title="Perhitungan Otomatis"
        description="Hitung laba yang perusahaan anda raih secara otomatis."
        imageSrc="https://cdn.pixabay.com/photo/2018/02/15/14/37/paper-3155438_960_720.jpg"
      />
      <Spacer size={64} />
      <AboutFeatureCard
        title="Fitur Plus+"
        description="Nikmati fitur-fitur tambahan sesuai dengan tingkatan yang anda pilih."
        imageSrc="https://cdn.pixabay.com/photo/2018/02/15/14/37/paper-3155438_960_720.jpg"
        imagePosition="right"
      />
      <Spacer size={48} />
      <Container width="100%" display="flex" justifyContent="center">
        <Button
          width="200px"
          onClick={() => {
            document.getElementById("pricing")?.scrollIntoView();
          }}
        >
          Tinjau Tingkatan
        </Button>
      </Container>
    </Container>
  );
};

export default About;
