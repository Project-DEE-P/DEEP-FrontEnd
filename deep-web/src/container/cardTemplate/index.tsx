import React from "react";
import * as S from "../../components/template/style";

interface CardProps {
  id: Number;
  uid: String;
  template: String;
  name: String;
  position: String;
  department: String;
  phone: String;
  email: String;
  github: String;
  createdDateTime: String;
  modifiedDateTime: String;
}

const CardTemplate = ({ data }: any) => {
  return (
    <>
      <S.TemplatePreviewWraper>
        <S.TemplatePreviewCard>
          <S.CardInfoWraper>
            <S.CardDepartment>{data.department}</S.CardDepartment>
            <S.CardName>{data.name}</S.CardName>
            <S.CardPosition>{data.position}</S.CardPosition>
            <S.TemplateRowContainer>
              <S.CardInfoBlue>Tel.</S.CardInfoBlue>
              <S.CardInfoBlack>{data.phone}</S.CardInfoBlack>
            </S.TemplateRowContainer>
            <S.TemplateRowContainer>
              <S.CardInfoBlue>E-mail. </S.CardInfoBlue>
              <S.CardInfoBlack>{data.email}</S.CardInfoBlack>
            </S.TemplateRowContainer>
            <S.TemplateRowContainer>
              <S.CardInfoBlue>Portfolio. </S.CardInfoBlue>
              <S.CardInfoBlack>{data.github}</S.CardInfoBlack>
            </S.TemplateRowContainer>
          </S.CardInfoWraper>
        </S.TemplatePreviewCard>
      </S.TemplatePreviewWraper>
    </>
  );
};

export default CardTemplate;
