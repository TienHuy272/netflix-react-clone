import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Text,
  Title,
  Break,
} from './styles/footer';

export default function Footer({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...resProps }) {
  return <Row {...resProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...resProps }) {
  return <Column {...resProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...resProps }) {
  return <Link {...resProps}>{children}</Link>;
};

Footer.Text = function FooterText({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};

Footer.Title = function FooterTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Footer.Break = function FooterBreak({ children, ...resProps }) {
  return <Break {...resProps}>{children}</Break>;
};
