import styled from 'styled-components';

export const AboutUsRightColumn = styled.div`
  flex-basis: 40%;
  text-align: center;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
  
  @media (max-width: 576px) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const RAUDiv = styled.div`
// margin-left: 20%;
display: flex;
justify-content: space-between;
// position: fixed;
// top: 50%;
// right: 0;
// transform: translateY(-50%);
// background-color: #ccc;
// padding: 10px;
// border-radius: 5px;

@media (max-width: 768px) {
  flex-basis: 100%;
  margin-bottom: 20px;
}
`;


export const RAUImgDiv = styled.div`

`
export const RAUImg = styled.img`
width:100%;
`
export const RAUHrLines = styled.div`
position: relative;
text-align: center;
margin-left: 10rem;
color: orange;
font-style: italic;

&::before,
&::after {
  content: "";
  height: 2px;
  width: 130px;
  position: absolute;
  top: 50%;
  background: orange;
}

&::before {
  left: 5rem;
}

&::after {
  right: 5rem;
}
`;

export const RAUTextDiv = styled.div`
display: flex;
align-items: center;
`

export const RAUText = styled.p`
// display: flex;
// align-items: left;
text-align:left;
text-align-last: left;
`;

export const RAUText2 = styled.p`
font-size: ${props => props.fontSize || '1rem'};
// display: flex;
// align-items: left;
text-align:right;
text-align-last: right;
`

export const RAUBorderedText = styled.p`
font-size: ${props => props.fontSize || '5rem'};
  margin:0;
  color: white;
  text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;

  @supports((text-stroke: 2px black) or (-webkit-text-stroke: 2px black)) {
      color: transparent;
      -webkit-text-stroke: 2px black;
      text-stroke: 2px black;
      text-shadow: none;
  }
`;



export const RAUNonBorderedText = styled.div`
font-size: 5rem;
color: black;
display: inline-block;
vertical-align: middle;
`;

export const RAUHeader2 = styled.div`
font-size: 5rem;
color: black;
text-align:right;
text-align-last: right;
`;

export const RAUIconDiv = styled.div`
// margin-left: 40%;
// display: flex;
// align-items: center;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
export const RAUIcons = styled.img`
margin-right: 2rem;
margin-bottom: 1rem;
width:50%;
`
