import styled from 'styled-components';
import { useRecoilValue } from "recoil";
import { NameAtom } from '../../recoil/NameAtom';
import { CardAtom } from '../../recoil/CardAtom';
import { KeyWordAtom } from '../../recoil/KewordAtom';
import { PraiseAtom } from '../../recoil/PraiseAtom';
import React from 'react'; // eslint-disable-line no-unused-vars

const StyledPreviewCard = styled.div`
    width: 334px;
    height: 538px;
    border-radius: 10px;
    border: 3px solid #2294FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`
const CardHeader = styled.div`
    height: 110px;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CardImage = styled.img`
    width: 330px;
    height: 265px;
    margin-bottom: 20px;
`

const CardKeywords = styled.div`
    width: 296px;
    height: 15px;
    margin-bottom: 10px;
    padding-left: 9px;
`

const CardPraise = styled.div`
    width: 296px;
    height: 98px;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    padding: 9px;
    margin-bottom: 20px;
`

const PreviewCard = React.forwardRef((props, ref) => {
    const name = useRecoilValue(NameAtom);
    const card = useRecoilValue(CardAtom);
    const keywords = useRecoilValue(KeyWordAtom);
    const praise = useRecoilValue(PraiseAtom);

    return (
        <StyledPreviewCard ref={ref}>
            <CardHeader>
                <div>착한 가게 오자</div>
                {name}
            </CardHeader>
            <CardImage src={card} alt="card-image" />
            <CardKeywords>#{keywords}</CardKeywords>
            <CardPraise>{praise}</CardPraise>
        </StyledPreviewCard>
    );
});

PreviewCard.displayName = "PreviewCard"; 

export default PreviewCard;