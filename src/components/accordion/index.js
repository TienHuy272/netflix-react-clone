import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Frame,
  Item,
  Title,
  Inner,
  Header,
  Body,
} from './styles/accodion';

const ToggleContext = createContext();

export default function Accordion({ children, ...resProps }) {
  return (
    <Container {...resProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...resProps }) {
  return <Frame {...resProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...resProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...resProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...resProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...resProps}
    >
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
