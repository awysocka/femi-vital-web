import React from 'react';
import { FaPhone, FaMapPin, FaClock } from 'react-icons/fa';
import { Wrapper, Map, IconContainer, ContactList } from './Contact.style';

const Contact = () => {
  return (
    <Wrapper id='kontakt'>
      <div>
        <h2>Kontakt</h2>
        <ContactList>
          <li>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            <div>
              <p>Telefon</p>
              <a href='tel:+48 661 180 687'>+ 48 661 180 687</a>
            </div>
          </li>
          <li>
            <IconContainer>
              <FaMapPin />
            </IconContainer>
            <div>
              <p>Adres</p>
              <p>Kolonia Pekin 5a/2, 41-203 Sosnowie</p>
            </div>
          </li>
          <li>
            <IconContainer>
              <FaClock />
            </IconContainer>
            <div>
              <p>Godziny otwarcia</p>
              <p>poniedziałek - piątek:</p>
              <p>09:00 - 19:00</p>
              <p>sobota - niedziela:</p>
              <p>ZAMKNIĘTE</p>
            </div>
          </li>
        </ContactList>
      </div>
      <div>
        <Map
          title='maps'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.178199886313!2d19.072758515725535!3d50.28860137945336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d039c77b8593%3A0x90eabd5d18696c57!2sKolonia%20Pekin%205a%2C%2041-203%20Sosnowiec!5e0!3m2!1spl!2spl!4v1677702110471!5m2!1spl!2spl'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></Map>
      </div>
    </Wrapper>
  );
};

export default Contact;
