import React from 'react';
import { FaPhone, FaMapPin, FaClock } from 'react-icons/fa';
import { Wrapper, Map, IconContainer, ContactList } from './Contact.style';

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <h2>Kontakt</h2>
        <ContactList>
          <li>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            <div>
              <p>Telefon</p>
              <p>+ 48 661 180 687</p>
            </div>
          </li>
          <li>
            <IconContainer>
              <FaMapPin />
            </IconContainer>
            <div>
              <p>Adres</p>
              <p>ul. Bytomska 2, 41-250 Czeladź</p>
            </div>
          </li>
          <li>
            <IconContainer>
              <FaClock />
            </IconContainer>
            <div>
              <p>Godziny otwarcia</p>
              <p>poniedziałek - piątek</p>
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
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.5599322857765!2d19.0732621!3d50.318804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d10163604a79%3A0xd8585c593e160bd4!2sBytomska%202%2C%2041-250%20Czelad%C5%BA!5e0!3m2!1spl!2spl!4v1651672226793!5m2!1spl!2spl'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></Map>
      </div>
    </Wrapper>
  );
};

export default Contact;
