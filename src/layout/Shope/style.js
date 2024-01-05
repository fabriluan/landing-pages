import styled from 'styled-components';

export const ShopeSt = styled.section`
  padding: 30px 0;
`;

export const ShopeGroup = styled.article`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  > div{
    /* background-color: red; */
    /* height: 700px; */
    padding: 0;
    > div{

      .rec-dot{
        padding: 8px;
        margin: 0 10px;
      }

      >button{
        margin: 0 20px;
      }
      >div{
        > div{
          > div{
              >div{
                  > div {
                    min-height: 530px;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;          
                  }
              }
          }
        }
      }
    }
  }
`;
