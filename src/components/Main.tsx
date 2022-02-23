import styled from 'astroturf/react';
import React from 'react';

export const Main = () => (
  <>
    <Img src="/images/mainImage.jpg" />

    <Title>
      <Name>Название</Name>
      <ShortDesc>&nbsp;- Магазин электротранспорта</ShortDesc>
    </Title>

    <Desc>
      <div>
        Наш интернет-магазин предлагает новые элетровелосипеды, гироскутеры, гироборды и другой
        элетротранспорт по доступным ценам. Также в продаже полный комплект для переоборудования
        велосипеда на электро тягу.
      </div>
      <div>
        Наши преимущества - высокое качество и низкие цены на моноколеса, электровелосипеды,
        электроскутеры, электросамокаты, литиевые аккумуляторы и компоненты.
      </div>
    </Desc>
  </>
);

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Title = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  text-align: center;
  top: 0;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 36px;
  color: #ffffff;
  line-height: 57px;
`;

const ShortDesc = styled.span`
  font-weight: 500;
  font-size: 28px;
  color: #ffffff;
  line-height: 57px;
`;

const Desc = styled.div`
  position: absolute;
  text-align: justify;
  letter-spacing: 0.1em;
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  top: 100px;
  right: 50px;
  width: 379px;
  div {
    text-indent: 1.5em;
  }
`;
