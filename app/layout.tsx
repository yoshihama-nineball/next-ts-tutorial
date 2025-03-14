// server component
import React from 'react';
import ClientThemeWrapper from './components/layouts/ClientThemeWrapper';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ClientThemeWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientThemeWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
