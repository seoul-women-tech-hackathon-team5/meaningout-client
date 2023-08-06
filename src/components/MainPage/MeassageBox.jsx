import styled from 'styled-components';

const StyledMessageBox = styled.div`
  width: 350px;
  height: 170px;
  background-color: #ffffff; /* White background color */
  border: 3px solid #558BCF; /* Add border color and thickness */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-right: -150px; /* Adjust the margin-right to move the MessageBox to the left */
  margin-left: 20px; /* Adjust the margin-left to fine-tune the balance */

  .left-content {
    display: flex;
    flex-direction: column;
    color: #558BCF; /* Set text color to #558BCF */
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .number {
    font-size: 32px;
    font-weight: bold;
    color: #558BCF; /* Set text color to #558BCF */
    margin-top: 10px; /* Adjust the margin-top to move the number below the text */
    margin-left: 50px; /* Adjust the margin-left to move the number a bit more to the left */
  }

  .right-content {
    display: flex;
    flex-direction: column;
    color: #558BCF; /* Set text color to #558BCF */
  }
`;

export default function MessageBox() {
  return (
    <StyledMessageBox>
      <div className='left-content'>
        <div className='title'>오늘 들어온 카드</div>
        <div className='number'>39</div>
      </div>
      <div className='right-content'>
        <div className='title'>함께하는 착한 가게</div>
        <div className='number'>150</div>
      </div>
    </StyledMessageBox>
  );
}
